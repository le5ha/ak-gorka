import './index.css';
import { Carousel } from '../components/Carousel.js';
import { ResponsiveLink } from '../components/ResponsiveLink.js';
import '../utils/analytics.js';
import objectFitImages from 'object-fit-images';

const carouselAbout = new Carousel('.carousel__track-about', '.carousel__button-about.carousel__button_type_left', '.carousel__button-about.carousel__button_type_right', '.carousel__dots-about');
const carouselPlans = new Carousel('.carousel__track-plans', '.carousel__button-plans.carousel__button_type_left', '.carousel__button-plans.carousel__button_type_right', '.carousel__dots-plans');
carouselAbout.startAutoSwipe(3000); // Auto-swipe every 3 seconds
carouselPlans.startAutoSwipe(3000);

new ResponsiveLink('.link__call', 'tel:+79184087741', '#contacts', 600);

window.addEventListener('load', function() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
});

objectFitImages('.cover__image');
