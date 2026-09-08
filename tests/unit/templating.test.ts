import { describe, it, expect, beforeAll, afterAll, jest } from '@jest/globals';
import fs from 'fs';
import path from 'path';

// Mock chalk and logger
jest.mock('chalk', () => ({
  green: jest.fn((text) => text),
  red: jest.fn((text) => text),
  yellow: jest.fn((text) => text),
  blue: jest.fn((text) => text),
}));

jest.mock('../../src/logger', () => ({
  logger: {
    info: jest.fn(),
    error: jest.fn(),
    success: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

import { renderTemplate } from '../../src/templating';
import { logger } from '../../src/logger';
import { CliOptions } from '../../src/utils';

const TEMP_BASE = path.resolve(__dirname, '../../scratch/test-unit-templating');

const safeRmSync = (dir: string) => {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, {
        recursive: true,
        force: true,
        maxRetries: 10,
        retryDelay: 100,
      });
    }
  } catch {}
};

describe('Templating Unit Tests', () => {
  beforeAll(() => {
    safeRmSync(TEMP_BASE);
    fs.mkdirSync(TEMP_BASE, { recursive: true });
  });

  afterAll(() => {
    safeRmSync(TEMP_BASE);
  });

  it('creates target directory if it does not exist and renders files recursively', async () => {
    const sourceDir = path.join(TEMP_BASE, 'source-1');
    const targetDir = path.join(TEMP_BASE, 'target-1');

    fs.mkdirSync(path.join(sourceDir, 'sub'), { recursive: true });
    fs.writeFileSync(
      path.join(sourceDir, 'index.js'),
      'const name = "<%= projectName %>";',
    );
    fs.writeFileSync(
      path.join(sourceDir, 'sub', 'utils.js'),
      'export const project = "<%= projectName %>";',
    );

    const options = {
      projectName: 'SuperProject',
      templateName: 'template',
      templatePath: sourceDir,
      targetPath: targetDir,
      isFullstack: false,
      language: 'javascript',
    } as CliOptions;

    await renderTemplate(sourceDir, targetDir, options);

    expect(fs.existsSync(targetDir)).toBe(true);
    expect(fs.existsSync(path.join(targetDir, 'index.js'))).toBe(true);
    expect(fs.readFileSync(path.join(targetDir, 'index.js'), 'utf8')).toBe(
      'const name = "SuperProject";',
    );
    expect(fs.existsSync(path.join(targetDir, 'sub', 'utils.js'))).toBe(true);
    expect(
      fs.readFileSync(path.join(targetDir, 'sub', 'utils.js'), 'utf8'),
    ).toBe('export const project = "SuperProject";');
  });

  it('copies binary files directly without running EJS', async () => {
    const sourceDir = path.join(TEMP_BASE, 'source-bin');
    const targetDir = path.join(TEMP_BASE, 'target-bin');

    fs.mkdirSync(sourceDir, { recursive: true });
    const binaryData = Buffer.from([0x89, 0x50, 0x4e, 0x47]); // PNG header
    fs.writeFileSync(path.join(sourceDir, 'logo.png'), binaryData);
    fs.writeFileSync(
      path.join(sourceDir, 'icon.svg'),
      '<svg><%= broken ejs <%%></svg>',
    );

    const options = {
      projectName: 'BinTest',
    } as any;

    await renderTemplate(sourceDir, targetDir, options);

    expect(fs.existsSync(path.join(targetDir, 'logo.png'))).toBe(true);
    expect(fs.readFileSync(path.join(targetDir, 'logo.png'))).toEqual(
      binaryData,
    );
    expect(fs.existsSync(path.join(targetDir, 'icon.svg'))).toBe(true);
  });

  it('skips creating files when rendered output is _SKIP_FILE_', async () => {
    const sourceDir = path.join(TEMP_BASE, 'source-skip');
    const targetDir = path.join(TEMP_BASE, 'target-skip');

    fs.mkdirSync(sourceDir, { recursive: true });
    fs.writeFileSync(
      path.join(sourceDir, 'conditional.ts'),
      '<% if (!shadcn) { %>_SKIP_FILE_<% } else { %>console.log("shadcn active");<% } %>',
    );
    fs.writeFileSync(path.join(sourceDir, 'keep.ts'), 'console.log("keep");');

    const options = {
      projectName: 'SkipTest',
      shadcn: false,
    } as any;

    await renderTemplate(sourceDir, targetDir, options);

    expect(fs.existsSync(path.join(targetDir, 'conditional.ts'))).toBe(false);
    expect(fs.existsSync(path.join(targetDir, 'keep.ts'))).toBe(true);
  });

  it('falls back to raw copy and logs error when EJS syntax is invalid', async () => {
    const sourceDir = path.join(TEMP_BASE, 'source-error');
    const targetDir = path.join(TEMP_BASE, 'target-error');

    fs.mkdirSync(sourceDir, { recursive: true });
    const invalidEjsContent = 'Hello <%= syntax error here (((( %>';
    fs.writeFileSync(path.join(sourceDir, 'invalid.txt'), invalidEjsContent);

    const options = {
      projectName: 'ErrTest',
    } as any;

    await renderTemplate(sourceDir, targetDir, options);

    expect(logger.error).toHaveBeenCalledWith(
      expect.stringContaining(
        'Failed to render template file: invalid.txt. Copying raw file.',
      ),
    );
    expect(fs.existsSync(path.join(targetDir, 'invalid.txt'))).toBe(true);
    expect(fs.readFileSync(path.join(targetDir, 'invalid.txt'), 'utf8')).toBe(
      invalidEjsContent,
    );
  });
});
