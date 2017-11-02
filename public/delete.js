const fs = require('fs');

fs.unlink('./writeMe.txt', (err) => {
	if (err){
		throw err;
	}
	console.log('successfully deleted writeMe.txt');
});
