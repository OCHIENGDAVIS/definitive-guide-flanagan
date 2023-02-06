// ! intersection observer

const hero1 = document.querySelector('#hero1');
const sections = document.querySelectorAll('section');

let options = {
	root: null, // * its the viewport
	threshold: 0, // * how much of the target is intersecting
	rootMargin: '0px', // * works similar to the margin
};

const observer = new IntersectionObserver(calllback, options);
function calllback(entries, observer) {
	let nav = document.querySelector('.header__nav');
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			nav.classList.add('fixed');
		} else {
			nav.classList.remove('fixed');
		}
	});
}

observer.observe(hero1);

document.querySelector('.btn').addEventListener('click', function () {
	document.querySelector('body > div').classList.add('overlay');
	document.querySelector('body').style.overflow = 'hidden';
});

document.querySelector('body > div').addEventListener('click', function () {
	document.querySelector('body > div').classList.remove('overlay');
	document.querySelector('body').style.overflow = 'visible';
});

// ! drop down code

const button = document.querySelector('.dropdown__button');
const content = document.querySelector('.dropdown__content');

button.addEventListener('click', function () {
	content.classList.toggle('show');
});
