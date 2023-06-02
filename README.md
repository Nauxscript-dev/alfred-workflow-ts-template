# alfred-workflow-ts-template
a Template for building a alfred workflow in TypeScript.

## Features

- 🦾 TypeScript, of course.
- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest).
- rollup to build.
- JXA Types, supported by [@jxa/global-type](https://github.com/JXA-userland/JXA/tree/master/packages/@jxa/global-type).
- Eslint.
- pnpm.

## Usage

- Add a new blank workflow
- Use this template to create a new repo in your github
- Open the blank workflow path in terminal then run 
  - `git init`
  - `git remote origin add [your new repo path]`
  - `git pull origin main`
- update your workflow infomation in the `package.json`
- change the `artifacts` value in `.github/workflows/release.yml` and setup the environment variable `secrets.G_TOKEN`
- filled in the workflow info in `src/update.sh`
- go and make a awesome workflow!

## notes

- in development, the path of script in `script filter` need to set with prefix `dist/`, like `osascript -l JavaScript dist/scripts/index.js "$1" 2>&1`, that path will be replaced with `scripts/index.js` when buiding it, so it will become to `osascript -l JavaScript scripts/index.js "$1" 2>&1` evnetually.

## Preview

# License

[MIT](./LICENSE) License © 2022 [Nauxscript](https://github.com/Nauxscript)