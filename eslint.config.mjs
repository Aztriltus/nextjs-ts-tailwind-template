import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

/**
 * @type {import("eslint").Linter.Config}
 */
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    plugins: ['simple-import-sort', 'import'],
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
        'warn',
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
  }),
];

export default eslintConfig;
