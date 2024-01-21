# Npm Package Development template
Ready to use Template for npm library package development.

## Project Structure
```
.
├── @lwd/npm-package-dev            # Npm package source code
│   ├── src                         # Npm package source folder
│   ├── index.ts                    # Entry point for all exports
│   └── package.json                # npm package packge.json
│
├── examples                        # Example project for add deps & running the npm package
│   ├── src                         # Example source folder
│   ├── index.ts                    # Start point for example
│   └── package.json                # example package.json
│
├── lerna.json                      # lerna workspace setting
└── package.json                    # root package.json

```
## Getting started

1. Clone this repo.
2. Delete the git repo or copy the files to your repo.
3. Change all the ```package.json``` & ```lerna.json``` content to reflect your npm package project
4. Change the ```workspaces name``` to your ```npm-scope/npm-package``` on root ```package.json```.
5. To build please execute below command from terminal in you project root.

```shell
# yarn check the deps
yarn

# build the cjs and esm
yarn build

# bundle dist
yarn bundle

# To cleanup
yarn run remove

# To run the examples
yarn start
```
