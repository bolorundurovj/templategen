import { describe, it, expect, vi } from 'vitest';
import healthHandler from '../server/api/health.get';

vi.hoisted(() => {
  (globalThis as any).defineEventHandler = (handler: unknown) => handler;
});

describe('Nuxt Health API', () => {
  it('returns ok status and timestamp', async () => {
    const result = await healthHandler({} as any);
    expect(result.status).toBe('ok');
    expect(result.timestamp).toBeDefined();
  });
});
