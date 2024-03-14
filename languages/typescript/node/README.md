# Typescript Node Setup
In this folder you will find a bunch of configuration files for a new Typescript project in Node.
This is for **Node@v20.11.1 and npm@10.2.4**
This will only configure typescript and eslint but will not add any additional package.

If you copy any file, make sure to go through them and ensure that any mentioned version matches the project version.

On new projects, use `nvm` to manage node versions.

First of all, initialize your application by running:
```bash
npm init  # generate package.json
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @stylistic/eslint-plugin-js
npx tsc --init  # generates tsconfig.json
npx eslint --init # generates .eslintrc.json
mkdir src  # here will be all source code
```

I could provide the `.eslintrc.json`, `package.json` and `tsconfig.json` files, but since they are auto generated from the commands above, and change from version to version, I prefer to tell you what to modify in the auto generated files:

### `.eslintrc.json`

  - Add `@stylistic/eslint-plugin-js` to `plugins`
  - Add `"@typescript-eslint/no-unused-vars": "error"` to `rules`
  - Add `"@stylistic/js/quotes": ["error", "single"]` to `rules`
  - Add `"@stylistic/js/semi": ["error", "always"]` to `rules`
  - Add `"@stylistic/js/indent": ["error", 2]` to `rules`

### `package.json`

  - Remove `"type"` key
  - Add `"lint": "npx eslint src/ --fix"` to `scripts`
  - Add `"build": "npx tsc"` to `scripts`

### `tsconfig.json`

  - Set `compilerOptions.outDir` as `"./build"`
  - Set `compilerOptions.rootDir` as `"./src"`
  - Add new root key `"include"` with value `["./src/"]`

### Files
 - `gitignore` -> ignore cache and virtual environment files -> to be placed at `.../project/.gitignore`
 - `pre-commit-config.yaml` -> pre commit hook, need to run `pre-commit install` to activate it -> to be placed at `.../project/.pre-commit-config.yaml`
