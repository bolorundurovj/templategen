import { describe, it, expect } from '@jest/globals';
import { getInitialStep, getStepAfterProjectType } from '../../src/tui/steps';

describe('TUI wizard steps', () => {
  it('starts at the project name when nothing is provided', () => {
    expect(getInitialStep({})).toBe('PROJECT_NAME');
  });

  it('asks for project type when only the name is provided', () => {
    expect(getInitialStep({ projectName: 'app' })).toBe('PROJECT_TYPE');
  });

  it.each(['frontend', 'fullstack'])(
    'asks for layout for %s projects without a layout',
    (projectType) => {
      expect(getInitialStep({ projectName: 'app', projectType })).toBe(
        'LAYOUT',
      );
    },
  );

  it('skips layout when it is already provided', () => {
    expect(
      getInitialStep({
        projectName: 'app',
        projectType: 'frontend',
        layout: 'sidenav',
      }),
    ).toBe('LANGUAGE');
  });

  it('skips layout for backend projects', () => {
    expect(getInitialStep({ projectName: 'app', projectType: 'backend' })).toBe(
      'LANGUAGE',
    );
  });

  it('routes project type selection to layout only for projects with a frontend', () => {
    expect(getStepAfterProjectType('frontend')).toBe('LAYOUT');
    expect(getStepAfterProjectType('fullstack')).toBe('LAYOUT');
    expect(getStepAfterProjectType('backend')).toBe('LANGUAGE');
  });
});
