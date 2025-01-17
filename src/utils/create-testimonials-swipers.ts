import { Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import { createSwiper } from './create-swiper';

const INSTANCE_QUERY = '[data-swiper-instance="testimonials-1"]';

export function createTestimonialsSwipers() {
  const instances = document.querySelectorAll(INSTANCE_QUERY) as unknown as HTMLElement[];
  if (!instances || instances.length <= 0) return;

  instances.forEach((instance) => {
    const swiperEl = instance.querySelector('.swiper') as unknown as HTMLElement;
    if (!swiperEl) {
      instance.style.display = 'hidden';
      return;
    }

    const nextEl = instance.querySelector('.swiper-arrow-next') as unknown as HTMLElement;
    const prevEl = instance.querySelector('.swiper-arrow-prev') as unknown as HTMLElement;

    const options = {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 64,
      centeredSlides: true,
      breakpoints: {
        // when window width is >= 479px
        479: {
          slidesPerView: 1,
          spaceBetween: 64,
        },
        // when window width is >= 767px
        767: {
          slidesPerView: 1,
          spaceBetween: 64,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 1,
          spaceBetween: 64,
        },
      },
      navigation: {
        nextEl,
        prevEl,
      },
    } satisfies SwiperOptions;

    createSwiper(swiperEl, options);
  });
}
