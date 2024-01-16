export class Carousel {
    constructor(trackSelector, leftButtonSelector, rightButtonSelector) {
        this.slideIndex = 0;
        this.track = document.querySelector(trackSelector);
        this.slides = Array.from(this.track.children);
        this.totalSlides = this.slides.length;

        this.leftButton = document.querySelector(leftButtonSelector);
        this.rightButton = document.querySelector(rightButtonSelector);

        this.leftButton.addEventListener('click', () => this.move(-1));
        this.rightButton.addEventListener('click', () => this.move(1));

        this.startX = 0;
        this.track.addEventListener('touchstart', (e) => this.startSwipe(e));
        this.track.addEventListener('touchmove', (e) => this.moveSwipe(e));
        this.track.addEventListener('touchend', () => this.endSwipe());

        this.updateSlides();
    }
/*
    startSwipe(e) {
        this.startX = e.touches[0].clientX;
    }

    moveSwipe(e) {
        const currentX = e.touches[0].clientX;
        const diffX = this.startX - currentX;

        if (diffX > 0) {
            this.move(1);
        } else if (diffX < 0) {
            this.move(-1);
        }
    }

    endSwipe() {
        this.startX = 0;
    }
*/
    move(n) {
        this.slideIndex += n;
        if (this.slideIndex < 0) {
            this.slideIndex = this.totalSlides - 1;
        } else if (this.slideIndex >= this.totalSlides) {
            this.slideIndex = 0;
        }

        this.updateSlides();
    }

    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.slideIndex ? 'block' : 'none';
        });
    }
}