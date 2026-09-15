import { describe, it, expect, vi } from 'vitest';
import { debounce, formatDate, cn } from '../src/utils.js';

describe('Vanilla JS Utils', () => {
  describe('debounce', () => {
    it('debounces multiple calls', () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const debounced = debounce(fn, 100);

      debounced('a');
      debounced('b');
      debounced('c');

      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith('c');
      vi.useRealTimers();
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date(2025, 0, 15);
      const formatted = formatDate(date);
      expect(formatted).toContain('2025');
      expect(formatted).toContain('Jan');
    });

    it('formats date string correctly', () => {
      const formatted = formatDate('2025-01-15T00:00:00Z');
      expect(formatted).toContain('2025');
    });
  });

  describe('cn', () => {
    it('combines class names and filters falsy values', () => {
      expect(cn('btn', false, 'btn-primary', null, undefined, 'active')).toBe('btn btn-primary active');
    });

    it('returns empty string if no classes', () => {
      expect(cn()).toBe('');
    });
  });
});
