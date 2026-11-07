import fs from 'fs';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import type {
  TtsProvider,
  TtsSegmentRequest,
} from '../../../types/ttsProvider';
import type { TtsSynthesizeResult } from './types';
import { streamPreviewAudio } from './previewStream';
import { TaskCancelledError } from '../../helpers/taskContext';
import {
  transcodeToPcm16Wav,
  readWavInfo,
} from '../../helpers/dubbing/audioPipeline';

/**
 * Edge TTS（微软 Edge Read Aloud 逆向接口，经 msedge-tts）。
 *
 * 选型记录（2026-07，任务 5.3）：msedge-tts v2.0.6（2026-06 发版，周下载 32K，41KB）
 * vs edge-tts-universal v1.4.0（2026-02 发版）。两者都已修复 2025-12 断供
 * （UA/WebSocket 头收紧），msedge-tts 更新更勤、体积更小、真实合成实测通过 → 选定。
 * 该通道定位「免费试用档，不承诺可用性」：接口随时可能再断，错误信息引导切换。
 */

/** speed（1=原速）→ Edge rate 百分比串（+20% / -10%）。 */
export function speedToEdgeRate(speed: number | undefined): string {
  const s = Number(speed);
  if (!Number.isFinite(s) || s <= 0) return '+0%';
  const pct = Math.round((Math.min(3, Math.max(0.5, s)) - 1) * 100);
  return `${pct >= 0 ? '+' : ''}${pct}%`;
}

/** 断供类错误的引导文案（拼在原始错误后，UI 直接展示）。 */
const EDGE_OUTAGE_HINT =
  'Edge TTS အခမဲ့အွန်လိုင်းဝန်ဆောင်မှုကို လက်ရှိအသုံးပြုမရနိုင်ပါ။ ဒီဝန်ဆောင်မှုမှာ အမြဲတမ်းအသုံးပြုနိုင်မယ်လို့ အာမခံမရှိပါ။ Local TTS သို့မဟုတ် OpenAI-compatible TTS ဝန်ဆောင်မှုကို ရွေးချယ်ပါ။';

/** Convert upstream failures into actionable Burmese diagnostics. */
export function describeEdgeTtsError(error: unknown): string {
  const detail = error instanceof Error ? error.message : String(error);
  if (/\b403\b|unexpected server response:\s*403/i.test(detail)) {
    return `Edge TTS ဆာဗာက ချိတ်ဆက်မှုကို ငြင်းပယ်ထားပါတယ် (HTTP 403)။ ဒါဟာ API Key မှားတာလို့ မဆိုလိုပါဘူး။ Microsoft ဘက်က အခမဲ့ WebSocket လမ်းကြောင်းကို ပိတ်ထားခြင်း သို့မဟုတ် ကန့်သတ်ထားခြင်း ဖြစ်နိုင်ပါတယ်။ ${EDGE_OUTAGE_HINT}`;
  }
  return `Edge TTS ချိတ်ဆက်မှု မအောင်မြင်ပါ။ အကြောင်းရင်း: ${detail}. ${EDGE_OUTAGE_HINT}`;
}

function toPositiveNumber(value: unknown, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

/** 单段合成：mp3 流收齐 → ffmpeg 统一转 16-bit PCM 单声道 wav。 */
export async function synthesizeWithEdge(
  provider: TtsProvider,
  request: TtsSegmentRequest,
): Promise<TtsSynthesizeResult> {
  const timeoutMs = toPositiveNumber(provider.requestTimeoutSec, 60) * 1000;
  const mp3 = await synthesizeEdgeMp3(
    request.text,
    request.voice,
    speedToEdgeRate(request.speed),
    timeoutMs,
    request.signal,
    request.preview ? request : undefined,
  );
  if (!Buffer.isBuffer(mp3)) return mp3;

  const tmp = `${request.outWavPath}.edge-${Date.now()}.mp3`;
  fs.writeFileSync(tmp, mp3);
  try {
    await transcodeToPcm16Wav(tmp, request.outWavPath, {
      signal: request.signal,
    });
  } finally {
    try {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    } catch {
      /* ignore */
    }
  }
  return {
    wavPath: request.outWavPath,
    durationMs: readWavInfo(request.outWavPath).durationMs,
  };
}

function synthesizeEdgeMp3(
  text: string,
  voice: string,
  rate: string,
  timeoutMs: number,
  signal?: AbortSignal,
  previewRequest?: TtsSegmentRequest,
): Promise<Buffer | TtsSynthesizeResult> {
  return new Promise<Buffer | TtsSynthesizeResult>((resolve, reject) => {
    if (signal?.aborted) {
      reject(new TaskCancelledError());
      return;
    }
    const tts = new MsEdgeTTS();
    const previewAbort = new AbortController();
    let settled = false;
    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      previewAbort.abort();
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
      try {
        tts.close();
      } catch {
        /* ignore */
      }
      fn();
    };
    const onAbort = () => finish(() => reject(new TaskCancelledError()));
    const timer = setTimeout(
      () =>
        finish(() =>
          reject(
            new Error(
              `Edge TTS ချိတ်ဆက်မှု အချိန်ကုန်သွားပါတယ် (${timeoutMs / 1000} စက္ကန့်)။ ${EDGE_OUTAGE_HINT}`,
            ),
          ),
        ),
      timeoutMs,
    );
    signal?.addEventListener('abort', onAbort, { once: true });

    (async () => {
      await tts.setMetadata(
        voice,
        OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3,
      );
      if (settled) return;
      const { audioStream } = await tts.toStream(text, { rate });
      if (settled) {
        audioStream.destroy();
        return;
      }
      if (previewRequest) {
        try {
          const result = await streamPreviewAudio(audioStream, {
            ...previewRequest,
            signal: AbortSignal.any([
              previewAbort.signal,
              ...(signal ? [signal] : []),
            ]),
          });
          finish(() => resolve(result));
        } catch (error) {
          finish(() => reject(error));
        }
        return;
      }
      const chunks: Buffer[] = [];
      audioStream.on('data', (c: Buffer) => chunks.push(c));
      audioStream.on('end', () =>
        finish(() => {
          const buf = Buffer.concat(chunks);
          if (buf.length === 0) {
            reject(new Error(`Edge TTS မှ အသံဖိုင်အလွတ် ပြန်လာပါတယ်။ ${EDGE_OUTAGE_HINT}`));
          } else {
            resolve(buf);
          }
        }),
      );
      audioStream.on('error', (e: Error) =>
        finish(() =>
          reject(
            new Error(describeEdgeTtsError(e)),
          ),
        ),
      );
    })().catch((e) =>
      finish(() =>
        reject(
          new Error(
            describeEdgeTtsError(e),
          ),
        ),
      ),
    );
  });
}
