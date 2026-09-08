import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { CliOptions } from './utils.js';
import { logger } from './logger.js';

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
      if (
        ['.png', '.jpg', '.jpeg', '.ico', '.gif', '.svg'].includes(
          path.extname(file),
        )
      ) {
        fs.copyFileSync(templatePath, targetPath);
      } else {
        const content = fs.readFileSync(templatePath, 'utf8');
        try {
          const rendered = ejs.render(content, options);
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
}
