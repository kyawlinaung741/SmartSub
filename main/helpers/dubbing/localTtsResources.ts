import os from 'os';

const GB = 1024 * 1024 * 1024;
const MAX_WORKERS = 3;

export interface LocalTtsResourceSnapshot {
  cpuCount: number;
  freeMemoryBytes: number;
}

export interface LocalTtsResourcePlan {
  workerCount: number;
  numThreads: number;
  mode: 'auto' | 'manual';
  usableCores: number;
}

/**
 * Bound local TTS parallelism by CPU and currently available RAM.
 * Sherpa's packaged TTS runtime is CPU-backed; this avoids oversubscribing
 * the machine while keeping the existing per-process model isolation.
 */
export function resolveLocalTtsResourcePlan(
  modelId: string,
  requestedConcurrency = 0,
  snapshot: LocalTtsResourceSnapshot = {
    cpuCount: os.cpus().length,
    freeMemoryBytes: os.freemem(),
  },
): LocalTtsResourcePlan {
  const cpuCount = Math.max(1, Math.floor(snapshot.cpuCount) || 1);
  const freeMemoryBytes = Math.max(0, snapshot.freeMemoryBytes || 0);
  // Leave two logical cores for the OS, UI, FFmpeg and other active tasks.
  const usableCores = Math.max(1, cpuCount - 2);
  const cpuWorkerLimit = Math.max(
    1,
    Math.min(MAX_WORKERS, Math.floor(usableCores / 2)),
  );
  const isClone = modelId.startsWith('zipvoice');
  const memoryPerWorker = isClone ? 1.5 * GB : 0.5 * GB;
  // Keep a 2GB working reserve for the OS, source media and Electron.
  const memoryBudget = Math.max(
    memoryPerWorker,
    freeMemoryBytes - 2 * GB,
  );
  const memoryWorkerLimit = Math.max(
    1,
    Math.min(MAX_WORKERS, Math.floor(memoryBudget / memoryPerWorker)),
  );
  const autoWorkers = Math.max(
    1,
    Math.min(MAX_WORKERS, Math.ceil(usableCores / 4)),
  );
  const requested = Number.isFinite(requestedConcurrency)
    ? Math.floor(requestedConcurrency)
    : 0;
  const mode = requested >= 1 ? 'manual' : 'auto';
  const desiredWorkers =
    mode === 'manual'
      ? Math.max(1, Math.min(MAX_WORKERS, requested))
      : autoWorkers;
  const workerCount = Math.max(
    1,
    Math.min(desiredWorkers, cpuWorkerLimit, memoryWorkerLimit),
  );
  // Split the usable CPU budget across workers; cap each ONNX session at 4 threads.
  const numThreads = Math.max(
    1,
    Math.min(4, Math.floor(usableCores / workerCount)),
  );

  return { workerCount, numThreads, mode, usableCores };
}
