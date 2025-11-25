# Getting Started

Install dependencies with pnpm:

```bash
pnpm install
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
- Using css for tailwind config, and some boilerplate e.g. setting html, body elements, etc
- Sorted imports e.g. alphabetical and in groups. Avoids git diff changes when imports are sorted differently between people
- Requires vscode extensions like eslint and prettier
- Use ./src as src directory for nextjs

## Adding favicon 

1. Go to: <https://realfavicongenerator.net/>
2. Upload your favicon.ico file
3. Click next after configurations
4. Click on "NextJS" tab
5. Follow the instructions

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
