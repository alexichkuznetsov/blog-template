// For search form in header
var form = document.querySelector('#header-form');
var inputField = form.querySelector('.search-form__input');

inputField.addEventListener('focus', function(e) {
    form.classList.add('search-form--focus');
});

inputField.addEventListener('blur', function(e) {
    form.classList.remove('search-form--focus');
});

// For slider
var prevBtn = document.querySelector('#prev-button');
var nextBtn = document.querySelector('#next-button');
var slides = document.querySelectorAll('.slide');
var viewport = document.querySelector('.slider__viewport');

function Slider(prev, next, slides, container) {
	this.prevBtn = prev;
	this.nextBtn = next;
	this.slides = [].slice.call(slides);
	this.containerWidth = parseInt(container.offsetWidth);

	this.currentSlideIdx = 0;

	// Set corresponding properties for each slide
	var self = this;
	this.slides.forEach(function(slide, i) {
		slide.style.left = (self.containerWidth * i).toString() + 'px';
	});
}

Slider.prototype.setButtonsEvents = function() {
	this.prevBtn.addEventListener('click', e => {
		if (this.currentSlideIdx > 0) {
			var next = this.currentSlideIdx - 1;
			this.changeSlide(next);
			this.currentSlideIdx = next;
		}
	});

	this.nextBtn.addEventListener('click', e => {
		if (this.currentSlideIdx < this.slides.length - 1) {
			var nextSlideIdx = this.currentSlideIdx + 1;
			this.changeSlide(nextSlideIdx);
			this.currentSlideIdx = nextSlideIdx;
		}
	});
};

Slider.prototype.changeSlide = function(next) {
	for (var i = 0; i < this.slides.length; i++) {
		var diff = i - next,
			slide = this.slides[i];

		slide.style.left = (diff * this.containerWidth).toString() + 'px';
	}
};

Slider.prototype.init = function() {
	this.setButtonsEvents();
};

var s = new Slider(prevBtn, nextBtn, slides, viewport);
s.init();
