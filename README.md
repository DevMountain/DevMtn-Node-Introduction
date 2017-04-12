<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

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

We now have a server, that when started, will listen on port 3000 at localhost ( http://localhost:3000/ ) or 127.0.0.1 ( http://127.0.0.1:3000/ ) and will print out 'Server initiated on port 3000' after being initialized.


## Step 4
### Summary
In this step we will code our server to serve our index.html file. 
### Instructions
When using express you can server HTML files using middleware and the `static` method of express. To use middleware in express you can do `app.use()`. You can think of middleware as items that will be called before hitting endpoints. The `static` method takes one parameter: being the file(s) location(s) to serve. Let's add a middleware underneath our `app` variable.
### Solution
```js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static( __dirname + '/../' ));

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```
`__dirname + '/../'` means use the current directory of this file ( in our case this would be index.js ) and go up one directory ( which would put us in the same directory as index.html )

## Step 5
### Summary
In this step we will start our server. If everything intializes correctly you should see a log in your terminal `'Server inititated on port 3000'`. If you are seeing errors with `const` check to make sure that your node version is +7.5.0.

* Check node version: In your terminal use the command `node --version`
* Download node: https://nodejs.org/en/download/
### Instructions
In your terminal, make sure you are in the server directory, run `nodemon`.

### Solution
<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/1g.gif" width="800">
<br />
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/5g.gif" width="800">
</p>

## Step 6
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
app.use(express.static( __dirname + '/../' ));

const user = {
  username: 'dev',
  password: 'mountain'
};

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```
</details>

## Step 7
### Summary
In this step we will create two endpoints to interact with our global object `user`. In express you can create an endpoint by doing `app.get`, `app.put`, `app.post`, and `app.delete`. `get`, `put`, `post`, and `delete` are known as methods of an HTTP request. Since we want an update endpoint we'll use the put method. Take note that I'm saying `app.*` because our express application was stored in a variable called `app`. If I named it something else like `foo`, then it would be `foo.get`, `foo.put`, `foo.post`, and `foo.delete` instead. 

HTTP Methods:
* Reading - GET
* Updating - PUT
* Deleting - DELETE
* Creating - POST

### Instructions
After our `user` object let's create two put endpoints using `app.put()`. One will be for updating our `user` object using the request query and the other will be for updating our `user` object using the request body. The first parameter is the path of the endpoint and the second parameter is a function we want to be called when that path is hit. Let's do a put at the path of `/user-query` and another put at the path of `/user-body`.

### Solution
<details>
<summary> index.js </summary>

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static( __dirname + '/../' ));

const user = {
  username: 'dev',
  password: 'mountain'
};

// http://localhost:3000/user-query
app.put('/user-query', () => {

});

// http://localhost:3000/user-body
app.put('/user-body', () => {

});

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```
</details>

## Step 8
### Summary
Now that we have an endpoint at `/user-query` and `/user-body` let's have them return the `user` object in our callback function. The callback function of an endpoint takes two parameters, the first one being a request object and the second one being a response object. The request object has important information about the incoming request and the response object allows us to send a response back. These variables can be named whatever you like but I usually call them `req` and `res`. 

### Instructions
Let's add the two parameters in our callback functions and use `res` to send back `user`. We can do this by using the `.send` method on `res`.

### Solution
<details>
<summary> index.js </summary>

```js
// http://localhost:3000/user-query
app.put('/user-query', (req, res) => {
  res.send(user);
});

// http://localhost:3000/user-body
app.put('/user-body', (req, res) => {
  res.send(user);
});
```
</details>

## Step 9
### Summary
In this step we will use postman to test that our endpoints are returning our `user` object.

### Instructions
Make sure that your server is still running and open postman. In postman make sure PUT is selected, and test both endpoints.
* `http://localhost:3000/user-query`
* `http://localhost:3000/user-body`.

### Solution
<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/2g-1.gif" width="800">
</p>

## Step 10
### Summary
In this step will go over how to use query parameters on a request to update already existing properties on the `user` object.


Let's start by visualizing what happens when we send query parameters to our server. In our index.js, let's respond with `req.query` in our `/user-query` callback function. Remember we respond using the `.send` method on `res`.
```js
// http://localhost:3000/user-query
app.put('/user-query', (req, res) => {
  res.send(req.query);
});
```
Now when we do a PUT request on `/user-query` our response will be what `req.query` is. Query parameters are constructed in the requesting URL. For example: `http://localhost:3000/user-query?username=bob`. The `?` is the special character that defines where our parameters begin. This example is sending a parameter of `username` that is equal to `bob`. Let's see what this will return for us.
<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/3g-2.gif" width="800">
</p>

We now know that req.query is equal to an object. After the special character `?` it looks at the left side of the `=` sign and sets that as the key on an object and looks at the right side of the `=` sign and sets that as the value of the key. You can also send more than one parameter at a time using the special character `&`. For example if I did: `http://localhost:3000/user-query?username=bob&password=1234` req.query would equal:

```js
{
  username: "bob",
  password: "1234"
}
```

Take note that `"1234"` is a string and not a number. Values will always be stored on req.query as strings.
### Instructions
Knowing that `req.query` is an object we can check to see if it has a `username` property or a `password` property to update our global `user` object. In our `/user-query` endpoint lets add two if statements, one for checking if the query has a `username` property and one for checking if the query has a `password` property. Inside the if statements let's update our global `user` object and then have our endpoint respond with new updated `user` object.

### Solution
<details>
<summary> index.js </summary>

```js
// http://localhost:3000/user-query
app.put('/user-query', (req, res) => {
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
<br />

<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/4g.gif" width="800">
</p>

## Step 11
### Summary
In this step we'll cover how to use the body of a request to update our global `user` object. Using the body is similar to using the query of a request because they are both objects. However, you send the body as an object alongside the request and we'll use our `body-parser` package so that we can read the body of the request. 

### Instructions
Let's start by adding middleware to use our `body-parser` package.

```js
app.use(bodyParser.json());
```

Now when a request comes with JSON we can read it by using `req.body`. Then the logic is the same as looking at `req.query`, if it has a username update the `user`'s username and if it has a password update `user`'s password.


In the `/user-body` endpoint let's add the logic to update our `user` object. Then test your endpoint with postman.
### Solution
<details>
<summary> index.js </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static( __dirname + '/../' ));
app.use(bodyParser.json());

const user = {
  username: 'dev',
  password: 'mountain',
};

// http://localhost:3000/user-query
app.put('/user-query', (req, res) => {
  if ( req.query.username ) {
    user.username = req.query.username;
  }

  if ( req.query.password ) {
    user.password = req.query.password;
  }

  res.send(user);
});

// http://localhost:3000/user-body
app.put('/user-body', (req, res) => {
  if ( req.body.username ) {
    user.username = req.body.username;
  }

  if ( req.body.password ) {
    user.password = req.body.password;
  }

  res.send(user);
});

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
```
</details>
<br />

<p align="center">
<img src="https://github.com/devlemire/DevMtn-Node-Introduction/blob/solution/readme/6g.gif" width="800">
</p>



## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright
© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>


