import fs from "fs";
import path from "path";

export interface CliOptions {
    projectName: string;
    templateName: string;
    templatePath: string;
    targetPath: string;
    isFullstack: boolean;
    language: string;
}

export const isJavaScript = (options: CliOptions) => {
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

export const isPython = (options: CliOptions) => {
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

export const isCSharp = (options: CliOptions) => {
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


export const findJsDir = (options: CliOptions) => {
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

export const findCsProj = (options: CliOptions) => {
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

export interface MVPythonDir {
    path: string;
    depFile: string;
    command: string;
}

export const findPyDir = (options: CliOptions): (MVPythonDir | null) => {
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
