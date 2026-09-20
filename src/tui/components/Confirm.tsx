import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface ConfirmProps {
  message: string;
  defaultYes?: boolean;
  onConfirm: (confirmed: boolean) => void;
  onBack?: () => void;
}

export const Confirm: React.FC<ConfirmProps> = ({
  message,
  defaultYes = true,
  onConfirm,
  onBack,
}) => {
  const [isYes, setIsYes] = useState(defaultYes);

  useInput((input, key) => {
    if (key.escape && onBack) {
      onBack();
      return;
    }

    if (key.leftArrow || key.rightArrow || key.upArrow || key.downArrow) {
      setIsYes((prev) => !prev);
      return;
    }

    if (input.toLowerCase() === 'y') {
      setIsYes(true);
      return;
    }

    if (input.toLowerCase() === 'n') {
      setIsYes(false);
      return;
    }

    if (key.return) {
      onConfirm(isYes);
    }
  });

  return (
    <Box flexDirection="column" gap={1}>
      <Text bold color="white">
        {message}
      </Text>

      <Box gap={2}>
        <Box
          borderStyle="round"
          borderColor={isYes ? 'green' : 'gray'}
          paddingX={2}
        >
          <Text bold={isYes} color={isYes ? 'green' : 'gray'}>
            Yes
          </Text>
        </Box>

        <Box
          borderStyle="round"
          borderColor={!isYes ? 'red' : 'gray'}
          paddingX={2}
        >
          <Text bold={!isYes} color={!isYes ? 'red' : 'gray'}>
            No
          </Text>
        </Box>
      </Box>

      <Box marginTop={1}>
        <Text color="gray" dimColor>
          [←/→] Toggle • [Enter] Confirm • [Esc] Back
        </Text>
      </Box>
    </Box>
  );
};
