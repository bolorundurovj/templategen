import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import {
  FRONTEND_FRAMEWORKS,
  BACKEND_FRAMEWORKS,
  PROGRAMMING_LANGUAGES,
} from '../../src/choices';

const TEMPLATES_DIR = path.resolve(__dirname, '../../templates');

describe('Templates Contract Tests', () => {
  it('verifies templates root directory exists', () => {
    expect(fs.existsSync(TEMPLATES_DIR)).toBe(true);
  });

  describe('Frontend Framework Contract', () => {
    const frontendLanguages = PROGRAMMING_LANGUAGES.frontend;

    frontendLanguages.forEach((lang) => {
      const frameworks = FRONTEND_FRAMEWORKS[lang.value] || [];

      frameworks.forEach((fw) => {
        const expectedDirName = `frontend-${lang.value}-${fw.value}`;
        const templatePath = path.join(TEMPLATES_DIR, expectedDirName);

        it(`ensures template exists for frontend: ${lang.name} - ${fw.name} (${expectedDirName})`, () => {
          expect(fs.existsSync(templatePath)).toBe(true);
        });

        it(`ensures ${expectedDirName} contains package.json with dynamic projectName`, () => {
          const pkgPath = path.join(templatePath, 'package.json');
          expect(fs.existsSync(pkgPath)).toBe(true);
          const pkgContent = fs.readFileSync(pkgPath, 'utf8');
          expect(pkgContent).toContain('<%= projectName %>');
        });

        it(`ensures ${expectedDirName} has dedicated tests directory with test suites`, () => {
          const testsDir = path.join(templatePath, 'tests');
          expect(fs.existsSync(testsDir)).toBe(true);

          const testFiles = fs.readdirSync(testsDir);
          const hasTestFile = testFiles.some(
            (f) => f.includes('.test.') || f.includes('.spec.'),
          );
          expect(hasTestFile).toBe(true);
        });
      });
    });
  });

  describe('Backend Framework Contract', () => {
    const backendLanguages = PROGRAMMING_LANGUAGES.backend;

    backendLanguages.forEach((lang) => {
      const frameworks = BACKEND_FRAMEWORKS[lang.value] || [];

      frameworks.forEach((fw) => {
        const expectedDirName = `backend-${lang.value}-${fw.value}`;
        const templatePath = path.join(TEMPLATES_DIR, expectedDirName);

        it(`ensures template exists for backend: ${lang.name} - ${fw.name} (${expectedDirName})`, () => {
          expect(fs.existsSync(templatePath)).toBe(true);
        });

        it(`ensures ${expectedDirName} has dedicated tests directory with test suites`, () => {
          const hasTests =
            fs.existsSync(path.join(templatePath, 'tests')) ||
            fs.existsSync(path.join(templatePath, 'Tests'));
          expect(hasTests).toBe(true);

          const testDirName = fs.existsSync(path.join(templatePath, 'tests'))
            ? 'tests'
            : 'Tests';
          const testFiles = fs.readdirSync(
            path.join(templatePath, testDirName),
          );
          const hasTestFile = testFiles.some(
            (f) =>
              f.includes('.test.') ||
              f.includes('.spec.') ||
              f.startsWith('test_') ||
              f.endsWith('Tests.cs'),
          );
          expect(hasTestFile).toBe(true);
        });

        if (lang.value === 'python') {
          it(`ensures ${expectedDirName} contains pyproject.toml with Poetry configuration`, () => {
            const pyprojectPath = path.join(templatePath, 'pyproject.toml');
            expect(fs.existsSync(pyprojectPath)).toBe(true);
            const content = fs.readFileSync(pyprojectPath, 'utf8');
            expect(content).toContain('[tool.poetry]');
            expect(content).toContain('<%= projectName %>');
          });
        }
      });
    });
  });

  describe('Template Isolation & Hygiene Contract', () => {
    const allTemplates = fs.readdirSync(TEMPLATES_DIR);

    allTemplates.forEach((templateName) => {
      const templatePath = path.join(TEMPLATES_DIR, templateName);
      if (!fs.statSync(templatePath).isDirectory()) return;

      it(`verifies ${templateName} has no forbidden build artifacts, caches, or lockfiles`, () => {
        const forbiddenNames = new Set([
          '.next',
          'node_modules',
          'dist',
          'package-lock.json',
          'yarn.lock',
          '__pycache__',
          '.pytest_cache',
          'bin',
          'obj',
        ]);

        const findForbidden = (dir: string): string[] => {
          let found: string[] = [];
          const files = fs.readdirSync(dir);
          for (const file of files) {
            if (forbiddenNames.has(file) || file.endsWith('.pyc')) {
              found.push(path.join(dir, file));
            }
            const fullPath = path.join(dir, file);
            if (
              fs.statSync(fullPath).isDirectory() &&
              !forbiddenNames.has(file)
            ) {
              found = found.concat(findForbidden(fullPath));
            }
          }
          return found;
        };

        const forbiddenFound = findForbidden(templatePath);
        expect(forbiddenFound).toEqual([]);
      });

      it(`verifies ${templateName} does not have standalone test files outside tests/`, () => {
        const findDisplacedTests = (dir: string): string[] => {
          let displaced: string[] = [];
          const files = fs.readdirSync(dir);
          for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
              if (file.toLowerCase() !== 'tests') {
                displaced = displaced.concat(findDisplacedTests(fullPath));
              }
            } else if (
              (file.includes('.test.') || file.includes('.spec.')) &&
              file !== 'tsconfig.spec.json'
            ) {
              displaced.push(fullPath);
            }
          }
          return displaced;
        };

        const displaced = findDisplacedTests(templatePath);
        expect(displaced).toEqual([]);
      });
    });
  });
});
