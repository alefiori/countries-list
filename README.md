# Countries List
## Content

Application to show countries information from data available at https://countries.trevorblades.com/.

## Prerequisites

- `nvm` to manage node versions (https://github.com/nvm-sh/nvm#installing-and-updating)

## How to run

- `nvm install && nvm use` to install and use the right node version (LTS)
- `npm i -g pnpm` to install pnpm globally (if you don't have it already)
- `pnpm i` to install dependencies
- `pnpm dev` to run the application locally
- `pnpm test` to run unit tests
- `pnpm build` to run the build

## Tech Stack

- `pnpm` as package manager
- `typescript` as language
- `vite` as bundler
- `swc` as compiler
- `react` as framework
- `tailwindcss` as css framework
- `graphql` as data fetching
- `graphql-request` as graphql client
- `zustand` as state management
- `vitest` as unit testing framework
- `testing-library` as components testing utilities
- `eslint` as linter
- `prettier` as code formatter
- `husky` as git hooks manager
- `lint-staged` as linter for staged files
