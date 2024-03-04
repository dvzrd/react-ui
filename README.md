# The Chad React UI

A React UI component library bundled with Rollup.js to commonJs, ES6 Modules, Storybook, Tailwind CSS, and Shadcn UI.

This project is a clone of [Shared](https://github.com/behzadam/shared) and has been updated for personal use.

## Setup

This section will cover how to use the library in your own project.

### Peer Dependencies

To use this package and all of it's components without any issues, you will need to install some dependencies for everything to work as intended.

The reason these are required is because most of these components are created using shadcn/ui cli, which integrates radix-ui with tailwind. And these two libraries have some dependencies that are necessary for the ui to function and render like its supposed.

Here's a list of all the peer dependencies this package relies on:

- `lucide-react@0.312.0`
- `react@^18.2.0`
- `react-dom@^18.2.0"`
- `react-hook-form@^7.49.3`
- `tailwind-variants@^0.2.0`
- `tailwindcss-animate@^1.0.7`
- `tailwindcss@^3.4.1`

**Note: As of v1.1.0, `clsx`, `cva`, and `twMerge` are replaced by `tv`.**

### Installing Dependencies

You can use whatever package management library, but I'll be using yarn for this example.

#### 1. Install the package as a dependency

```
yarn add chad-ui 
```

#### 2. Install other necessary dependencies:

```
yarn add lucide-react react react-dom react-hook-form tailwind-variants
```

These can be added as dev dependencies:

```
yarn add -D tailwindcss-animate tailwindcss
```

### Configuring Tailwind

You will need to configure tailwind with chad-ui to be able to use the ui components without any issues. If you don't know how to do that and need a good starting point, look for a popular React 18 and TailwindCSS boilerplate or starter.

While testing the library in development, I used this: [ReactJS Vite TailwindCSS Boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate), and had no issues. Now, then to configure tailwind with chad-ui:

#### 1. Create or update your tailwind.config.js file in the root of your project's dir.

```
import defaultConfig from 'chad-ui/tailwind.config'

export default {
  ...defaultConfig,
  content: [
    './node_modules/chad-ui/**/*.{mjs,js,ts,jsx,tsx}',
    './src/**/*.{mjs,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      ...defaultConfig.theme.extend
    }
  },
  plugins: [...defaultConfig.plugins]
}
```

#### 2. Create or update your main stylesheet

```
@import 'chad-ui/dist/styles/tailwind.css';

:root {
    --primary: 83 100% 50%;
    --primary-foreground: 54 50% 3%;
}

.dark {
    --primary: 54 50% 3%;
    --primary-foreground: 83 100% 50%;
}

```

If you need more control over your stylesheets, you can access all of the stylesheets used by chad-ui:

```
@import 'chad-ui/dist/styles/themes.css';
@import 'chad-ui/dist/styles/globals.css';

@import './libs/some-lib.css'

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --primary: 83 100% 50%;
    --primary-foreground: 54 50% 3%;
}

.dark {
    --primary: 54 50% 3%;
    --primary-foreground: 83 100% 50%;
}

@layer base {
    header,
    footer {
        @apply
            min-height: 25vh;
    }
}
```

#### 3. Import your tailwind styles

Inside of `src/index.tsx`, add an import to your stylesheet:

```
import 'styles/main.css'
```

#### 4. Use your Chad-UI components

Inside of `src/components/App.tsx`, import the Button component:

```
import { Button } from 'chad-ui'
```

Try adding a button around a link, using the `asChild` prop to render your link in the style of a button:

```
Button asChild size="lg">
    <a href="vscode://">Start building for free</a>
</Button>
```

### Themes

Chad-UI uses [HSL to define themes with css vars](https://www.smashingmagazine.com/2021/07/hsl-colors-css/). The themes stylesheet looks like this:

```
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;

  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;

  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;

  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;

  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;

  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;

  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;

  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;

  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;

  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;

  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;

  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;

  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;

  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
}
```

You can also import it into your own stylesheet like this:

```
@import 'chad-ui/dist/styles/themes.css';
```

### Globals

These are some preset global styles that make use of the theme

```
@layer base {
    * {
      @apply border-border;
    }
  
    body {
      @apply bg-background text-foreground;
    }
}
```

---

## Development

Chad-UI is open-source so feel free to contribute. The following is documentation on how to setup a dev environment and other information necessary to properly become a contributor.

### Getting started

```
git clone git@github.com:dvzrd/react-ui.git
cd react-ui
yarn
```

### Local Dev

To start the developing run:

```
yarn start
```

This will build a version of your library, run the watcher and also run Storybook.
To open Storybook manually open your Browser and navigate to [http://localhost:6060](http://localhost:6060).
Start developing your components in `src/components` folder and update the `src/index.js` file accordingly.
Always provide an `YourComponent.stories.tsx` file, so your component will show up in Storybook.

### Linting and Code formatting for Typescript

Linting and code formatting is done via [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) using [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) and
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
You can modify linting rules by overriding them in the `.eslintrc.cjs` file.

```
yarn lint
```

or (if automatic fixing is possible)

```
yarn lint:fix
```

### Testing

Testing is done with [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

```
yarn test
```

### Publishing your library to NPM

To release your library to NPM or your private Registry, make sure you have an active account at [NPM](https://www.npmjs.com/), your `.npmrc` file is correctly setup and the registry url at publishConfig in `package.json` file is set to your repository url, then:

```
yarn release
```

### Storybook

For custom layouts, styling and more information about Storybook, please refer to [Storybook](https://storybook.js.org/basics/writing-stories/) documentation.

#### Deploy Storybook to GitHub Pages

Make sure the homepage url in `package.json` file is set to your github pages url, then:

```
yarn deploy
```

### Scripts

- `yarn start` : Only serves Storybook.
- `yarn upgrade`: Upgrade dependencies using yarn upgrade-interactive script
- `yarn build` : Builds your library (build can be found in `dist` folder).
- `yarn deploy` : Deploys storybook to github pages.
- `yarn lint` : Runs the linter, Typescript typecheck and stylelint.
- `yarn lint:fix` : Runs the linter, Typescript typecheck and stylelint and fixes automatic fixable issues.
- `yarn eslint`: Runs only the JavaScript linter.
- `yarn eslint:fix`: Runs only the JavaScript linter and fixes automatic fixable issues.
- `yarn check-types`: Runs typescript type checker.
- `yarn check-types:pretty`: Runs typescript type checker with pretty responses.
- `yarn ci`: Runs Linting, tests and type checker all together.
- `yarn test` : Runs the tests.
- `yarn release` : Publishes your Library on NPM or your private Registry (depending on your config in your `.npmrc` file).
- `yarn storybook`: Same as yarn start, to serve storybook.
- `yarn storybook:build`: Generates the build for storybook in `storybook-static` folder, that can be deployed wherever you need.
- `yarn storybook:deploy`: Builds and deploys Storybook to GitHub Pages.'
- `yarn ui:diff`: Check for updates against the latest shadcn-ui registry.

### Resources

#### Bundler

- [Rollup.js](https://rollupjs.org/guide/en)

#### Code Formatter

- [Prettier](https://prettier.io/)

#### Storybook

- [Storybook](https://storybook.js.org/)

#### Testing

- [Vitest](https://vitest.dev/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)

#### Linting

- [ESLint](https://eslint.org/)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

#### Compiler

- [Typescript](https://www.typescriptlang.org/)
