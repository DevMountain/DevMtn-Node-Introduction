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

app.listen(3000, () => { console.log('Server listening on port 3000'); });
