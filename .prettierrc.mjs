/** @type {import("prettier").Config} */
const prettierConfigs = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  tabWidth: 2,
  printWidth: 80,
  jsxSingleQuote: false,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default prettierConfigs;
