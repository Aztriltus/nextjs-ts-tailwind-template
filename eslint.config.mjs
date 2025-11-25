import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'react/jsx-sort-props': [
        2,
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@/common/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/modules/**',
              group: 'external',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
      'array-callback-return': [
        'error',
        {
          checkForEach: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn', // or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'warn', // or "error"
        {
          allowWithName: 'Props$',
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-anonymous-default-export': 'warn',
      'react/no-unknown-property': [
        'error',
        { ignore: ['css', 'global', 'jsx'] },
      ],
    },
  },
  // Disable import/order for config files - Prettier handles sorting
  {
    files: ['*.config.{js,mjs,ts}', 'eslint.config.*'],
    rules: {
      'import/order': 'off',
    },
  },
]);

export default eslintConfig;
