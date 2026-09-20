import React from 'react';
import { render } from 'ink';
import { App } from './App.js';
import { WizardConfig } from './types.js';

/**
 * Runs the interactive full-screen Terminal User Interface (TUI).
 *
 * @param initialConfig Partial configurations already provided via CLI flags.
 * @returns The completed configuration object, or null if the user cancelled.
 */
export function runTui(
  initialConfig: Partial<WizardConfig> = {},
): Promise<WizardConfig | null> {
  return new Promise((resolve) => {
    let completedConfig: WizardConfig | null = null;

    const instance = render(
      <App
        initialConfig={initialConfig}
        onSubmit={(config) => {
          completedConfig = config;
        }}
        onCancel={() => {
          completedConfig = null;
        }}
      />,
    );

    instance.waitUntilExit().then(() => {
      resolve(completedConfig);
    });
  });
}
