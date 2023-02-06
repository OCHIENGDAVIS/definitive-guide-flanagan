console.log('Runs after parsing of the html is done');
// ! Dynamically creating and importing a script
function importScript(url) {
	let s = document.createElement('script');
	return new Promise((resolve, reject) => {
		s.onload = function () {
			resolve();
		};
		s.onerror = function () {
			reject(e);
		};
		s.src = url;
		document.head.append(s);
	});
}
// importScript('arrays.js');

// ! the Document Object Model DOM

console.log(window);
console.log(window.document);
console.log(window.fetch);
console.log(window.Math);
console.log(document);
console.log(document.head);
console.log(document.body);

// * document Node class  => Element and Text classes
console.log(window.window);
console.log(window.history);
console.log(window.innerHeight);
console.log(window.innerWidth);
document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM content loaded');
});

document.addEventListener('load', () => {
	console.log('Everything including images have been loaded');
});

console.log(navigator);
console.log(window.navigator.hardwareConcurrency);
console.log(window.screen.width);
console.log(window.screen.height);

Promise.reject('some');

window.addEventListener('unhandledrejection', (e) => {
	console.log(e);
});

// document.addEventListener('mousemove', (e) => {
// 	console.log(this);
// });
// ! Dispatching a custom even

console.log('doing something compute intensive... ');
document.dispatchEvent(new CustomEvent('busy', { detail: true }));
setTimeout(() => {
	document.dispatchEvent(new CustomEvent('busy', { detail: false }));
}, 5000);

document.addEventListener('busy', (e) => {
	if (!e.detail) {
		console.log('Computation is done ');
	}
});

let match = document.querySelector('h1').matches('h1');
console.log(match);

// ! document traversal
const nav = document.querySelector('nav');
console.log(nav);
console.log(nav.parentNode);
console.log(nav.children);
let fchild = nav.firstElementChild;
let lchild = nav.lastElementChild;
console.log(fchild);
console.log(lchild);

function bumbBg(el, clsName) {
	el.classList.add(clsName);
}

function traverse(e, f) {
	f(e, 'white');
	for (let child of e.children) {
		traverse(child, f);
	}
}
let start = document.querySelector('nav');
traverse(start, bumbBg);
console.log(start.hasAttribute('class'));
start.removeAttribute('class');
console.log(start.hasAttribute('class'));

let lis = document.querySelectorAll('.header__nav--item');
for (let li of Array.from(lis)) {
	li.addEventListener('mouseenter', () => {
		li.classList.add('white');
	});
	li.addEventListener('mouseleave', () => {
		li.classList.remove('white');
	});
}
let h1 = document.querySelector('h1');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function (e) {
	h1.textContent = 'Time of the hour';
	h1.classList.add('text-big');
	this.textContent = 'take me back!';
	console.log(this);
});

let position = btn.getBoundingClientRect();
console.log(position);
