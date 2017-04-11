const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user = {
	username: 'dev',
	password: 'mountain',
	email: 'dev@mountain.com'
};

app.post('/update', (req, res) => {
	console.log('Update endpoint hit');
	res.status(200).send({});
});

app.listen(3000, () => { console.log('Server initiated on port 3000'); });
