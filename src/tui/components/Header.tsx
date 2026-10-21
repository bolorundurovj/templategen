import React from 'react';
import { Box, Text } from 'ink';
import { WizardStep } from '../types.js';

interface HeaderProps {
  currentStep: WizardStep;
}

const STEP_LABELS: { step: WizardStep; label: string }[] = [
  { step: 'PROJECT_NAME', label: '1. Name' },
  { step: 'PROJECT_TYPE', label: '2. Type' },
  { step: 'LAYOUT', label: '3. Layout' },
  { step: 'LANGUAGE', label: '4. Language' },
  { step: 'FRAMEWORK', label: '5. Framework' },
  { step: 'ARCHITECTURE', label: '6. Arch' },
  { step: 'DATABASE', label: '7. DB' },
  { step: 'SHADCN', label: '8. UI' },
  { step: 'REVIEW', label: '9. Review' },
];

export const Header: React.FC<HeaderProps> = ({ currentStep }) => {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box
        borderStyle="round"
        borderColor="cyan"
        paddingX={2}
        justifyContent="space-between"
      >
        <Text bold color="cyan">
          TemplateGen TUI
        </Text>
        <Text color="gray">
          v2.0 • Press [Esc] to go back, [Ctrl+C] to exit
        </Text>
      </Box>

      <Box marginTop={1} paddingX={1} gap={1}>
        {STEP_LABELS.map(({ step, label }) => {
          const isCurrent =
            step === currentStep ||
            (step === 'FRAMEWORK' &&
              (currentStep === 'FRONTEND_FRAMEWORK' ||
                currentStep === 'BACKEND_FRAMEWORK'));
          return (
            <Text
              key={step}
              bold={isCurrent}
              color={isCurrent ? 'green' : 'gray'}
              underline={isCurrent}
            >
              {label}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};
