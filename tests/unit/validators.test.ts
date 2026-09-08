import { describe, it, expect } from '@jest/globals';
import {
  requiresArchitecturePattern,
  requiresDatabase,
} from '../../src/validators';

describe('Validators Unit Tests', () => {
  describe('requiresArchitecturePattern', () => {
    it('returns true for backend project type', () => {
      expect(requiresArchitecturePattern('backend')).toBe(true);
    });

    it('returns true for fullstack project type', () => {
      expect(requiresArchitecturePattern('fullstack')).toBe(true);
    });

    it('returns true for desktop project type', () => {
      expect(requiresArchitecturePattern('desktop')).toBe(true);
    });

    it('returns true for mobile project type', () => {
      expect(requiresArchitecturePattern('mobile')).toBe(true);
    });

    it('returns false for frontend project type', () => {
      expect(requiresArchitecturePattern('frontend')).toBe(false);
    });

    it('returns false for empty or unknown project type', () => {
      expect(requiresArchitecturePattern('')).toBe(false);
      expect(requiresArchitecturePattern('unknown-type')).toBe(false);
    });
  });

  describe('requiresDatabase', () => {
    it('returns true for backend project type', () => {
      expect(requiresDatabase('backend')).toBe(true);
    });

    it('returns true for fullstack project type', () => {
      expect(requiresDatabase('fullstack')).toBe(true);
    });

    it('returns false for frontend project type', () => {
      expect(requiresDatabase('frontend')).toBe(false);
    });

    it('returns false for desktop and mobile project types', () => {
      expect(requiresDatabase('desktop')).toBe(false);
      expect(requiresDatabase('mobile')).toBe(false);
    });

    it('returns false for empty or unknown project type', () => {
      expect(requiresDatabase('')).toBe(false);
      expect(requiresDatabase('unknown-type')).toBe(false);
    });
  });
});
