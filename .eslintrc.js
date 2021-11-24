module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'modules-newline',
    'import',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    }
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:@ota-meshi/svelte/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
  },
  rules: {
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/indent': ['error', 2, {
      'SwitchCase': 1,
      'FunctionDeclaration': { parameters: 'first' },
    }],
    '@typescript-eslint/no-unused-vars': 0, // checked by typescript parser
    'indent': 'off',
    'import/first': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'groups': ['external', 'internal'],
        'newlines-between': 'always',
      },
    ],
    'eol-last': ["error", "always"],
    'max-len': ['error', { 'code': 120 }],
    'no-template-curly-in-string': 'off',
    'object-curly-newline': ['error', {
        'ImportDeclaration': { 'multiline': true, 'minProperties': 2 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 2 },
      },
    ],
    'modules-newline/import-declaration-newline': 'warn',
    'modules-newline/export-declaration-newline': 'warn',
  }
};