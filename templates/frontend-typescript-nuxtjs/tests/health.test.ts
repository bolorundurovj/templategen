import { describe, it, expect } from 'vitest';
import healthHandler from '../server/api/health.get';

describe('Nuxt Health API', () => {
  it('returns ok status and timestamp', async () => {
    const result = await healthHandler({} as any);
    expect(result.status).toBe('ok');
    expect(result.timestamp).toBeDefined();
  });
});
