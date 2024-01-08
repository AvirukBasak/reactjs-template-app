# ReactJS Template App

## Getting started
Create a new project by cloning this repo.

- `src/components` contains all the components
- `src/context` contains all the context providers
- `src/fonts` contains font files
- `src/res` contains image files
- `src/mocks` contains mock data for testing
- `src/pages` contains all the pages for routing
- `src/styles` contains global styles
- `src/types` contains type definitions
- `src/utils` contains utility functions
- `src/index.tsx` is the entry point for the app
- `src/index.html` is the HTML template for the app

### Warning
Jest ignores assets and CSS files, hence to validate if correct assets and CSS are being imported, you will need to customize jest with your own loaders/presets.

## Module aliases
- `@/` resolves to `src/`
- `@public/` resolves to `public/` (untested)

## Component directory structure
- `MyComponent/`
  - `MyComponent.module.css` is the component's styles
  - `MyComponent.test.tsx` is the test file
  - `index.tsx` exports the component

## Dependencies Used
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [PostCSS](https://postcss.org/)
- [ReactJS](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)

## TailwindCSS Limitations
- Cannot use utility classes in `className` prop of React components
- Can use utility classes via `@apply` in CSS files

## Run server
```
npm install
npm start
```

## Test
```
npm install
npm run test
```

## Build
You may build the app and serve it statically in say a python server
```
npm install
npm run build
python -m http.server --bind 127.0.0.1 -d dist 8080
```

## Dev Build
You may build the app and serve it statically in say a python server
```
npm install
npm run dev
python -m http.server --bind 127.0.0.1 -d dist 8080
```
