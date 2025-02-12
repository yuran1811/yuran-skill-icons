import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

import globals from "globals";

import path from "node:path";
import { fileURLToPath } from "node:url";

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
      ".vscode/settings.json",
      "public/icons",
      "**/.cache",
      "**/.DS_Store",
      "**/.history",
      "**/.netlify",
      "**/.rollup.cache",
      "**/.vscode",
      "**/.yarn",
      "**/*.",
      "**/*.log",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "**/bazel-*",
      "**/bazel-bin",
      "**/bazel-out",
      "**/bazel-qwik",
      "**/bazel-testlogs",
      "**/build",
      "**/dist-dev",
      "**/dist",
      "**/dist",
      "**/etc",
      "**/external",
      "**/lib-types",
      "**/lib",
      "**/node_modules",
      "**/output",
      "**/package-lock.json",
      "**/pnpm-lock.yaml",
      "**/rollup.config.js",
      "**/server",
      "**/target",
      "**/temp",
      "**/tsc-out",
      "**/tsconfig.tsbuildinfo",
      "**/tsdoc-metadata.json",
      "**/vite.config.ts",
      "**/yarn.lock",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    plugins: { "@typescript-eslint": typescriptEslint },

    languageOptions: {
      globals: { ...globals.browser, ...globals.node },

      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",

      parserOptions: {
        tsconfigRootDir: ".",
        project: ["./tsconfig.json"],

        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-case-declarations": "off",
      "no-console": "off",
      "prefer-spread": "off",
    },
  },
];
