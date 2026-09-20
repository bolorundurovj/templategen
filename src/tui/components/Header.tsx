import React from 'react';
import { Box, Text } from 'ink';
import { WizardStep } from '../types.js';

interface HeaderProps {
  currentStep: WizardStep;
}

const STEP_LABELS: { step: WizardStep; label: string }[] = [
  { step: 'PROJECT_NAME', label: '1. Name' },
  { step: 'PROJECT_TYPE', label: '2. Type' },
  { step: 'LANGUAGE', label: '3. Language' },
  { step: 'FRAMEWORK', label: '4. Framework' },
  { step: 'ARCHITECTURE', label: '5. Architecture' },
  { step: 'DATABASE', label: '6. Database' },
  { step: 'SHADCN', label: '7. UI Config' },
  { step: 'REVIEW', label: '8. Review' },
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
          🚀 TemplateGen TUI
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
