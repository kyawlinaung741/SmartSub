import os from 'os';
import path from 'path';
import fs from 'fs';
import {
  TTS_XIAOMI_MIMO,
  isTtsProviderConfigured,
  parseTtsVoices,
  type TtsProvider,
} from '../../../types/ttsProvider';
import { synthesizeSegment, defaultVoiceOf } from './index';

export interface TtsTestResult {
  ok: boolean;
  /** 缺少必填配置（key / base url / voices），供前端提示「先填配置」。 */
  needsConfig?: boolean;
  /** 失败原因（服务端错误 / 断供引导等），前端直接展示。 */
  detail?: string;
}

const TEST_TIMEOUT_MS = 20_000;

/**
 * 云 TTS 实例连通性自测：真实合成一句短文本（TTS 无零成本探针，对齐 design 决策 2）。
 * 计费影响可忽略（"Hello" 5 字符）；成功即证明凭据、模型与 voice 全链路可用。
 * 返回结构对齐 ASR testConnection（ok / needsConfig / detail）。
 */
export async function testTtsConnection(
  provider: TtsProvider,
): Promise<TtsTestResult> {
  if (!isTtsProviderConfigured(provider)) {
    return { ok: false, needsConfig: true };
  }
  const voice = defaultVoiceOf(provider);
  if (!voice) return { ok: false, needsConfig: true };
  // MiMo's official preset voices are documented for Chinese/English only.
  // Use its English female preset when available to experimentally probe Burmese output.
  const testVoice =
    provider.type === TTS_XIAOMI_MIMO && parseTtsVoices(provider).includes('Mia')
      ? 'Mia'
      : voice;

  const outWavPath = path.join(
    os.tmpdir(),
    `smartsub-tts-test-${Date.now()}.wav`,
  );
  try {
    const result = await synthesizeSegment(provider, {
      text:
        provider.type === TTS_XIAOMI_MIMO
          ? 'မင်္ဂလာပါ။ ဒီနေ့ ကျွန်တော်တို့ရဲ့ ဇာတ်လမ်းကို စတင်ကြရအောင်။'
          : voice.startsWith('my-MM-')
            ? 'မင်္ဂလာပါ'
            : 'Hello',
      voice: testVoice,
      outWavPath,
      signal: AbortSignal.timeout(TEST_TIMEOUT_MS),
    });
    return result.durationMs > 0
      ? { ok: true }
      : { ok: false, detail: 'empty audio' };
  } catch (error) {
    return {
      ok: false,
      detail: error instanceof Error ? error.message : String(error),
    };
  } finally {
    try {
      if (fs.existsSync(outWavPath)) fs.unlinkSync(outWavPath);
    } catch {
      /* ignore */
    }
  }
}
