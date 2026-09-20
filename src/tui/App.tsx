import React, { useState } from 'react';
import { Box, Text, useApp } from 'ink';
import fs from 'fs';
import path from 'path';
import { Header } from './components/Header.js';
import { PreviewCard } from './components/PreviewCard.js';
import { Select } from './components/Select.js';
import { TextInput } from './components/TextInput.js';
import { Confirm } from './components/Confirm.js';
import {
  ARCHITECTURE_PATTERNS,
  BACKEND_FRAMEWORKS,
  DATABASES,
  FRONTEND_FRAMEWORKS,
  PROGRAMMING_LANGUAGES,
} from '../choices.js';
import {
  requiresArchitecturePattern,
  requiresDatabase,
} from '../validators.js';
import { ChoiceItem, WizardConfig, WizardStep } from './types.js';

interface AppProps {
  initialConfig?: Partial<WizardConfig>;
  onSubmit: (config: WizardConfig) => void;
  onCancel: () => void;
}

const PROJECT_TYPE_CHOICES: ChoiceItem[] = [
  {
    label: 'Frontend',
    value: 'frontend',
    description: 'A frontend only application (React, Vue, Next.js, etc.)',
  },
  {
    label: 'Backend',
    value: 'backend',
    description:
      'A backend server / API (Express, NestJS, FastAPI, Django, .NET)',
  },
  {
    label: 'Fullstack',
    value: 'fullstack',
    description:
      'An Nx-managed monorepo combining frontend and backend services',
  },
  {
    label: 'Desktop (Coming Soon)',
    value: 'desktop',
    disabled: true,
  },
  {
    label: 'Mobile (Coming Soon)',
    value: 'mobile',
    disabled: true,
  },
];

