import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { CliOptions } from './utils.js';
import { logger } from './logger.js';

function shouldSkipTemplateFile(templateDir: string, file: string): boolean {
  if (file.endsWith('.map')) {
    return true;
  }

  const isTsTemplate = templateDir.includes('typescript');
  const isJsTemplate = templateDir.includes('javascript');

  if (isJsTemplate) {
    if (
      file.endsWith('.ts') ||
      file.endsWith('.tsx') ||
      file.endsWith('.d.ts')
    ) {
      return true;
    }
    if (file.endsWith('.js')) {
      const base = file.slice(0, -3);
      if (fs.existsSync(path.join(templateDir, `${base}.jsx`))) {
        return true;
      }
    }
  }

  if (isTsTemplate) {
    if (file.endsWith('.d.ts')) {
      const base = file.slice(0, -5);
      return (
        fs.existsSync(path.join(templateDir, `${base}.ts`)) ||
        fs.existsSync(path.join(templateDir, `${base}.tsx`))
      );
    }
    if (file.endsWith('.d.mts')) {
      const base = file.slice(0, -6);
      return fs.existsSync(path.join(templateDir, `${base}.mts`));
    }
    if (file.endsWith('.mjs')) {
      const base = file.slice(0, -4);
      return fs.existsSync(path.join(templateDir, `${base}.mts`));
    }
    if (file.endsWith('.js')) {
      const base = file.slice(0, -3);
      return (
        fs.existsSync(path.join(templateDir, `${base}.ts`)) ||
        fs.existsSync(path.join(templateDir, `${base}.tsx`))
      );
    }
  }

  return false;
}

/**
 * Renders a directory of templates into a target directory.
 * @param {string} templateDir - The directory containing the template files.
 * @param {string} targetDir - The directory where the rendered files will be placed.
 * @param {CliOptions} options - The CLI options used as variables for templating.
 */
export async function renderTemplate(
  templateDir: string,
  targetDir: string,
  options: CliOptions,
) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(templateDir);

  for (const file of files) {
    const templatePath = path.join(templateDir, file);
    const targetPath = path.join(targetDir, file);

    if (fs.statSync(templatePath).isDirectory()) {
      await renderTemplate(templatePath, targetPath, options);
    } else {
      if (shouldSkipTemplateFile(templateDir, file)) {
        continue;
      }
      if (
        ['.png', '.jpg', '.jpeg', '.ico', '.gif', '.svg'].includes(
          path.extname(file),
        )
      ) {
        fs.copyFileSync(templatePath, targetPath);
      } else {
        const content = fs.readFileSync(templatePath, 'utf8');
        try {
          const renderData: Record<string, any> = {
            backendPort: 3000,
            isFullstack: false,
            shadcn: false,
            database: '',
            ...(options as Record<string, any>),
          };
          const rendered = ejs.render(content, renderData);
          if (rendered.trim() === '_SKIP_FILE_') {
            continue;
          }
          fs.writeFileSync(targetPath, rendered);
        } catch (e) {
          logger.error(
            `Failed to render template file: ${file}. Copying raw file. Error: ${(e as Error).message}`,
          );
          fs.copyFileSync(templatePath, targetPath);
        }
      }
    }
  }

  // Clean up directory if all child files were skipped
  if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length === 0) {
    fs.rmdirSync(targetDir);
  }
}
