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
In this step we will create a package.json file to allow us to install packages. The package.json is what `npm` uses to handle packages and also to install packages. Without a package.json with the required `name` and `version` field, you woudl not be able to install any packages into your project. 

### Instructions 
Using `npm` ( which comes installed with node ) we can use a pre-defined CLI command called `init` that will interactively create a package.json on for us. In your terminal use `npm init` and press the enter key for every option. This will create a package.json file for us with all the default values.

### Solution
You should now have a file called `package.json` inside the `server` folder:
<details>
<summary> package.json </summary>
<details>
```json
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
</details>


