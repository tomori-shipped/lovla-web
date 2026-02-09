const hits = new Map<string, number[]>();

const CLEANUP_INTERVAL = 60_000;
let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function startCleanup(windowMs: number) {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, timestamps] of hits) {
      const valid = timestamps.filter((t) => now - t < windowMs);
      if (valid.length === 0) hits.delete(key);
      else hits.set(key, valid);
    }
  }, CLEANUP_INTERVAL);
  cleanupTimer.unref?.();
}

export function rateLimit(
  key: string,
  { maxRequests, windowMs }: { maxRequests: number; windowMs: number }
): boolean {
  startCleanup(windowMs);

  const now = Date.now();
  const timestamps = (hits.get(key) || []).filter((t) => now - t < windowMs);

  if (timestamps.length >= maxRequests) return false;

  timestamps.push(now);
  hits.set(key, timestamps);
  return true;
}
