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

// http://localhost:3000/user/update
app.post('/user/update', (req, res) => {

});

// http://localhost:3000/user/new
app.put('/user/new', (req, res) => {

});

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
