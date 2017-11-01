/***
Method 1
***/
// const counter = arr => `There are ${arr.length} elements in this array`;
//
// const adder = (a, b) => `The sum of the 2 numbers is ${a+b}`;
//
// const pi = Math.PI;
//
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

/***
Method 2
***/
// module.exports.counter = arr => `There are ${arr.length} elements in this array`;
//
// module.exports.adder = (a, b) => `The sum of the 2 numbers is ${a+b}`;
//
// module.exports.pi = Math.PI;

/***
Method 3
***/
const counter = arr => `There are ${arr.length} elements in this array`;

const adder = (a, b) => `The sum of the 2 numbers is ${a+b}`;

const pi = Math.PI;

module.exports = {
	counter,
	adder,
	pi
};
