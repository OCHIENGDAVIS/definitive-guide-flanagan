'use strict';
let arr = [1, , , 3];
console.log(arr.length);
console.log(arr[1]);

let original = [1, 2, 3, 4];
let copy = [...original];
console.log(copy);
let digits = [...'wertyuiopiuytre'];
console.log(digits);
let cp = Array.from('ertyui', (el) => el.toUpperCase());
console.log(cp);

let letters = [...'hellow world'];
let str = '';
for (let letter of letters) {
	str += letter;
}

console.log(str);

let everyother = '';
for (let [index, letter] of letters.entries()) {
	console.log(` ${index} => ${letter}`);
	if (index % 2 === 0) {
		everyother += letter;
	}
}
console.log(everyother);

// it works but I dont know whay it worlks

let table = new Array(10);
for (let i = 0; i < table.length; i++) {
	table[i] = new Array(10);
}
for (let row = 0; row < table.length; row++) {
	for (let col = 0; col < table[row].length; col++) {
		table[row][col] = row * col;
	}
}

console.log(table[2][3]);

// Array methods
let data = [1, 2, 3, 4, 5];
let sum = 0;
data.forEach((value) => {
	sum += value;
	console.log(sum);
});

console.log(data);
console.log(sum);

// data.forEach((value, index, array) => {
// 	array[index] = value + 1;
// });

// console.log(data);

let a = [1, 2, , -1, 3];
console.log(a.map((x) => Math.pow(x, 1 / 2)));
a = [5, 4, , 2, -1];
console.log(a.filter((el) => el < 3));
console.log(a.filter((_, i) => i % 2 === 0));

// find() and findIndex() array methods

console.log(a.findIndex((x) => x === 3));
console.log(a.find((x) => x % 3 === 0));

// every() and some()

console.log(a.every((x) => x > 0));
console.log(a.some((x) => x < 0));

// reduce() and reduceRight()

console.log(
	a.reduce((x, y) => {
		return x + y;
	}, 0)
);
let count = 0;
console.log(
	a.reduce((x, y) => {
		count++;
		return x * y;
	})
);

let b = [1, [2, [3, [4]]]];
console.log(b.flat(4));

// flat() and flatMap()
let phrases = ['hello world', 'the definitive guide'];
// let words = phrases.map((phrase) => phrase.split(' ')).flat();
let words = phrases.flatMap((phrase) => {
	return phrase.split(' ');
});
a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.splice(2, 3));
console.log(a);
delete a[0];
console.log(a);

a = [0, 1, 2, 1, 0];
console.log(a.indexOf(1));
console.log(a.lastIndexOf(1));
a = [33, 4, 1111, 222];
console.log(a.sort());
console.log(a.sort((a, b) => b - a));
console.log(a.join('#'));
