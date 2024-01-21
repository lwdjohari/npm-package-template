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

## LICENSE
MIT LICENSE Copyright 2023 Linggawasistha Djohari

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
