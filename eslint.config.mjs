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
          groups: [
            // Side effect imports (e.g., import './styles.css')
            ['^\\u0000'],
            // External packages (react, next, etc.) - type imports are handled automatically
            ['^react', '^next', '^@?\\w'],
            // Internal packages (@/common, @/modules)
            ['^@/common', '^@/modules'],
            // Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      // Disable import/order since we're using simple-import-sort
      'import/order': 'off',
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
  // Disable simple-import-sort for config files - Prettier handles sorting
  {
    files: ['*.config.{js,mjs,ts}', 'eslint.config.*'],
    rules: {
      'simple-import-sort/imports': 'off',
      'simple-import-sort/exports': 'off',
    },
  },
]);

export default eslintConfig;
