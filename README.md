# Getting Started

Install dependencies with pnpm:

```bash
pnpm install
```

Prepare husky

```bash
pnpm prepare
```

Start local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configurations done in this template

- Absolute file referencing e.g. "@/modules/components/Hello.tsx" via tsconfig
- Modular file structure e.g."@/modules/common", "@/modules/ModuleName"
- Dynamic layout support for reusing layout component across pages without re-declaring on each page
- Using sass for tailwind config, and some boilerplate e.g. setting html, body elements, etc
- Sorted imports e.g. alphabetical and in groups. Avoids git diff changes when imports are sorted differently between people
- Requires vscode extensions like eslint and prettier
- Use ./src as src directory for nextjs
- Includes a `<meta>` reusable component PageHead to use in each page and also some default favicons

## Using the PageHead component

Use this component to quickly bootstrap the meta tags for the page

1. Go to PageHead component and update the `appName` const to your project's title
2. Use PageHead in your `/pages/**/*` files
3. Feel free to update the props as you see fit

## Using the CustomIcon component

1. Checkout the README file in that /modules/common/components/CustomIcon/README.md to learn more

## Packages used

### ESLint related

<https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser>

<https://github.com/import-js/eslint-plugin-import/>

<https://github.com/lydell/eslint-plugin-simple-import-sort>

### VSCode extensions

ESLint: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

Tailwind CSS IntelliSense: <https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss>
