'use strict';

let base = {
	name: 'base object',
	talk: function () {
		console.log(`Hell am ${this.name}`);
	},
};
let o = Object.create(base);

o.x = 1;
o.y = 2;
o.z = 3;
console.log(o.propertyIsEnumerable('toString'));
for (let p in o) {
	if (!o.hasOwnProperty(p)) {
		continue;
	}
	if (typeof o[p] === 'function') continue;
	console.log(p);
}

console.log(Reflect.ownKeys(o));
console.log(JSON.stringify(o));

let o2 = Object.assign(base, {});
console.log(o2);

function merge(target, ...sources) {
	for (let source of sources) {
		for (let key of Object.keys(source)) {
			if (!(key in target)) {
				target[key] = source[key];
			}
		}
	}
	return target;
}

console.log(Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }));
console.log(merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }));
let erro = new Error('somthing occured');
console.log(JSON.stringify(erro));

let point = {
	x: 3,
	y: 4,
	toString: function () {
		return String(`(${this.x}, ${this.y})`);
	},
	valueOf: function () {
		return Math.hypot(this.x, this.y);
	},
	toJSON: function () {
		return ` 'x': '${this.x}, 'y': '${this.y}' `;
	},
};

console.log(point.toString());
console.log(Number(point));
console.log(JSON.stringify(point));

const PROPERTY_NAME = 'pi';
function computePropertyName() {
	return 'pi' + 2;
}
let p = {
	[PROPERTY_NAME]: 1,
	[computePropertyName()]: 2,
};
console.log(p);

let extension = Symbol('new fature');
o[extension] = 1;
console.log(o);
o[Symbol('new')] = 'this is another symbol';
console.log(o[Symbol('new')]);

let position = { x: 0, y: 1 };
let dimensions = {
	width: 100,
	height: 300,
};
let rect = { ...position, ...dimensions };
console.log(rect);

let square = {
	side: 10,
	area() {
		return this.side * this.side;
	},
};

console.log(square.area());

const METHOD_NAME = 'm';
const symbol = Symbol();
let wieiredMethods = {
	'methods with spaces'(x) {
		return x + 1;
	},
	[METHOD_NAME](x) {
		return x + 2;
	},
	[symbol](x) {
		return x + 3;
	},
};

console.log(wieiredMethods['methods with spaces'](1));
console.log(wieiredMethods[METHOD_NAME](1));
console.log(wieiredMethods[symbol](1));
o = {
	data: 'somevalue',
	get accessorProp() {
		return this.data;
	},
	set accessorProp(value) {
		this.data = value;
	},
};

console.log(o.accessorProp);
o.accessorProp = 'value changed';
console.log(o.accessorProp);
