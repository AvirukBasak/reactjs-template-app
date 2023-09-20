# ReactJS Template App

## Getting started
Create a new project by cloning this repo.

- Make changes to `src/components/*.jsx`
- Add JS modules to `src/scripts/*.js`
- Add CSS to `public/styles/*.css`
- Link your CSS in `src/index.html`

## Run server
```
npm i
npm start
```

## Build
You may build the app and serve it statically in say a python server
```
npm i
npm run build
python -m http.server --bind 127.0.0.1 -d static 8080
```
