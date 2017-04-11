const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user = {
	username: 'dev',
	password: 'mountain',
	email: 'dev@mountain.com'
};

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
