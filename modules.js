// * Code in here is in strict mode by default and no need of using 'use strict directive'
// ! modularity using function-based closures
const stats = (function () {
	const sum = (x, y) => x + y;
	const square = (x) => x * x;
	function mean(data) {
		return data.reduce(sum) / data.length;
	}
	function standardDev(data) {
		let m = mean(data);
		return Math.sqrt(
			data
				.map((x) => x - m)
				.map(square)
				.reduce(sum) / data.length
		);
	}
	return {
		mean,
		standardDev,
	};
})();

console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.standardDev([1, 3, 5, 7, 9]));

// !automating  closure-based modularity (working mechanism for nodes require() function )
const modules = {};
function require(moduleName) {
	return modules[moduleName];
}

modules['test.js'] = (function () {
	const exports = {};
	const sum = (x, y) => x + y;
	const square = (x) => x * x;
	exports.sum = sum;
	exports.square = square;
	return exports;
})();

// !modules in ES6
