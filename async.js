'use strict';
// ! Set time out executes code after specified time has passed
setTimeout(() => {
	// * calls a function and forgets about it
	console.log('Runs after 1 sec');
}, 0);
console.log('run immediately');

function checkUpdates() {
	let counter = 0;
	while (counter < 10) {
		console.log(`count => ${counter}`);
		counter++;
	}
}

// setTimeout(checkUpdates, 6000);

// !setInterval
// * calls a function repeatedly
// let updateInterval = setInterval(checkUpdates, 10000);

function StopUpdateChecks() {
	// * stops the execution of the set interval function
	clearInterval(updateInterval);
}

//  ! Promises

function getText(number) {
	return new Promise(function (resolve, reject) {
		// * always use try/ catch syntax when doing this manually
		if (number > 100) {
			// ! do some network access here
			reject('request is taking too much time ');
		}
		// * you can also do even more network access before  returning if everything is successful
		resolve('text as been obtained ');
	});
}

getText(20)
	.then((res) => {
		console.log(res);
	})
	.catch(() => {
		console.log('something terrible occurred');
	});

fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => {
		if (!response.ok) {
			return null;
		}
		let type = response.headers.get('content-type');
		type = type.split(';')[0];
		if (type !== 'application/json') {
			console.log(`TYPE=>${type}`);
			throw new TypeError(`Expected JSON, got ${type}`);
		}
		return response.json();
	})
	.then((data) => {
		// console.log(data);
	})
	.catch((e) => {
		console.error(e);
	});

// ! Promises in parallel
// ? Promise.all() and Promise.allSettled()
const promise1 = new Promise((resolve, _) => {
	resolve(1);
});
const promise2 = new Promise((resolve, _) => {
	resolve(2);
});
const promise3 = new Promise((resolve, reject) => {
	resolve('rejected');
});

// ! reject when one of the promises rejects else return array of resolved values

const promises = Promise.all([promise1, promise2, promise3])
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});

// ! using Promise.allSetlled return an object with the status and value properties

const promises2 = Promise.allSettled([promise1, promise2, promise3])
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});

// ! Async Await expressions
async function HighScore() {
	// * return value of this function become a promise by default
	let response = await fetch('/api/user/profile');
	let profile = await response.json();
	return profile;
}

const url1 = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts';
const urls = [url1, url2];
const promises3 = urls.map((url) => fetch(url));
console.log(promise3, '=> URLS');
async function getResult() {
	for (let promise of promise3) {
		let response = await promise();
		let data = await response.json();
		console.log(data[0]);
	}
}
// getResult();
