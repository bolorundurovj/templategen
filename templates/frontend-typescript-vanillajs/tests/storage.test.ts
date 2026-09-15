import { describe, it, expect, beforeEach } from 'vitest';
import { storage } from '../src/storage';

describe('Storage Utility', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('gets default value when key does not exist', () => {
    expect(storage.get('missing-key', 'default')).toBe('default');
  });

  it('sets and gets values correctly', () => {
    storage.set('test-key', { foo: 'bar', count: 42 });
    expect(storage.get('test-key', null)).toEqual({ foo: 'bar', count: 42 });
  });

  it('removes stored item', () => {
    storage.set('test-key', 'val');
    expect(storage.get('test-key', null)).toBe('val');
    storage.remove('test-key');
    expect(storage.get('test-key', 'fallback')).toBe('fallback');
  });

  it('returns default value when JSON.parse fails', () => {
    localStorage.setItem('corrupt', '{invalid-json');
    expect(storage.get('corrupt', 'safe')).toBe('safe');
  });
});
