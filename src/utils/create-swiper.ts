import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';

const defaultOptions = {
  slidesPerView: 1.25,
  spaceBetween: 24,
  speed: 500,
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  breakpoints: {
    // when window width is >= 479px
    479: {
      slidesPerView: 1.25,
      spaceBetween: 24,
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 2.25,
      spaceBetween: 24,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
} satisfies SwiperOptions;

export function createSwiper(swiperEl: HTMLElement, options?: SwiperOptions) {
  const swiper = new Swiper(swiperEl, {
    ...defaultOptions,
    ...options,
  });
  return swiper;
}
