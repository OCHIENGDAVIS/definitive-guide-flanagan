'use strict';

const primes = [1, 2, 3, 4, 5];

function abs(x) {
	if (x > 0) {
		return x;
	} else {
		return x * -1;
	}
}
// console.log(abs(-100));
function sum(array) {
	let sum = 0;
	for (let el of array) {
		sum += el;
	}
	return sum;
}

console.log(sum(primes));

function factorial(n) {
	let product = 1;
	while (n > 1) {
		product *= n;
		n--;
	}
	return product;
}
console.log(factorial(3));

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	distance() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

let p = new Point(2, 3);
console.log(p.distance());

class DefautlMap extends Map {
	constructor(value) {
		super();
		this.value = value;
	}
	get(key) {
		if (this.has(key)) {
			return super.get(key);
		} else {
			return this.value;
		}
	}
}
class Histogram {
	constructor() {
		this.letterCount = new DefautlMap(0);
		this.totalLetters = 0;
	}
	add(text) {
		text = text.replace(/\s/g, '').toUpperCase();
		for (let character of text) {
			let count = this.letterCount.get(character);
			this.letterCount.set(character, count + 1);
			this.totalLetters++;
		}
	}

	toString() {
		let entries = [...this.letterCount];
		entries.sort((a, b) => {
			if (a[1] === b[1]) {
				return a[0] < b[0] ? -1 : 1;
			} else {
				return b[1] - a[1];
			}
		});
	}
}

let str = 'helLLo world';
console.log(str.substring(1, 4));
console.log(str.slice(1, 4));
console.log(str.split(' '));
console.log(str.normalize(), '=> Normal');
console.log(`Hell ${str}`);

let text = 'testing: 1 2  4';
const patern = /\d+/g;
// console.log(patern.test(text));
// console.log(text.search(patern));
// console.log(text.match(patern));
// console.log(text.replace(patern, '#'));
// console.log(text.split(patern));

//symbols
const strname = 'string name ';
const symname = Symbol('simname ');
let o = {};
o[strname] = 1;
o[symname] = 2;

o[Symbol('something')] = 'this is a javascript symbol';
console.log('l'.charAt(0));

let obj = { x: 1, y: { b: null } };
console.log(obj.y.b?.x);
let a;
let index = 0;
try {
	a[index++];
} catch (error) {
	index;
}

let f = null;
let x = 0;
let y;
try {
	y = 4;
	f(x++); // f(x+ 1x++)
} catch (error) {
	console.log(x, 'value of x');
	console.log(y, 'value of y');
}

console.log(obj);
delete obj.x;
console.log(obj);
// the in Operator
let point = { x: 1, y: 2 };
let data = [7, 8, 9];

console.log('0' in point);
console.log('0' in data);
let d = new Date();
console.log(d instanceof Number);
console.log(data instanceof Array);
function abs(x) {
	return x > 0 ? x : -x;
}
console.log(abs(-40));

let name = null || 'james ';
console.log(name);

console.log(obj);
delete obj.y.b;
console.log(obj);
obj.name = 'somehing';
let title = 'name';
console.log(obj);
delete obj[title];
console.log(obj);
let username = undefined;
// if (username === (null || undefined)) {
// 	username = 'John Doe';
// }

// Statements and conditionals

if (!username) {
	username = 'James Maingey';
}
console.log(username);

let count = 10;
while (count >= 0) {
	console.log(count);
	count--;
}

function printArray(a) {
	let len = a.length;
	let i = 0;
	if (len === 0) {
		console.log('Array is empty');
	} else {
		do {
			console.log(a[i]);
		} while (i++ < len);
	}
}

printArray([]);

console.log('Using the for loop');
// for (let count = 1; count < 10; count++) {
// 	console.log(count);
// }

// let i = 0;
// let j = 0;
// let total = 0;
// for (let i = 0, j = 10; i < 10; i++, j--) {
// 	total += i * j;
// 	console.log(total);
// }

// for (;;) {
// 	console.log('cruising forever');
// }

function tail(o) {
	for (; o.next; o = o.next) {}
	return o;
}

str = 'this is the last man standing';
for (let char of str) {
	console.log(char);
}

function sum(arr) {
	let sum = 0;
	for (let el of arr) {
		sum += el;
	}
	return sum;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

o = { x: 1, y: 2, z: 3 };
let keys = '';
for (let key of Object.values(o)) {
	keys += key;
}

console.log(keys);

for (let el in o) {
	console.log(o[el]);
}

for (let [k, v] of Object.entries(o)) {
	console.log(` ${k} => ${v}`);
}

let frequency = {};
for (let letter of 'mississippi') {
	if (frequency[letter]) {
		frequency[letter]++;
	} else {
		frequency[letter] = 1;
	}
}
console.log(frequency);

text = 'Na na na na na na na na Batman!';
let wordSet = new Set(text.split(' '));
let unique = [];
for (let word of wordSet) {
	unique.push(word);
}
// console.log(unique);

let textArr = text.split(' ');
let uniqueSet = [];
textArr.forEach((el) => {
	if (uniqueSet.indexOf(el) === -1) {
		uniqueSet.push(el);
	}
});
console.log(uniqueSet);
for (let el in data) {
	console.log(data[el]);
}
// with (o) {
// 	console.log(y, 'this iis the O');
// }
console.log(o);
p = Object.create(o);
console.log(p);
console.log(p.x);
p.toString = function () {
	return `this is the string value of the object p`;
};
console.log(p.toString());
p.z = 'some value of z';

let unitcircle = { r: 1 };
let c = Object.create(unitcircle);
c.x = 1;
c.y = 1;
console.log(c.r);
c.r = 2;
// console.log(c.r);
// console.log(o);
// console.log('p' in o);
// console.log(o.hasOwnProperty('p'));
// console.log(o.propertyIsEnumerable('z'));
