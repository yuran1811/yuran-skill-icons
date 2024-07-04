import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

import globals from 'globals';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/*.log',
      '**/.DS_Store',
      '**/*.',
      '.vscode/settings.json',
      '**/.history',
      '**/.yarn',
      '**/bazel-*',
      '**/bazel-bin',
      '**/bazel-out',
      '**/bazel-qwik',
      '**/bazel-testlogs',
      '**/dist',
      '**/dist-dev',
      '**/lib',
      '**/lib-types',
      '**/etc',
      '**/external',
      '**/node_modules',
      '**/temp',
      '**/tsc-out',
      '**/tsdoc-metadata.json',
      '**/target',
      '**/output',
      '**/rollup.config.js',
      '**/build',
      '**/.cache',
      '**/.vscode',
      '**/.rollup.cache',
      '**/dist',
      '**/tsconfig.tsbuildinfo',
      '**/vite.config.ts',
      '**/*.spec.tsx',
      '**/*.spec.ts',
      '**/.netlify',
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/server',
    ],
  },
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',

      parserOptions: {
        tsconfigRootDir: '.',
        project: ['./tsconfig.json'],

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-case-declarations': 'off',
      'no-console': 'off',
      'prefer-spread': 'off',
    },
  },
];
