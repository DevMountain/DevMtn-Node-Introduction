# DevMtn-Node-Introduction
insert final picture here

## Project Summary
In this project we will go over the basics of setting up a node server that can serve HTML files, test our server's endpoints using postman, and learn how to use the body and parameters of a request.

## Setup
In order to get started with the project we will need to do the following:
* Install postman ( https://www.getpostman.com/ )
* Install node ( https://nodejs.org/en/download/ )
* Create a directory called server in the root of the project ( `mkdir server` )
* `cd` into server

## Step 1
### Summary
In this step we will create a package.json file to allow us to install packages. The package.json is what `npm` uses to handle packages and also to install packages. Without a package.json with the required `name` and `version` field, you would not be able to install any packages into your project. 

### Instructions 
Using `npm` ( which comes installed with node ) we can use a pre-defined CLI command called `init` that will interactively create a package.json on for us. In your terminal use `npm init` and press the enter key for every option. This will create a package.json file for us with all the default values.

### Solution
You should now have a file called `package.json` inside the `server` folder:
<details>
<summary> package.json </summary>

```javascript
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
</details>

## Step 2
### Summary
In this step will use `npm` to install our required dependencies to run an express server. 

### Instructions
Using the terminal you can install multiple packages using `npm install <package_name> <package_name>`. We will also add the `--save` tag so the packages get saved to our package.json. For our express server we will be installing the packages `express` and `body-parser`. `npm install --save express body-parser`.

### Solution
Your package.json should look very familiar to the following (version numbers may vary):
<details>
<summary> package.json </summary>

```javascript
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2"
  }
}
```
</details>

## Step 3
### Summary
In this step we will create the basic outline of our server in a javascript file. The name of this file doesn't matter as long as it matches the entry point in your package.json. Since we created our package.json using the default values it is expecting a file called `index.js`. 

### Instructions
Create a file called `index.js` in the server folder and open it. We'll start by requiring the packages we installed earlier at the top of the file. 

```javascript
var express = require('express');
var bodyParser = require('body-parser');
```

This file now knows about the `express` and `body-parser` packages inside of our node_modules folder. Creating a server using express is as easy as invoking express and assigning to a variable. 

```javascript
var express = require('express');
var bodyParser = require('body-parser');
var server = express();
```

We now 


