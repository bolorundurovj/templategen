import { describe, it, expect } from 'vitest';
import healthHandler from '../server/api/health.get';

describe('Nuxt Health API', () => {
  it('returns ok status and timestamp', async () => {
    const result = await healthHandler({});
    expect(result.status).toBe('ok');
    expect(result.timestamp).toBeDefined();
  });
});
