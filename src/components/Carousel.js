export class Carousel {
    constructor(trackSelector, leftButtonSelector, rightButtonSelector, dotsContainerSelector) {
        this.slideIndex = 0;
        this.track = document.querySelector(trackSelector);
        this.slides = Array.from(this.track.children);
        this.totalSlides = this.slides.length;

        this.leftButton = document.querySelector(leftButtonSelector);
        this.rightButton = document.querySelector(rightButtonSelector);
        this.dotsContainer = document.querySelector(dotsContainerSelector);

        this.leftButton.addEventListener('click', () => {
            this.move(-1);
            this.stopAutoSwipe();
        });
        this.rightButton.addEventListener('click', () => {
            this.move(1);
            this.stopAutoSwipe();
        });
        this.createDots();
        this.updateSlides();
    }

    createDots() {
        this.slides.forEach((_, i) => {
          const dot = document.createElement('div');
          dot.classList.add('carousel__dot');
          if (i === this.slideIndex) {
            dot.classList.add('carousel__dot_type_active');
          }
          dot.addEventListener('click', () => {
            this.moveTo(i);
            this.stopAutoSwipe();
          });
          this.dotsContainer.appendChild(dot);
        });
      }
      
      moveTo(i) {
        this.slideIndex = i;
        this.updateSlides();
      }

    updateSlides() {
        this.slides.forEach((slide, i) => {
          slide.style.display = i === this.slideIndex ? 'block' : 'none';
        });
      
        Array.from(this.dotsContainer.children).forEach((dot, i) => {
          dot.classList.toggle('carousel__dot_type_active', i === this.slideIndex);
          dot.classList.toggle('carousel__dot_type_near', Math.abs(i - this.slideIndex) === 1);
        });
      }

      move(n) {
        this.slideIndex += n;
        if (this.slideIndex > this.slides.length - 1) {
          this.slideIndex = 0;
        }
        if (this.slideIndex < 0) {
          this.slideIndex = this.slides.length - 1;
        }
      
        this.updateSlides();
      }

    startAutoSwipe(interval) {
        this.autoSwipeInterval = setInterval(() => {
            this.move(1);
        }, interval);
    }

    stopAutoSwipe() {
        clearInterval(this.autoSwipeInterval);
    }
}