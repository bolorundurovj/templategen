import {ProjectTypes} from "./projectTypes";
import {Languages} from "./languages";

enum Frameworks {
    Angular = 'Angular',
    React = 'React',
    Vue = 'Vue',
    Svelte = 'Svelte',
    NextJS = 'NextJS',
    NuxtJS = 'NuxtJS',
    Express = 'Express',
    NestJS = 'NestJS',
    Django = 'Django',
    Flask = 'Flask',
    FastAPI = 'FastAPI',
    DotNet = 'DotNet',
}

const getFrameworkChoices = (projectType: ProjectTypes, language: Languages, altProjectType?: string): Array<Frameworks> => {
    if (projectType === ProjectTypes.FULLSTACK) {
        if (altProjectType === 'frontend') {
            switch (language) {
                case Languages.JAVASCRIPT:
                    return [Frameworks.React, Frameworks.Vue];
                case Languages.TYPESCRIPT:
                    return [Frameworks.Angular, Frameworks.React, Frameworks.Vue];
                default:
                    return [];
            }
        } else {
            switch (language) {
                case Languages.JAVASCRIPT:
                    return [Frameworks.Express, Frameworks.NestJS];
                case Languages.TYPESCRIPT:
                    return [Frameworks.NestJS, Frameworks.Express];
                case Languages.PYTHON:
                    return [Frameworks.Django, Frameworks.Flask, Frameworks.FastAPI];
                case Languages.CSHARP:
                    return [Frameworks.DotNet];
                default:
                    return [];
            }
        }

    } else if (projectType === ProjectTypes.FRONTEND && language === Languages.JAVASCRIPT) {
        return [Frameworks.React, Frameworks.Vue, Frameworks.Svelte];
    } else if (projectType === ProjectTypes.FRONTEND && language === Languages.TYPESCRIPT) {
        return [Frameworks.Angular, Frameworks.React, Frameworks.Vue, Frameworks.Svelte];
    } else if (projectType === ProjectTypes.BACKEND && language === Languages.JAVASCRIPT) {
        return [Frameworks.Express, Frameworks.NestJS];
    } else if (projectType === ProjectTypes.BACKEND && language === Languages.TYPESCRIPT) {
        return [Frameworks.NestJS, Frameworks.Express];
    } else if (projectType === ProjectTypes.BACKEND && language === Languages.PYTHON) {
        return [Frameworks.Django, Frameworks.Flask, Frameworks.FastAPI];
    } else if (projectType === ProjectTypes.BACKEND && language === Languages.CSHARP) {
        return [Frameworks.DotNet];
    } else {
        return [];
    }
}

export {Frameworks, getFrameworkChoices};
