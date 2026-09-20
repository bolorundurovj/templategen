import React from 'react';
import { Box, Text } from 'ink';
import path from 'path';
import { WizardConfig } from '../types.js';

interface PreviewCardProps {
  config: Partial<WizardConfig>;
}

export const PreviewCard: React.FC<PreviewCardProps> = ({ config }) => {
  const targetDir = config.projectName
    ? path.join(process.cwd(), config.projectName)
    : '(pending name)';

  const frameworkDisplay =
    config.framework ||
    (config.feFramework || config.beFramework
      ? `${config.feFramework || '?'} + ${config.beFramework || '?'}`
      : '—');

  return (
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor="magenta"
      paddingX={1}
      paddingY={0}
      minWidth={36}
    >
      <Box
        marginBottom={1}
        borderStyle="single"
        borderColor="gray"
        paddingX={1}
      >
        <Text bold color="magenta">
          📋 Project Summary
        </Text>
      </Box>

      <Box flexDirection="column" gap={0}>
        <Box justifyContent="space-between">
          <Text color="gray">Name:</Text>
          <Text bold color={config.projectName ? 'white' : 'gray'}>
            {config.projectName || '—'}
          </Text>
        </Box>

        <Box justifyContent="space-between">
          <Text color="gray">Type:</Text>
          <Text color={config.projectType ? 'cyan' : 'gray'}>
            {config.projectType || '—'}
          </Text>
        </Box>

        <Box justifyContent="space-between">
          <Text color="gray">Language:</Text>
          <Text color={config.language ? 'yellow' : 'gray'}>
            {config.language || '—'}
          </Text>
        </Box>

        <Box justifyContent="space-between">
          <Text color="gray">Framework:</Text>
          <Text color={frameworkDisplay !== '—' ? 'green' : 'gray'}>
            {frameworkDisplay}
          </Text>
        </Box>

        {config.architecturePattern && (
          <Box justifyContent="space-between">
            <Text color="gray">Architecture:</Text>
            <Text color="blue">{config.architecturePattern}</Text>
          </Box>
        )}

        {config.database && (
          <Box justifyContent="space-between">
            <Text color="gray">Database:</Text>
            <Text color="blue">{config.database}</Text>
          </Box>
        )}

        {config.shadcn !== undefined && (
          <Box justifyContent="space-between">
            <Text color="gray">shadcn/ui:</Text>
            <Text color={config.shadcn ? 'green' : 'gray'}>
              {config.shadcn ? 'Yes' : 'No'}
            </Text>
          </Box>
        )}
      </Box>

      <Box
        marginTop={1}
        borderStyle="single"
        borderColor="gray"
        flexDirection="column"
      >
        <Text color="gray" dimColor>
          Target Directory:
        </Text>
        <Text color="cyan" wrap="truncate-end">
          {targetDir}
        </Text>
      </Box>
    </Box>
  );
};
