module.exports = {
  roots: [
    '<rootDir>/app',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.svelte$': ['svelte-jester', { 'preprocess': true }],
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'svelte',
  ],
  testEnvironment: 'jsdom',
};
