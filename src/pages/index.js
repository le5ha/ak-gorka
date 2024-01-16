import './index.css';
import { Carousel } from '../components/Carousel.js';

const carouselAbout = new Carousel('.carousel__track-about', '.carousel__button-about.carousel__button_type_left', '.carousel__button-about.carousel__button_type_right');
const carouselPlans = new Carousel('.carousel__track-plans', '.carousel__button-plans.carousel__button_type_left', '.carousel__button-plans.carousel__button_type_right');