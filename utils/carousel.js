const carousel = (props) => {
	if (!props) return;
	const { container, slides, prev, next } = props;
	if (!container || !slides) return;

	// SELECTORS
	const slidesContainer = document.querySelector(container);
	const allSlides = document.querySelectorAll(slides);
	const prevBtn = document.querySelector(prev);
	const nextBtn = document.querySelector(next);
	const numSlides = allSlides.length;

	// DETERMINE THE LENGTH REQUIRED TO MOVE HORIZONTALLY TO THE NEXT SLIDE
	let slideWidth = allSlides[0].offsetWidth;
	let slideMarginRight = parseInt(getComputedStyle(allSlides[0]).marginRight);
	let moveX = slideWidth + slideMarginRight;

	// CLONE FIRST AND LAST SLIDES AND ADD TO SLIDER
	const firstClone = allSlides[0].cloneNode(true);
	const lastClone = allSlides[numSlides - 1].cloneNode(true);

	firstClone.setAttribute('id', 'first-clone');
	lastClone.setAttribute('id', 'last-clone');

	slidesContainer.appendChild(firstClone);
	slidesContainer.prepend(lastClone);

	const allSlidesIncludeCloned = document.querySelectorAll(slides);
	// SHOW THE FIRST SLIDE
	slidesContainer.style.transform = `translateX(${-moveX}px)`;

	// SET COUNTER AND ADD EVENT LISTENERS TO BUTTON;
	// EACH BUTTON CLICK SHOULD MOVE ALL SLIDES HORIZONTALLY BY MOVEX AMOUNT COUNTER TIMES
	let counter = 1;

	nextBtn
		? nextBtn.addEventListener('click', () => {
				counter++;
				slidesContainer.style.transition =
					'transform 0.5s ease-in-out, opacity 0.2s';
				slidesContainer.style.transform = `translateX(${-(moveX * counter)}px)`;
				if (counter >= allSlidesIncludeCloned.length) counter = numSlides;
		  })
		: null;

	prevBtn
		? prevBtn.addEventListener('click', () => {
				counter--;
				slidesContainer.style.transition =
					'transform 0.5s ease-in-out, opacity 0.2s';
				slidesContainer.style.transform = `translateX(${-(moveX * counter)}px)`;
				if (counter < 0) counter = 0;
		  })
		: null;

	// CHECK FOR FIRSTCLONE AND LASTCLONE AND RESET THE SLIDES ACCORDINGLY
	slidesContainer.addEventListener('transitionend', () => {
		console.log(counter);
		if (allSlidesIncludeCloned[counter].id === 'first-clone') {
			slidesContainer.style.transition = 'none';
			counter = 1;
			slidesContainer.style.transform = `translateX(${-(moveX * counter)}px)`;
		}

		if (allSlidesIncludeCloned[counter].id === 'last-clone') {
			slidesContainer.style.transition = 'none';
			counter = numSlides;
			slidesContainer.style.transform = `translateX(${-(moveX * counter)}px)`;
		}
	});

	// ADJUST THE SLIDER POSITION WHEN THE SLIDER/VIEWPORT IS RESIZED

	window.addEventListener('resize', () => {
		slideWidth = allSlides[0].offsetWidth;
		slideMarginRight = parseInt(getComputedStyle(allSlides[0]).marginRight);
		moveX = slideWidth + slideMarginRight;
		slidesContainer.style.transition = 'none';
		slidesContainer.style.transform = `translateX(${-(moveX * counter)}px)`;
	});
};

export default carousel;
