export type WizardStep =
  | 'PROJECT_NAME'
  | 'PROJECT_TYPE'
  | 'LANGUAGE'
  | 'FRAMEWORK'
  | 'FRONTEND_FRAMEWORK'
  | 'BACKEND_FRAMEWORK'
  | 'ARCHITECTURE'
  | 'DATABASE'
  | 'SHADCN'
  | 'REVIEW';

export interface WizardConfig {
  projectName: string;
  projectType: string;
  language: string;
  framework: string;
  feFramework?: string;
  beFramework?: string;
  architecturePattern?: string;
  database?: string;
  shadcn?: boolean;
}

export interface ChoiceItem {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
}
