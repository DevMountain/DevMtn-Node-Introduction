<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">


# DevMtn-Node-Introduction
insert final picture here

## Project Summary
In this project we will go over the basics of setting up a node server that can serve HTML files, test our server's endpoints using postman, and learn how to use the body and parameters of a request.

## Setup
In order to get started with the project we will need to do the following:
* Install postman ( https://www.getpostman.com/ )
* Install node - Make sure to select current, not LTS ( https://nodejs.org/en/download/ )
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
In this step we will use `npm` to install and save our required dependencies to run an express server.

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
<br />

If you do not see `"dependencies"` then you forgot to add the `--save` tag to your npm install command.
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

We now have an express application stored in `app`. Our app includes methods like `.listen`, `.static`, `.get`, `.put`, `.delete`, `.post` and many others. We'll cover what each of these do later on in the lesson. For now we'll use `.listen` to tell our server what port to listen on. `.listen` takes two parameters, the first one being the port to listen on and the second one being an optional callback.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```

We now have a server with no endpoints listening on port 3000 at localhost ( http://localhost:3000/ ) or 127.0.0.1 ( http://127.0.0.1:3000/ ) and the server will print out 'Server initiated on port 3000' after being initialized.

## Step 4
### Summary
In this step we will start our server. If everything intializes correctly you should see a log in your terminal `'Server inititated on port 3000'`. If you are seeing errors with `const` check to make sure that your node version is +7.5.0.

* Check node version: In your terminal use the command `node --version`
* Download node: https://nodejs.org/en/download/
### Instructions
In your terminal, make sure you are in the server directory, run `nodemon`.

### Solution
<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/1g.gif" width="800">
</p>

## Step 5
### Summary
Now that we have a working server will can start making endpoints and mutating some data. In this step we will create a global object called `user` that will have some default properties. This will be the object we will modify and read through endpoints we'll create in the following steps.

### Instructions
Let's start by creating an object under `app` called `user`. Let's give it two properties: `username` and `password`. The values can be whatever strings you like.

### Solution
<details>
<summary> index.js </summary>

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user = {
  username: 'dev',
  password: 'mountain'
};

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```
</details>

## Step 6
### Summary
In this step we will create a read enpoint to interact with our global object `user`. In express you can create an endpoint by doing `app.get`, `app.put`, `app.post`, and `app.delete`. `get`, `put`, `post`, and `delete` are known as methods of an HTTP request. Since we want a read endpoint we'll use the get method. Take note that I'm saying `app.*` because our express application was stored in a variable called `app`. If I named it something else like `foo`, then it would be `foo.get`, `foo.put`, `foo.post`, and `foo.delete` instead. 

HTTP Methods:
* Reading - GET
* Updating - PUT
* Deleting - DELETE
* Creating - POST

### Instructions
After our `user` object let's create a get endpoint using `app.get()`. The first parameter is the path of the endpoint and the second parameter is a function we want to be called when that path is hit. Let's do a get at the path of `/user`.

### Solution
<details>
<summary> index.js </summary>

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user = {
  username: 'dev',
  password: 'mountain'
};

// http://localhost:3000/user
app.get('/user', () => {

});

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```
</details>

## Step 7
### Summary
Now that we have an endpoint at `/user` let's have it return the `user` object. The callback function of an endpoint takes two parameters, the first one being a request object and the second one being a response object. The request object has important information about the incoming request and the response object allows us to send a response back. These variables can be named whatever you like but I usually call them `req` and `res`. 

### Instructions
Let's add the two parameters in our callback function and use `res` to send back `user`. We can do this by using the `.send` method on `res`.

### Solution
<details>
<summary> index.js </summary>

```javascript
app.get('/user', (req, res) => {
  res.send(user);
});
```
</details>

## Step 8
### Summary
In this step we will use postman to test that our endpoint is returning our user object.

### Instructions
Make sure that your server is still running and open postman. In postman make sure GET is selected, type in `http://localhost:3000/user`, and press Send.

### Solution
<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/2g-1.gif" width="800">
</p>

What you see returned are the properties that you originally set on the user object.

## Step 9
### Summary
In this step we will create the basic outline of the rest of our endpoints. 

### Instructions
On your own try to make an endpoint that will be used for UPDATING properties on the user object and also and endpoint that will be used for CREATING new properties on the user object. Don't worry about the logic that will go inside the endpoint, but rather how you create endpoints. For example: which method you should use and what parameters does the callback function of an endpoint take.

* Since we are using three different methods we can use the exact same path and our server will be smart enough to call the right function. Oooo magic.

Hint:
```js
app.*('/user', function)
```

### Solution
<details>
<summary> index.js </summary>

```js
// http://localhost:3000/user
app.post('/user', (req, res) => {

});

// http://localhost:3000/user
app.put('/user', (req, res) => {

});
```
</details>

## Step 10
### Summary
In this step will go over how to use query parameters on a request to update already existing properties on the `user` object.


Let's start by visualizing what happens when we send query parameters to our server. In our index.js, let's respond with req.query in our `put` method. Remember we respond using the `.send` method on `res`.
```js
// http://localhost:3000/user
app.put('/user', (req, res) => {
  res.send(req.query);
});
```
Now when we do a PUT request on /user our response will be what `req.query` is. Query parameters are constructed in the requesting URL. For example: `http://localhost:3000/user?username=bob`. The `?` is the special character that defines where our parameters begin. This example is sending a parameter of `username` that is equal to `bob`. Let's see what this will return for us.
<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/3g-1.gif" width="800">
</p>

We now know that req.query is equal to an object. After the special character `?` it looks at the left side of the `=` sign and sets that as the key on an object and looks at the right side of the `=` sign and sets that as the value of the key. You can also send more than one parameter at a time using the special character `&`. For example if I did: `http://localhost:3000/user?username=bob&password=1234` req.query would equal:

```js
{
  username: "bob",
  password: "1234"
}
```

Take note that `"1234"` is a string and not a number. Values will always be stored on req.query as strings.
### Instructions
Knowing that req.query is an object we can check to see if it has a `username` property or a `password` property to update our global `user` object. In our put endpoint lets add two if statements, one for checking if the querry has a `username` property and one for checking if the query has a `password` property. Inside the if statements let's update our global `user` object and then have our endpoint respond with new updated `user` object.

### Solution
<details>
<summary> index.js </summary>

```js
// http://localhost:3000/user
app.put('/user', (req, res) => {
  if ( req.query.username ) {
    user.username = req.query.username;
  }

  if ( req.query.password ) {
    user.password = req.query.password;
  }

  res.send(user);
});
```
</details>
Insert fancy giphy here of postman

## Step 11
### Summary
In this step we'll cover how to use the body of a request to update our global `user` object. Using the body is similar to using the query of a request because they are both objects. However, you send the body as an object alongside the request and we'll use `body-parser` so that we can read the body of the request. 

### Instructions
Let's start by opening up postman and typing in our endpoint path. 

## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright
© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>


