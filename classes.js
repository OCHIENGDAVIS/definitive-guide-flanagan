'use strict';

// ! Traditional way of creating javascript classes. Shows what is happening under the hood

range.methods = {
	includes(x) {
		return this.from <= x && x <= this.to;
	},
	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++) {
			yield x;
		}
	},
	toString() {
		return `( ${this.from} ... ${this.to})`;
	},
};
// this acts a a factory class to create the class nd return it
function range(from, to) {
	let r = Object.create(range.methods);
	r.from = from;
	r.to = to;
	return r;
}

let r = range(1, 10);
console.log(r);
console.log(r.includes(2));
console.log(r.toString());

// * possible to spread r because of the iterator
console.log([...r]);

// * using the defined iterator with a for loop
for (let el of r) {
	console.log(el);
}

// ! Creating the range class using the constructor method

function Range(from, to) {
	this.to = to;
	this.from = from;
}
Range.prototype = {
	includes(x) {
		return this.from <= x && x <= this.to;
	},
	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++) {
			yield x;
		}
	},
	toString() {
		return `( ${this.from} ... ${this.to})`;
	},
};

// ! creating the actual object
r = new Range(10, 20);
console.log(r.includes(15));
console.log(r.toString());
console.log([...r]);

// ! using the class keyword

class Range1 {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
	includes(x) {
		return this.from <= x && x <= this.to;
	}
	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++) {
			yield x;
		}
	}
	toString() {
		return `( ${this.from} ... ${this.to})`;
	}
}

r = new Range1(1, 3);
console.log(r.includes(5));

// ! sub-classing when using the class keyword

class Span extends Range1 {
	constructor(start, length) {
		if (length >= 0) {
			super(start, start + length);
		} else {
			super(start + length, start);
		}
	}
}

// ! public and private fields

// ? this is how its been done
class Buffer {
	constructor() {
		this.size = 0;
		this.capacity = 4096;
	}
}
const b1 = new Buffer();
console.log(b1.size);

// * new Proposed way

class Buffer2 {
	size = 10;
	capacity = 4096;
}
const b2 = new Buffer2();
console.log(b2.size);
console.log(b2.capacity);

// ! Private instance fields proposal

class Buffer3 {
	#size = 20;
	capacity = 1024;
	get size() {
		return this.#size; // ! only accessible within the class
	}
}
const b3 = new Buffer3();
console.log(b3.size);

// ! static field proposal
class Buffer4 {
	static #staticFiled = 'super static '; //* attached to the class (constructor) and not the instances its also private

	processStatic() {
		return Buffer4.#staticFiled;
	}
}

const b4 = new Buffer4();
console.log(b4.processStatic());

// ! Example of inheritance and the extends key word

class TypedMap extends Map {
	constructor(keyType, valueType, entries) {
		if (entries) {
			for (let [k, v] of entries) {
				if (typeof k !== keyType || typeof v !== valueType) {
					throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
				}
			}
		}
		super(entries);
		this.keyType = keyType;
		this.valueType = valueType;
	}

	set(key, value) {
		if (this.keyType && typeof key !== this.keyType) {
			throw new TypeError(`${key} is not of type ${this.keyType}`);
		}
		if (this.valueType && typeof value !== value) {
			throw new TypeError(`${value} is not of type ${this.valueType}`);
		}
		return super.set(key, value);
	}
}

// ! inheritance versus Delegation

class Histogram {
	constructor() {
		this.map = new Map();
	}
	count(key) {
		return this.map.get(key) || 0;
	}
	has(key) {
		return this.count(key) > 0;
	}
	get size() {
		return this.map.size;
	}

	add(key) {
		this.map.set(key, this.count(key) + 1);
	}

	delete(key) {
		let count = this.count(key);
		if (count === 1) {
			this.map.delete(key);
		} else if (count > 1) {
			this.map.set(key, count - 1);
		}
	}

	[Symbol.iterator]() {
		return this.map.keys();
	}
	keys() {
		return this.map.keys();
	}
	values() {
		return this.map.values();
	}
	entries() {
		return this.map.entries();
	}
}

// * Abstract method
class AbstractSet {
	// * Abstract method
	has() {
		throw new Error('Abstract method, provide implementation ');
	}
}

class NotSet extends AbstractSet {
	constructor(set) {
		super();
		this.set = set;
	}
	// ? concrete implementation of the has() method from the abstract superclass
	has(x) {
		return !this.set.has(x);
	}

	toString() {
		return `x | x member of ${this.set.toString()}`;
	}
}

class Range2 extends AbstractSet {
	constructor(from, to) {
		super();
		this.from = from;
		this.to = to;
	}
	has(x) {
		return x >= this.from && x <= this.to;
	}
	toString() {
		return ` x| ${this.from} <= x <= ${this.to}`;
	}
}

class AbstractEnumerableSet extends AbstractSet {
	get size() {
		throw new Error('Abstract method, provide your implementation ');
	}

	[Symbol.iterator]() {
		throw new Error('Ebstract method, provide your implementation ');
	}
	isEmpty() {
		return this.size === 0;
	}
	toString() {
		return `${Array.from(this).join(', ')}`;
	}

	equals() {
		if (!(set instanceof AbstractEnumerableSet)) {
			return false;
		}
		if (this.size !== set.size) {
			return false;
		}
		for (let element of this) {
			if (!set.has(element)) {
				return false;
			}
		}
		return true;
	}
}

// ! concrete subclass of the AbstractEnumerableSet

class SingletonSet extends AbstractEnumerableSet {
	constructor(member) {
		super();
		this.member = member;
	}

	has(x) {
		return x === this.member;
	}
	get size() {
		return 1;
	}
	*[Symbol.iterator]() {
		yield this.member;
	}
}
