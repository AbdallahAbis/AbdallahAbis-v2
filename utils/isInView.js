export default function AnimateInView() {
	const elements = document.querySelectorAll('[data-animate]');

	function isInView() {
		elements.forEach((el) => {
			const rect = el.getBoundingClientRect();
			const windowHeight =
				window.innerHeight || document.documentElement.clientHeight;
			const windowWidth =
				window.innerWidth || document.documentElement.clientWidth;

			const vertInView =
				(rect.top <= windowHeight - rect.height / 2 ||
					rect.top <= windowHeight - 100) &&
				rect.top + rect.height >= 0;
			const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
			if (vertInView && horInView) {
				el.classList.add('animate');
			}
		});
	}

	document.addEventListener('scroll', isInView, {
		passive: true,
	});

	isInView();
}
