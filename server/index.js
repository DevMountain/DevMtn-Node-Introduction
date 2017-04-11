var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var user = {
	username: 'dev',
	password: 'mountain',
	email: 'dev@mountain.com'
};

app.listen(3000, function() { console.log('Server intiated on port 3000'); });