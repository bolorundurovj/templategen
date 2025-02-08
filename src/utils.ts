import fs from "fs";
import path from "path";

/**
 * Interface representing the options for the CLI.
 */
export interface CliOptions {
    projectName: string;
    templateName: string;
    templatePath: string;
    targetPath: string;
    isFullstack: boolean;
    language: string;
}

/**
 * Checks if the project uses JavaScript or TypeScript.
 *
 * @param {CliOptions} options - The CLI options.
 * @returns {boolean} - Returns true if the project uses JavaScript or TypeScript, otherwise false.
 */
export const isJavaScript = (options: CliOptions): boolean => {
    if (!options.isFullstack && ['javascript', 'typescript'].includes(options.language)) {
        return true;
    }

    if (options.isFullstack) {
        const languages = options.language.split(',');
        if (languages.includes('javascript') || languages.includes('typescript')) {
            return true;
        }
    }

    return false;
};

/**
 * Checks if the project uses Python.
 *
 * @param {CliOptions} options - The CLI options.
 * @returns {boolean} - Returns true if the project uses Python, otherwise false.
 */
export const isPython = (options: CliOptions): boolean => {
    if (!options.isFullstack && options.language === 'python') {
        return true;
    }

    if (options.isFullstack) {
        const languages = options.language.split(',');
        if (languages.includes('python')) {
            return true;
        }
    }

    return false;
}

/**
 * Checks if the project uses C#.
 *
 * @param {CliOptions} options - The CLI options.
 * @returns {boolean} - Returns true if the project uses C#, otherwise false.
 */
export const isCSharp = (options: CliOptions): boolean => {
    if (!options.isFullstack && options.language === 'csharp') {
        return true;
    }

    if (options.isFullstack) {
        const languages = options.language.split(',');
        if (languages.includes('csharp')) {
            return true;
        }
    }

    return false;
}

/**
 * Finds the directory containing the `package.json` file.
 *
 * @param {CliOptions} options - The CLI options.
 * @returns {string | null} - Returns the directory path if found, otherwise null.
 */
export const findJsDir = (options: CliOptions): string | null => {
    const searchDir = (dir: string): string | null => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                const result = searchDir(fullPath);
                if (result) {
                    return result;
                }
            } else if (file === 'package.json') {
                return dir;
            }
        }
        return null;
    };

    return searchDir(options.targetPath);
}

/**
 * Finds the path to the `.csproj` file.
 *
 * @param {CliOptions} options - The CLI options.
 * @returns {string | null} - Returns the file path if found, otherwise null.
 */
export const findCsProj = (options: CliOptions): string | null => {
    const searchDir = (dir: string): string | null => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                const result = searchDir(fullPath);
                if (result) {
                    return result;
                }
            } else if (file.endsWith('.csproj')) {
                return fullPath;
            }
        }
        return null;
    };

    return searchDir(options.targetPath);
}

/**
 * Interface representing the details of a Python project directory.
 */
export interface MVPythonDir {
    path: string;
    depFile: string;
    command: string;
}

/**
 * Finds the directory containing the Python dependency file.
 *
 * @param {CliOptions} options - The CLI options.
 * @returns {MVPythonDir | null} - Returns the directory details if found, otherwise null.
 */
export const findPyDir = (options: CliOptions): MVPythonDir | null => {
    const pythonFiles = ['requirements.txt', 'Pipfile', 'Pipfile.lock', 'pyproject.toml'];
    const commands: any = {
        'requirements.txt': 'pip install -r requirements.txt',
        'Pipfile': 'pipenv install',
        'Pipfile.lock': 'pipenv install',
        'pyproject.toml': 'poetry install'
    };

    const searchDir = (dir: string): { path: string, depFile: string, command: string } | null => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                const result = searchDir(fullPath);
                if (result) {
                    return result;
                }
            } else if (pythonFiles.includes(file)) {
                return {path: dir, depFile: file, command: commands[file]} as MVPythonDir;
            }
        }
        return null;
    };

    return searchDir(options.targetPath);
};
