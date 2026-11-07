import assert from 'node:assert/strict';
import {
  parseTtsVoices,
  resolveTtsVoiceLabel,
  TTS_EDGE,
} from '../../types/ttsProvider';
import { resolveLocalTtsResourcePlan } from '../../main/helpers/dubbing/localTtsResources';

const GB = 1024 * 1024 * 1024;

const edgeVoices = parseTtsVoices({
  id: 'edge-1',
  name: 'Edge TTS',
  type: TTS_EDGE,
  voices: 'en-US-AriaNeural',
});
assert.deepEqual(edgeVoices, ['my-MM-ThihaNeural', 'en-US-AriaNeural']);
assert.equal(
  resolveTtsVoiceLabel({ type: TTS_EDGE }, 'my-MM-ThihaNeural'),
  'Thiha (Myanmar)',
);

const regular = resolveLocalTtsResourcePlan(
  'kokoro-multi-lang-v1_1',
  0,
  { cpuCount: 8, freeMemoryBytes: 16 * GB },
);
assert.deepEqual(
  { workerCount: regular.workerCount, numThreads: regular.numThreads, mode: regular.mode },
  { workerCount: 2, numThreads: 3, mode: 'auto' },
);

const cloneConstrained = resolveLocalTtsResourcePlan(
  'zipvoice-distill-zh-en',
  0,
  { cpuCount: 8, freeMemoryBytes: 4 * GB },
);
assert.equal(cloneConstrained.workerCount, 1);

const manualStillRespectsCpu = resolveLocalTtsResourcePlan(
  'kokoro-multi-lang-v1_1',
  3,
  { cpuCount: 4, freeMemoryBytes: 16 * GB },
);
assert.equal(manualStillRespectsCpu.workerCount, 1);
assert.equal(manualStillRespectsCpu.mode, 'manual');

console.log('Local TTS resource planning and Edge Myanmar voice tests passed.');
