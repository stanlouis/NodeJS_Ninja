

let time = 0;

let timer = setInterval(() => {
	time += 2;
	console.log(`${time} seconds have passed`);
	if (time >= 8) {
		clearInterval(timer);
	}
}, 2000);

console.log(__dirname);
console.log(__filename);
