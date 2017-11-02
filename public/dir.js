const fs = require('fs');

// Blocking code
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// Non-blocking code
// fs.mkdir('stuff', () => {
// 	fs.readFile('readMe.txt', 'utf8', (err, data) => {
// 		fs.writeFile('./stuff/writeMe.txt', data, 'utf8', err => {
// 			if (err) {
// 				throw err;
// 			}
// 			console.log('The file has been saved!');
// 		});
// 	});
// });

// To remove file and delete directory
fs.unlink('./stuff/writeMe.txt', () => {
	fs.rmdir('stuff', (err) => {
		if (err) {
			throw err;
		}
		console.log('The directory has been deleted');
	});
});
