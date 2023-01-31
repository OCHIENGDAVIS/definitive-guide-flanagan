'use strict';
// ! iterators are objects that can be looped over
// *  composed of three objects (iterable object => what you want to iterate over or make to be looped)
// * the iterator objet
// * iterator result object
// * iterator result object

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
	console.log(result.value);
}

class Range {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
	has(x) {
		return x <= this.from && this.to >= x;
	}
	toString() {
		return `${this.from} ... ${this.to}`;
	}

	[Symbol.iterator]() {
		let next = Math.ceil(this.from);
		let last = this.to;
		return {
			// ! the iterator object
			next() {
				return next <= last ? { value: next++ } : { done: true };
			},
			[Symbol.iterator]() {
				// ! making the iterator itself to be iterable
				return this;
			},
		};
	}
}

console.log([...new Range(0, 5)]);

// ! function that returns iterable values

function map(iterable, f) {
	let iterator = iterable[Symbol.iterator]();
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			let v = iterator.next();
			if (v.done) {
				return v;
			} else {
				return {
					value: f(v.value),
				};
			}
		},
	};
}
console.log([...map(new Range(1, 4), (x) => x * x)]);

function words(s) {
	let r = /\s+|$/g;
	r.lastIndex = s.match(/^/).index;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			let start = r.lastIndex;
			if (start < s.length) {
				let match = r.exec(s);
				if (match) {
					return {
						value: s.substring(start, match.index),
					};
				}
			}
			return { done: true };
		},
	};
}

console.log([...words(' abc de ghi! ')]);

// ! generators

function* oneDigitPrimes() {
	yield 2;
	yield 3;
	yield 5;
	yield 7;
}

let primes = oneDigitPrimes();
console.log(primes.next());
console.log(primes.next());
console.log(primes.next());
console.log(primes.next());
console.log(primes.next());
console.log(...oneDigitPrimes());
