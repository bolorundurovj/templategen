import {ProjectTypes} from "../variables/projectTypes";
import {Languages} from "../variables/languages";
import {Frameworks} from "../variables/frameworks";
import {Patterns} from "../variables/patterns";

interface ITemplateChoices {
    architecturePattern: Patterns;
    projectType: ProjectTypes;
    frontendLanguage: Array<Languages>;
    backendLanguage: Array<Languages>;
    frontendFramework: Array<Frameworks>;
    backendFramework: Array<Frameworks>;
}

const TEMPLATES: any = {
    [ProjectTypes.FRONTEND]: {
        [Languages.JAVASCRIPT]: {
            [Frameworks.React]: [],
            [Frameworks.Vue]: [],
            [Frameworks.Svelte]: []
        },
        [Languages.TYPESCRIPT]: {
            [Frameworks.Angular]: [],
            [Frameworks.React]: [],
            [Frameworks.Vue]: [],
            [Frameworks.Svelte]: []
        }
    },
    [ProjectTypes.BACKEND]: {
        [Languages.JAVASCRIPT]: {
            [Frameworks.Express]: {
                [Patterns.Monolithic]: [],
                [Patterns.Microservices]: [],
                [Patterns.CQRS]: [],
                [Patterns.MVC]: [],
                [Patterns.EventDriven]: []
            },
            [Frameworks.NestJS]: {
                [Patterns.Monolithic]: [],
                [Patterns.Microservices]: [],
                [Patterns.CQRS]: [],
                [Patterns.MVC]: [],
                [Patterns.EventDriven]: []
            }
        },
    },
    [ProjectTypes.FULLSTACK]: {
        [Languages.JAVASCRIPT]: {
            [Frameworks.Express]: {
                [Patterns.Monolithic]: {
                    [Frameworks.React]: [],
                    [Frameworks.Vue]: [],
                },
                [Patterns.Microservices]: {
                    [Frameworks.React]: [],
                    [Frameworks.Vue]: [],
                },
            },
            [Frameworks.NestJS]: {
                [Patterns.Monolithic]: {
                    [Frameworks.React]: [],
                    [Frameworks.Vue]: [],
                },
                [Patterns.Microservices]: {
                    [Frameworks.React]: [],
                    [Frameworks.Vue]: [],
                },
            }
        }
    }
}


function filterTemplateChoices(selections: ITemplateChoices): Array<string> {
    const {
        projectType,
        frontendLanguage,
        backendLanguage,
        frontendFramework,
        backendFramework,
        architecturePattern
    } = selections;
    console.log('Selections:', selections);
    let choices: Array<string> = [];
    if (projectType === ProjectTypes.FRONTEND) {
        choices = TEMPLATES[projectType][frontendLanguage[0]][frontendFramework[0]];
    } else if (projectType === ProjectTypes.BACKEND) {
        choices = TEMPLATES[projectType][backendLanguage[0]][backendFramework[0]][architecturePattern];
    } else if (projectType === ProjectTypes.FULLSTACK) {
        choices = TEMPLATES[projectType][backendLanguage[0]][backendFramework[0]][architecturePattern][frontendFramework[0]];
    }
    return choices;
}

module.exports = {
    filterTemplateChoices
};
