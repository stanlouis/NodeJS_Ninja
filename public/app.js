const events = require('events');

/*
const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (msg) => {
	console.log(msg)
});

myEmitter.emit('someEvent', 'The event was emmited');
*/

// es5 const util = require('util');
// es5 util.inherits(Person, events.EventEmitter);
// es6 use extends to inherits events.EventEmitter. no need to use util.inherits.

class Person extends events.EventEmitter {
	 constructor(name) {
			 super();
			 this.name = name;
	 }
}

const james = new Person('james');
const mary = new Person('mary');
const ryu = new Person('ryu');

const people = [james, mary, ryu];

people.forEach(person => {
	person.on('speak', mssg => console.log(`${person.name} said: ${mssg}`));
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');
