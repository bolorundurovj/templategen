import { describe, it, expect } from 'vitest';
import { GET } from '../app/api/health/route';

describe('Health API Route', () => {
  it('returns ok status and timestamp', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe('ok');
    expect(data.timestamp).toBeDefined();
  });
});
