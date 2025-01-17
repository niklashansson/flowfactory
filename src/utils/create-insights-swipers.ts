import { Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import { createSwiper } from './create-swiper';

const INSTANCE_QUERY = '[data-swiper-instance="insights-1"]';

export function createInsightsSwipers() {
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
      navigation: {
        nextEl,
        prevEl,
      },
    } satisfies SwiperOptions;

    createSwiper(swiperEl, options);
  });
}
