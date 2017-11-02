const fs = require('fs');

// Blocking code (Synchoronous version)
// const readMe = fs.readFileSync('./readMe.txt', 'utf8');
//
// fs.writeFileSync('./writeMe.txt', readMe);

// Non-blocking code (Asynchronously reads)
fs.readFile('./readMe.txt', 'utf8', (err, data) => {
	if (err) {
		throw err;
	}
	fs.writeFile('writeMe.txt', data, 'utf8', err => {
		if (err) {
			throw err;
		}
		console.log('The file has been saved!');
	});
});

console.log('I am not blocked');
