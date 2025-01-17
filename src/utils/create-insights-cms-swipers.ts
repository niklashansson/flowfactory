import type { CMSList } from 'src/types/CMSList';
import { Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import { createSwiper } from './create-swiper';

const INSTANCE_QUERY = '[data-swiper-instance="insights-1"]';

export function createInsightsCmsSwipers() {
  window.fsAttributes.cmscombine.init?.();

  window.fsAttributes.push(
    [
      'cmscombine',
      async (listInstances: CMSList[]) => {
        listInstances.forEach((instance) => {
          const instanceEl = instance.wrapper.closest(INSTANCE_QUERY) as unknown as HTMLElement;

          if (instance.wrapper.closest('[data-insights-1-custom=true]')) {
            instanceEl.remove();
            return;
          }

          if (!instanceEl) {
            instance.wrapper.style.display = 'hidden';
            return;
          }

          const swiperEl = instanceEl.querySelector('.swiper') as unknown as HTMLElement;
          if (!swiperEl) return;

          const nextEl = instanceEl.querySelector('.swiper-arrow-next') as unknown as HTMLElement;
          const prevEl = instanceEl.querySelector('.swiper-arrow-prev') as unknown as HTMLElement;

          const options = {
            modules: [Navigation],
            navigation: {
              nextEl,
              prevEl,
            },
          } satisfies SwiperOptions;

          createSwiper(swiperEl, options);

          window.fsAttributes.cmssort.init?.();
        });
      },
    ],
    [
      'cmssort',
      async () => {
        const sortTrigger = document.querySelector(
          '.insights_1_sort-trigger'
        ) as unknown as HTMLAnchorElement;

        if (sortTrigger) sortTrigger.click();
      },
    ]
  );
}
