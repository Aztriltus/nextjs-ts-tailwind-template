module.exports = {
  extends: ["plugin:react/recommended", "next/core-web-vitals"],
  rules: {
    "@next/next/no-img-element": "off",
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@next/next", "@typescript-eslint", "react"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
