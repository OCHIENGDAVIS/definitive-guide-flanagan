'use strict';
const f1 = () => {
	console.log(this);
	console.log('value of the this ');
};
function f2() {
	console.log(this);
}
const f3 = function () {
	console.log(this);
};

(function () {
	console.log(!this);
})();

function getPropertyNames(o, a = []) {
	for (let property in o) {
		a.push(property);
	}
	return a;
}

let a = { x: 2, y: 2 };
let p = { z: 4, k: 3 };

console.log(getPropertyNames(p));

function max(first = -Infinity, ...rest) {
	let maxValue = first;
	for (let n of rest) {
		if (n > maxValue) {
			maxValue = n;
		}
	}
	return maxValue;
}

console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));

let numbers = [5, 2, 10, -1, 9, 100, 1];
console.log(...numbers);

function benchmark(n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += i;
	}
	return sum;
}

function timed(f) {
	return function (...args) {
		console.log(`Entering the function ${f.name}`);
		let startTime = Date.now();
		try {
			return f(...args); // 1000000
		} finally {
			console.log(
				`Exiting function ${f.name} after ${Date.now() - startTime}`
			);
		}
	};
}

console.log(timed(benchmark)(1000000));

// likely to cause an error aor should be hidden
function objectLooper(obj) {
	for (let [property, value] of Object.entries(obj)) {
		console.log(`${property} => ${value}`);
	}
}

function wraper(fn, another) {
	return function (...args) {
		// clear up any potential issues before we call the function likely to cause issues
		console.log(`this is the another ${another}`);
		// do soething interesting here before calling the wraped function
		fn(...args);
	};
}

console.log(wraper(objectLooper, 4000)(p));
// console.log(Object.entries(p));

function square(x) {
	// the name here is nothing but a variable that refers to the function object
	return Math.pow(x, 2);
}
let s = square; // a fuction assigned to another functon as a value
console.log(s(2));
// bottom line here is in treating functions as values

function add(x, y) {
	return x + y;
}

function operate(operator, operand1, operand2) {
	return operator(operand1, operand2);
}

console.log(operate(add, 4, 5));

uniqueInterger.couter = 0;
function uniqueInterger() {
	return uniqueInterger.couter++;
}
console.log(uniqueInterger());
console.log(uniqueInterger());
console.log(uniqueInterger());
console.log(uniqueInterger());

// uses properties of itself to store some cache
function factorial(n) {
	if (Number.isInteger(n) && n > 0) {
		if (!(n in factorial)) {
			// taking advantage of the fact that javascript functions are objects
			factorial[n] = n * factorial(n - 1);
		}
		return factorial[n];
	} else {
		return NaN;
	}
}
console.log(factorial[1]); // accessing the property of the factorial function
console.log(factorial(6)); // calculating the actual factorial of 6
// console.log(factorial[5]); // accessing the property of the factorial function

// FUnctionas as namespaces

// Used this function as a namespace
let n = (function n() {
	console.log('this is an immediatley involked function ');
	let name = 'davis';
	function sayMaName() {
		return name;
	}
	return sayMaName();
})();
console.log(n);

function fn1() {
	let name = 'Ochieng'; //variable scope in effect when the function was defined
	function fn2() {
		return name;
	}
	return fn2;
}
console.log(fn1()());

let scope = 'Global scope';

function checkScope() {
	let scope = 'local scope';

	function f() {
		console.log(scope);
	}
	return f;
}

console.log(checkScope()());

uniqueInterger = (function () {
	let couter = 0;
	return function f() {
		return couter++;
	};
})();

console.log(uniqueInterger());
console.log(uniqueInterger());

function counter() {
	let n = 0;
	return {
		count: function () {
			return n++;
		},
		reset: function () {
			n = 0;
			return n;
		},
	};
}
let c = counter(); //every call created a different scope with new variables indepedent of the other
let d = counter(); // every call created a different scope with new variables indepedent of the other
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());

function couter(n) {
	return {
		get count() {
			return n++;
		},
		set count(m) {
			if (m > n) {
				n = m;
			} else {
				throw Error('Count can only be set to a larger value');
			}
		},
	};
}

c = counter(1000);
console.log(c.count());
console.log(c.count());
c.count = 2000;
console.log(c.count);

function f4(y) {
	return this.x + y;
}
a = { x: 10 };
let f4Bound = f4.bind(a);
console.log(f4Bound(10));

// higher order functions

function not(f) {
	return function (...args) {
		let result = f.apply(this, args);
		return !result;
	};
}
const even = (x) => x % 2 == 0;
const odd = not(even);
console.log(odd);

function ppartialLeft(f, ...outerArgs) {
	return function (...innerArgs) {
		let args = [...outerArgs, ...innerArgs];
		return f.apply(this, args);
	};
}

function memoize(f) {
	let cache = new Map();
	return function (...args) {
		let key = args.length + args.join('+');
		if (cache.has(key)) {
			return key;
		} else {
			let result = f.apply(this, args);
			cache.set(key, result);
			return result;
		}
	};
}

let key = [1, 2].toString();

console.log(typeof key);
let o = {
	[[1, 2, 3, 4].toString()]: function () {
		return 'value';
	},
};
console.log(o);
