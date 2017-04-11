<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# DevMtn-Node-Introduction
insert final picture here

## Project Summary
In this project we will go over the basics of setting up a node server that can serve HTML files, test our server's endpoints using postman, and learn how to use the body and parameters of a request.

## Setup
In order to get started with the project we will need to do the following:
* Install postman ( https://www.getpostman.com/ )
* Install node +7.5.0 ( https://nodejs.org/en/download/ )
* Install nodemon ( `sudo npm install -g nodemon` )
* Create a directory called server in the root of the project ( `mkdir server` )
* `cd` into server

## Step 1
### Summary
In this step we will create a package.json file to keep track of our dependencies and their versions for this project.

### Instructions
Using `npm` ( which comes installed with node ) we can use a pre-defined CLI command called `init` that will interactively create a package.json for us. In your terminal use `npm init` and press the enter key for every option. This will create a package.json file for us with all the default values.

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
In this step will use `npm` to install and save our required dependencies to run an express server.

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
const express = require('express');
const bodyParser = require('body-parser');
```

This file now knows about the `express` and `body-parser` packages inside of our node_modules folder. Creating a server using express is as easy as invoking express and assigning it to a variable.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
```

We now have an express application stored in `app`. If you were to `console.log` app you will see that it is a object full of properties and methods. The ones we are worried about are `.listen` and `.static`. `.listen` will allow us to determine what port our server should listen on and `.static` will allow us to server our html files on that port. Let's start by telling our server to listen on port 3000.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```

## Step 4
### Summary
In this step we will create a global object called `user` that will have some default properties. This will be the object we will modify and read through endpoints we'll create in the following steps.

### Instructions
Let's start by creating an object under `app` called `user`. Let's give it some properties: `username`, `password`, and `email`. The values can be whatever strings you like.

### Solution
<details>
<summary> index.js </summary>

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user = {
  username: 'dev',
  password: 'mountain',
  email: 'dev@mountain.com'
};

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```
</details>

## Step 5
### Summary
In this step we will create a read enpoint to interact with our global object `user`. In express you can create an endpoint by doing `app.get`, `app.put`, `app.post`, and `app.delete`. Since we want a read endpoint we'll use `app.get`. Take note that I'm saying `app.*` because our express application was stored in a variable called `app`. If I named it something else like `foo`, then it would be `foo.get`, `foo.put`, `foo.post`, and `foo.delete` instead.

Another important thing to note is that endpoints take two parameters, the first one being the route and the second one being the function to be called when that route is hit.

### Instructions
After our `user` object let's create a get endpoint using `app.get()`. The first parameter is the route of the endpoint after `http://localhost:3000/` and the second parameter is function we want to be called when that route is hit. If we did `app.get('/')` then whenever we did a get call at `http://localhost:3000/` the provided function would then be called.



