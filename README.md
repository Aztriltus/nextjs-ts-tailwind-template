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
- Requires vscode extension like Oxc (oxlint + oxfmt)
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

### Linting and formatting

- [oxlint](https://oxc-project.github.io/docs/guide/usage/linter.html) – Fast linter
- [oxfmt](https://oxc-project.github.io/docs/guide/usage/formatter.html) – Code formatter
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) – Used by oxlint for import sorting rules

### VSCode extensions

- Oxc (oxlint + oxfmt): <https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode>
- Tailwind CSS IntelliSense: <https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss>