export const App: React.FC<AppProps> = ({
  initialConfig = {},
  onSubmit,
  onCancel,
}) => {
  const { exit } = useApp();
  const [config, setConfig] = useState<Partial<WizardConfig>>({
    projectName: initialConfig.projectName || '',
    projectType: initialConfig.projectType || '',
    language: initialConfig.language || '',
    framework: initialConfig.framework || '',
    feFramework: initialConfig.feFramework || '',
    beFramework: initialConfig.beFramework || '',
    architecturePattern: initialConfig.architecturePattern || '',
    database: initialConfig.database || '',
    shadcn: initialConfig.shadcn,
  });

  const [step, setStep] = useState<WizardStep>(() => {
    if (!initialConfig.projectName) return 'PROJECT_NAME';
    if (!initialConfig.projectType) return 'PROJECT_TYPE';
    return 'LANGUAGE';
  });

  const [history, setHistory] = useState<WizardStep[]>([]);

  const goToStep = (nextStep: WizardStep) => {
    setHistory((prev) => [...prev, step]);
    setStep(nextStep);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevStep = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setStep(prevStep);
    } else {
      onCancel();
      exit();
    }
  };

  const shouldAskShadcn = (
    type?: string,
    fw?: string,
    feFw?: string,
  ): boolean => {
    if (type === 'frontend' || type === 'fullstack') {
      const target = type === 'fullstack' ? feFw : fw;
      if (target && (target.includes('react') || target.includes('nextjs'))) {
        return true;
      }
    }
    return false;
  };

  // Step 1: Project Name
  const handleProjectNameSubmit = (name: string) => {
    setConfig((prev) => ({ ...prev, projectName: name }));
    goToStep('PROJECT_TYPE');
  };

  const validateProjectName = (name: string): string | null => {
    if (!name || name.trim().length === 0) {
      return 'Project name cannot be empty';
    }
    const targetPath = path.join(process.cwd(), name);
    if (fs.existsSync(targetPath)) {
      return `Folder "${name}" already exists in the current directory.`;
    }
    return null;
  };

  // Step 2: Project Type
  const handleProjectTypeSelect = (typeVal: string) => {
    setConfig((prev) => ({
      ...prev,
      projectType: typeVal,
      language: '',
      framework: '',
      feFramework: '',
      beFramework: '',
      architecturePattern: '',
      database: '',
    }));
    goToStep('LANGUAGE');
  };

  // Step 3: Language
  const handleLanguageSelect = (langVal: string) => {
    setConfig((prev) => ({
      ...prev,
      language: langVal,
      framework: '',
      feFramework: '',
      beFramework: '',
    }));
    if (config.projectType === 'fullstack') {
      goToStep('FRONTEND_FRAMEWORK');
    } else {
      goToStep('FRAMEWORK');
    }
  };

  // Step 4: Single Framework (frontend / backend)
  const handleFrameworkSelect = (fwVal: string) => {
    const updatedConfig = { ...config, framework: fwVal };
    setConfig(updatedConfig);

    if (requiresArchitecturePattern(config.projectType || '')) {
      goToStep('ARCHITECTURE');
    } else if (requiresDatabase(config.projectType || '')) {
      goToStep('DATABASE');
    } else if (shouldAskShadcn(config.projectType, fwVal)) {
      goToStep('SHADCN');
    } else {
      goToStep('REVIEW');
    }
  };

  // Step 4a: Frontend Framework (fullstack)
  const handleFrontendFrameworkSelect = (feFwVal: string) => {
    setConfig((prev) => ({ ...prev, feFramework: feFwVal }));
    goToStep('BACKEND_FRAMEWORK');
  };

  // Step 4b: Backend Framework (fullstack)
  const handleBackendFrameworkSelect = (beFwVal: string) => {
    const combinedFramework = `${config.feFramework}-${beFwVal}`;
    const updatedConfig = {
      ...config,
      beFramework: beFwVal,
      framework: combinedFramework,
    };
    setConfig(updatedConfig);

    if (requiresArchitecturePattern('fullstack')) {
      goToStep('ARCHITECTURE');
    } else if (requiresDatabase('fullstack')) {
      goToStep('DATABASE');
    } else if (
      shouldAskShadcn('fullstack', combinedFramework, config.feFramework)
    ) {
      goToStep('SHADCN');
    } else {
      goToStep('REVIEW');
    }
  };

  // Step 5: Architecture
  const handleArchitectureSelect = (archVal: string) => {
    const updatedConfig = { ...config, architecturePattern: archVal };
    setConfig(updatedConfig);

    if (requiresDatabase(config.projectType || '')) {
      goToStep('DATABASE');
    } else if (
      shouldAskShadcn(config.projectType, config.framework, config.feFramework)
    ) {
      goToStep('SHADCN');
    } else {
      goToStep('REVIEW');
    }
  };

  // Step 6: Database
  const handleDatabaseSelect = (dbVal: string) => {
    const updatedConfig = { ...config, database: dbVal };
    setConfig(updatedConfig);

    if (
      shouldAskShadcn(config.projectType, config.framework, config.feFramework)
    ) {
      goToStep('SHADCN');
    } else {
      goToStep('REVIEW');
    }
  };

  // Step 7: shadcn
  const handleShadcnConfirm = (confirmed: boolean) => {
    setConfig((prev) => ({ ...prev, shadcn: confirmed }));
    goToStep('REVIEW');
  };

  // Step 8: Final Review & Confirmation
  const handleReviewAction = (actionVal: string) => {
    if (actionVal === 'submit') {
      onSubmit(config as WizardConfig);
      exit();
    } else if (actionVal === 'back') {
      handleBack();
    } else {
      onCancel();
      exit();
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 'PROJECT_NAME':
        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              What do you want to name your project?
            </Text>
            <Text color="gray">
              This will create a new directory in your current workspace.
            </Text>
            <TextInput
              defaultValue={config.projectName}
              placeholder="e.g. my-awesome-app"
              validate={validateProjectName}
              onSubmit={handleProjectNameSubmit}
              onBack={handleBack}
            />
          </Box>
        );

      case 'PROJECT_TYPE':
        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              What type of project are you scaffolding?
            </Text>
            <Select
              items={PROJECT_TYPE_CHOICES}
              onSelect={handleProjectTypeSelect}
              onBack={handleBack}
            />
          </Box>
        );

      case 'LANGUAGE': {
        const langChoices =
          (config.projectType && PROGRAMMING_LANGUAGES[config.projectType]) ||
          [];
        const items: ChoiceItem[] = langChoices.map((c) => ({
          label: c.name,
          value: c.value,
          description: c.description,
          disabled: c.disabled,
        }));

        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              Which programming language would you like to use?
            </Text>
            <Select
              items={items}
              onSelect={handleLanguageSelect}
              onBack={handleBack}
            />
          </Box>
        );
      }

      case 'FRAMEWORK': {
        const fwChoices =
          config.projectType === 'frontend'
            ? FRONTEND_FRAMEWORKS[config.language || ''] || []
            : BACKEND_FRAMEWORKS[config.language || ''] || [];

        const items: ChoiceItem[] = fwChoices.map((c) => ({
          label: c.name,
          value: c.value,
          description: c.description,
          disabled: c.disabled,
        }));

        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              Select the {config.projectType} framework:
            </Text>
            <Select
              items={items}
              onSelect={handleFrameworkSelect}
              onBack={handleBack}
            />
          </Box>
        );
      }

      case 'FRONTEND_FRAMEWORK': {
        const feLang = (config.language || '').split('-')[0] || '';
        const fwChoices = FRONTEND_FRAMEWORKS[feLang] || [];
        const items: ChoiceItem[] = fwChoices.map((c) => ({
          label: c.name,
          value: c.value,
          description: c.description,
          disabled: c.disabled,
        }));

        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              Select the Frontend framework ({feLang}):
            </Text>
            <Select
              items={items}
              onSelect={handleFrontendFrameworkSelect}
              onBack={handleBack}
            />
          </Box>
        );
      }

      case 'BACKEND_FRAMEWORK': {
        const beLang = (config.language || '').split('-')[1] || '';
        const fwChoices = BACKEND_FRAMEWORKS[beLang] || [];
        const items: ChoiceItem[] = fwChoices.map((c) => ({
          label: c.name,
          value: c.value,
          description: c.description,
          disabled: c.disabled,
        }));

        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              Select the Backend framework ({beLang}):
            </Text>
            <Select
              items={items}
              onSelect={handleBackendFrameworkSelect}
              onBack={handleBack}
            />
          </Box>
        );
      }

      case 'ARCHITECTURE': {
        const items: ChoiceItem[] = ARCHITECTURE_PATTERNS.map((c) => ({
          label: c.name,
          value: c.value,
          description: c.description,
          disabled: c.disabled,
        }));

        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              Select the architectural pattern:
            </Text>
            <Select
              items={items}
              onSelect={handleArchitectureSelect}
              onBack={handleBack}
            />
          </Box>
        );
      }

      case 'DATABASE': {
        const items: ChoiceItem[] = DATABASES.map((c) => ({
          label: c.name,
          value: c.value,
          description: c.description,
          disabled: c.disabled,
        }));

        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="white">
              Select the database:
            </Text>
            <Select
              items={items}
              onSelect={handleDatabaseSelect}
              onBack={handleBack}
            />
          </Box>
        );
      }

      case 'SHADCN':
        return (
          <Box flexDirection="column" gap={1}>
            <Confirm
              message="Would you like to initialize shadcn/ui for components?"
              defaultYes={true}
              onConfirm={handleShadcnConfirm}
              onBack={handleBack}
            />
          </Box>
        );

      case 'REVIEW':
        return (
          <Box flexDirection="column" gap={1}>
            <Text bold color="green">
              ✔ Configuration complete! Ready to scaffold project.
            </Text>
            <Text color="gray">
              Review your settings in the summary panel on the right.
            </Text>
            <Select
              items={[
                {
                  label: '🚀 Generate Project',
                  value: 'submit',
                  description: 'Generate templates and install dependencies',
                },
                {
                  label: '← Change Previous Setting',
                  value: 'back',
                  description: 'Step back to modify choices',
                },
                {
                  label: '✕ Cancel',
                  value: 'cancel',
                  description: 'Exit without generating',
                },
              ]}
              onSelect={handleReviewAction}
              onBack={handleBack}
            />
          </Box>
        );
    }
  };

  return (
    <Box flexDirection="column" padding={1}>
      <Header currentStep={step} />

      <Box flexDirection="row" width="100%" justifyContent="space-between">
        <Box flexDirection="column" width="58%" paddingRight={1}>
          {renderStepContent()}
        </Box>

        <Box flexDirection="column" width="42%">
          <PreviewCard config={config} />
        </Box>
      </Box>
    </Box>
  );
};
