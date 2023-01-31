'use strict';

let s = new Set();
let t = new Set([1, 2, 3, 4, 2, 4]);
let unique = new Set('Mississippi');
console.log(unique);
console.log(t.size);
t.add(1); //! has no effect, 1 is already in the set
t.add(10);
t.add(true);
t.add([1, 2, 3, 4]);
t.delete(1);
// t.clear(); // * removes everything from the set
// ! iterating over set values
for (let el of t) {
	console.log(el);
}

// ! Map class In javascript

let m = new Map();
let n = new Map([
	['One', 1],
	['Two', 2],
]);
console.log(m);
console.log(n);

let copy = new Map(n); //! copying one Map to the other using the Map constructor
console.log(copy);

let o = { x: 1, y: 2 };
let p = new Map(Object.entries(o));
console.log(p);
console.log(p.size);
p.set('name', 'Davis ');
console.log(p.get('name'));
p.delete('x');
console.log(p);
// console.log(p.clear());
console.log([...p.keys()]);
console.log(p.values());

// regular expression using the RegExp class

let str = 'Javascript';
let pattern = /script/giu;

console.log(str.search(pattern)); //! returns the first position of the match
console.log('Python'.search(pattern));

// ! replace  performs a search and replace operation

console.log(
	'javascript is a better language but java is also trying, I will go to the Java cafe latter to code some java and javascript script while enjoying the serene java environment '.replace(
		/java/giu,
		function (str) {
			return str.toUpperCase();
		}
	)
);

// ! match () method of the string
str = '1 2 3 4 5 6 7 8 9 are the decimal number system';
let matches = str.match(/\d+/g);
for (let el of matches) {
	console.log(el);
}
let url = /(\w+):\/\/([\w.]+)\/(\S*)/; // * no global (g) flag
let text = 'Visit my blog at http://www.example.com/~davis';
let textMatch = text.match(url);
let fullUrl, protocol, host, path;
if (textMatch !== null) {
	fullUrl = textMatch[0];
	protocol = textMatch[1];
	host = textMatch[2];
	path = textMatch[3];
}
console.log(fullUrl);
console.log(protocol);
console.log(host);
console.log(path);

// ! test method
pattern = /[A-Z]/y;
console.log(pattern.test('something new'));
console.log(pattern.exec('1 2 is crazy H Thing'));
console.log(pattern.lastIndex);

// ! Date and Times

let now = new Date();
console.log(now);
console.log(now.getTime());
console.log(Date.now());
let utcDate = new Date(Date.UTC());
console.log(Date.UTC(2023, 0, 1));

//  ! internationalization (Displaying strings in a user friendly way)
let euros = Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' });
console.log(euros.format(10));

let pounds = Intl.NumberFormat('en', { style: 'currency', currency: 'GBP' });
console.log(pounds.format(200));

// ! URL class

url = new URL('https://example.com:8000/path/name?q=term#fragment');
console.log(url.href);
console.log(url.origin);
console.log(url.protocol);
console.log(url.host);
console.log(url.hostname);
console.log(url.port);
console.log(url.pathname);
console.log(url.search);
console.log(url.hash);

url = new URL('https://example.com');
url.pathname = 'api/search';
url.search = 'q=test';
console.log(url.toString()); // ! the toString() methods build the url string for you

url = new URL('https://example.com');
url.pathname = 'path with spaces';
url.search = 'q=foo#bar';
console.log(url.pathname); // * it will be automatically escaped
console.log(url.href);
