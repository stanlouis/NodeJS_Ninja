const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', (chunk) => {
	console.log('new chunk received:');
	console.log(chunk);
});
