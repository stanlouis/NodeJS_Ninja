const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log(`request was made: ${req.url}`);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hey Ninjas!\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
