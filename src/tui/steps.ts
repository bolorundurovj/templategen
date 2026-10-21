import { WizardConfig, WizardStep } from './types.js';

export const hasFrontend = (projectType?: string): boolean =>
  projectType === 'frontend' || projectType === 'fullstack';

/**
 * Resolves the first wizard step that still needs input from the user.
 */
export const getInitialStep = (
  initialConfig: Partial<WizardConfig>,
): WizardStep => {
  if (!initialConfig.projectName) return 'PROJECT_NAME';
  if (!initialConfig.projectType) return 'PROJECT_TYPE';
  if (hasFrontend(initialConfig.projectType) && !initialConfig.layout) {
    return 'LAYOUT';
  }
  return 'LANGUAGE';
};

/**
 * Resolves the step that follows the project type selection.
 */
export const getStepAfterProjectType = (projectType: string): WizardStep =>
  hasFrontend(projectType) ? 'LAYOUT' : 'LANGUAGE';
