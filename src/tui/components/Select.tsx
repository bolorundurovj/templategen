import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { ChoiceItem } from '../types.js';

interface SelectProps {
  items: ChoiceItem[];
  onSelect: (value: string) => void;
  onBack?: () => void;
  initialIndex?: number;
}

export const Select: React.FC<SelectProps> = ({
  items,
  onSelect,
  onBack,
  initialIndex = 0,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(() => {
    if (
      initialIndex >= 0 &&
      initialIndex < items.length &&
      !items[initialIndex]?.disabled
    ) {
      return initialIndex;
    }
    const firstEnabled = items.findIndex((item) => !item.disabled);
    return firstEnabled >= 0 ? firstEnabled : 0;
  });

  useInput((input, key) => {
    if (key.escape && onBack) {
      onBack();
      return;
    }

    if (key.upArrow) {
      let nextIndex = selectedIndex - 1;
      while (nextIndex >= 0 && items[nextIndex]?.disabled) {
        nextIndex--;
      }
      if (nextIndex >= 0) {
        setSelectedIndex(nextIndex);
      }
      return;
    }

    if (key.downArrow) {
      let nextIndex = selectedIndex + 1;
      while (nextIndex < items.length && items[nextIndex]?.disabled) {
        nextIndex++;
      }
      if (nextIndex < items.length) {
        setSelectedIndex(nextIndex);
      }
      return;
    }

    if (key.return) {
      const selected = items[selectedIndex];
      if (selected && !selected.disabled) {
        onSelect(selected.value);
      }
    }
  });

  const selectedItem = items[selectedIndex];

  return (
    <Box flexDirection="column" gap={0}>
      <Box flexDirection="column" marginBottom={1}>
        {items.map((item, index) => {
          const isSelected = index === selectedIndex;
          const isDisabled = Boolean(item.disabled);

          return (
            <Box key={item.value + index} gap={1}>
              <Text bold color={isSelected ? 'cyan' : 'gray'}>
                {isSelected ? '❯' : ' '}
              </Text>
              <Text
                bold={isSelected}
                color={isSelected ? 'cyan' : isDisabled ? 'gray' : 'white'}
                dimColor={isDisabled}
              >
                {item.label}
                {isDisabled ? ' (disabled)' : ''}
              </Text>
            </Box>
          );
        })}
      </Box>

      {selectedItem?.description && (
        <Box marginBottom={1} paddingLeft={2}>
          <Text italic color="gray">
            ℹ {selectedItem.description}
          </Text>
        </Box>
      )}

      <Box marginTop={1}>
        <Text color="gray" dimColor>
          [↑/↓] Navigate • [Enter] Select • [Esc] Back
        </Text>
      </Box>
    </Box>
  );
};
