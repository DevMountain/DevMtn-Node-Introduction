const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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
  res.send(user);
});

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
