# JsCpp

- https://medium.com/@atulanand94/beginners-guide-to-writing-nodejs-addons-using-c-and-n-api-node-addon-api-9b3b718a9a7f
- 



# Native API


## Setup

Lets Code: Boilerplate setup
Create a basic node project test-addon

```bash
mkdir test-addon
cd test-addon
git init
npm init
```

Install the dependencies:

```bash
npm install node-gyp --save-dev
npm install node-addon-api
```

node-gyp is the toolchain to compile the addons. node-addon-api is a helper project as described earlier that will make writing C++ addons easier.



In the package.json set the attribute gypfile:true and setup the following files as below:

```bash
{
  "name": "test-addon",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "gypfile": true,
  "scripts": {
    "build": "node-gyp rebuild",
    "clean": "node-gyp clean"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "node-gyp": "^3.7.0"
  },
  "dependencies": {
    "node-addon-api": "^1.3.0"
  }
}
```




##