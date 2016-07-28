# Simple Angular2 app for warehouse management

This app lets the user visualize and edit data regarding departments and products in a warehouse, it also lets  the user create new data. It takes data about departments and products from a fake server, and it can save data to the server. saved data are lost when the session is over.

**This is not meant to be a finished application, but rather a starting point or a reference**

## Prerequisites (refer to Angular2 Quickstart)

Node.js and npm are essential to Angular 2 development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older and newer versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Install npm packages (refer to Angular2 Quickstart)

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.