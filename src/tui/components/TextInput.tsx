import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

interface TextInputProps {
  placeholder?: string;
  defaultValue?: string;
  onSubmit: (value: string) => void;
  validate?: (value: string) => string | null;
  onBack?: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder = 'Type here...',
  defaultValue = '',
  onSubmit,
  validate,
  onBack,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);

  useInput((input, key) => {
    if (key.escape && onBack) {
      onBack();
      return;
    }

    if (key.return) {
      const trimmed = value.trim();
      if (validate) {
        const validationError = validate(trimmed);
        if (validationError) {
          setError(validationError);
          return;
        }
      }
      setError(null);
      onSubmit(trimmed);
      return;
    }

    if (key.backspace || key.delete) {
      setValue((prev) => prev.slice(0, -1));
      setError(null);
      return;
    }

    if (input && !key.ctrl && !key.meta) {
      setValue((prev) => prev + input);
      setError(null);
    }
  });

  return (
    <Box flexDirection="column" gap={0}>
      <Box
        borderStyle="round"
        borderColor={error ? 'red' : 'green'}
        paddingX={1}
        width={40}
      >
        <Text color="green">❯ </Text>
        {value.length > 0 ? (
          <Text color="white">{value}</Text>
        ) : (
          <Text color="gray">{placeholder}</Text>
        )}
        <Text color="green">_</Text>
      </Box>

      {error && (
        <Box marginTop={1}>
          <Text color="red">✖ {error}</Text>
        </Box>
      )}

      <Box marginTop={1}>
        <Text color="gray" dimColor>
          [Enter] Submit • {onBack ? '[Esc] Back' : '[Ctrl+C] Exit'}
        </Text>
      </Box>
    </Box>
  );
};
