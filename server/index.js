const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user = {
	username: 'dev',
	password: 'mountain',
	email: 'dev@mountain.com'
};

// http://localhost:3000/user
app.get('/user', (req, res) => {
	res.send(user);
});

// http://localhost:3000/user
app.put('/user', (req, res) => {
  var keys = Object.keys(req.query);

  for ( var i = 0; i < keys.length; i++ ) {
    if ( user.hasOwnProperty(keys[i]) ) {
      user[keys[i]] = req.query[keys[i]]
    }
  }

  res.send(user);
});

// http://localhost:3000/user
app.post('/user', (req, res) => {

});

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
