/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testMatch: ['**/tests/**/*.test.ts'],
  modulePathIgnorePatterns: ['<rootDir>/templates/', '<rootDir>/scratch/'],
  testPathIgnorePatterns: ['<rootDir>/templates/', '<rootDir>/scratch/'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transformIgnorePatterns: [
    // Allow Jest to transform specific dependencies (e.g., chalk)
    'node_modules/(?!(chalk|ansi-styles)/)',
  ],
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES Modules
  globals: {
    'ts-jest': {
      useESM: true, // Enable ESM support in ts-jest
    },
  },
  moduleNameMapper: {
    // Map ES Modules to their CommonJS equivalents
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  verbose: true, // Show detailed test output
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};
