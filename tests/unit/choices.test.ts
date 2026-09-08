import { describe, it, expect } from '@jest/globals';
import {
  PROGRAMMING_LANGUAGES,
  FRONTEND_FRAMEWORKS,
  BACKEND_FRAMEWORKS,
  ARCHITECTURE_PATTERNS,
  DATABASES,
} from '../../src/choices';

describe('Choices Unit Tests', () => {
  describe('PROGRAMMING_LANGUAGES', () => {
    it('defines choices for frontend, backend, and fullstack', () => {
      expect(PROGRAMMING_LANGUAGES.frontend).toBeDefined();
      expect(PROGRAMMING_LANGUAGES.backend).toBeDefined();
      expect(PROGRAMMING_LANGUAGES.fullstack).toBeDefined();
    });

    it('contains valid frontend languages', () => {
      const values = PROGRAMMING_LANGUAGES.frontend.map((c) => c.value);
      expect(values).toContain('javascript');
      expect(values).toContain('typescript');
    });

    it('contains valid backend languages', () => {
      const values = PROGRAMMING_LANGUAGES.backend.map((c) => c.value);
      expect(values).toContain('javascript');
      expect(values).toContain('typescript');
      expect(values).toContain('python');
      expect(values).toContain('csharp');
    });

    it('contains valid fullstack combinations', () => {
      const values = PROGRAMMING_LANGUAGES.fullstack.map((c) => c.value);
      expect(values).toContain('javascript-javascript');
      expect(values).toContain('typescript-typescript');
      expect(values).toContain('typescript-python');
      expect(values).toContain('typescript-csharp');
    });
  });

  describe('FRONTEND_FRAMEWORKS', () => {
    it('defines frameworks for javascript and typescript', () => {
      expect(FRONTEND_FRAMEWORKS.javascript).toBeDefined();
      expect(FRONTEND_FRAMEWORKS.typescript).toBeDefined();
    });

    it('contains essential JavaScript frontend frameworks', () => {
      const jsFw = FRONTEND_FRAMEWORKS.javascript.map((f) => f.value);
      expect(jsFw).toEqual(
        expect.arrayContaining([
          'react',
          'vue',
          'svelte',
          'nextjs',
          'nuxtjs',
          'vanillajs',
        ]),
      );
    });

    it('contains essential TypeScript frontend frameworks including angular', () => {
      const tsFw = FRONTEND_FRAMEWORKS.typescript.map((f) => f.value);
      expect(tsFw).toEqual(
        expect.arrayContaining([
          'angular',
          'react',
          'vue',
          'svelte',
          'nextjs',
          'nuxtjs',
          'vanillajs',
        ]),
      );
    });
  });

  describe('BACKEND_FRAMEWORKS', () => {
    it('defines backend frameworks for all supported languages', () => {
      expect(BACKEND_FRAMEWORKS.javascript).toBeDefined();
      expect(BACKEND_FRAMEWORKS.typescript).toBeDefined();
      expect(BACKEND_FRAMEWORKS.python).toBeDefined();
      expect(BACKEND_FRAMEWORKS.csharp).toBeDefined();
    });

    it('contains express and nestjs for node runtimes', () => {
      const jsFw = BACKEND_FRAMEWORKS.javascript.map((f) => f.value);
      expect(jsFw).toContain('express');
      expect(jsFw).toContain('nestjs');

      const tsFw = BACKEND_FRAMEWORKS.typescript.map((f) => f.value);
      expect(tsFw).toContain('express');
      expect(tsFw).toContain('nestjs');
    });

    it('contains all Python frameworks', () => {
      const pyFw = BACKEND_FRAMEWORKS.python.map((f) => f.value);
      expect(pyFw).toEqual(
        expect.arrayContaining([
          'django',
          'flask',
          'fastapi',
          'sanic',
          'tornado',
        ]),
      );
    });

    it('contains dotnetcore for C#', () => {
      const csFw = BACKEND_FRAMEWORKS.csharp.map((f) => f.value);
      expect(csFw).toContain('dotnetcore');
    });
  });

  describe('ARCHITECTURE_PATTERNS and DATABASES', () => {
    it('defines architecture patterns list', () => {
      const patternValues = ARCHITECTURE_PATTERNS.map((p) => p.value);
      expect(patternValues).toEqual(
        expect.arrayContaining([
          'monolithic',
          'microservices',
          'cqrs',
          'mvc',
          'event-driven',
        ]),
      );
    });

    it('defines supported databases list', () => {
      const dbValues = DATABASES.map((d) => d.value);
      expect(dbValues).toEqual(
        expect.arrayContaining(['mongodb', 'postgresql', 'mysql', 'sqlite']),
      );
    });
  });
});
