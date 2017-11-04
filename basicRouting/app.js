const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log(`request was made: ${req.url}`);
	if (req.url === '/home' || req.url === '/' || req.url === '/index.html') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
	} else if (req.url === '/contact') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
	} else if (req.url === '/api/ninjas') {
		const ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(ninjas));
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/html');
		fs.createReadStream(__dirname + '/404/404.html', 'utf8').pipe(res);
	}

});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
