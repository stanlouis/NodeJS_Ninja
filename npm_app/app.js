const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('This is the homepage')
});

app.get('/contact', (req, res) => {
	res.send('This is the contact page')
})

app.listen(3000);
