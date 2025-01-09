import type { CMSList } from 'src/types/CMSList';
import Swiper from 'swiper';

const INSTANCE_QUERY = '[data-swiper-instance="insights-1"]';

export function createInsight1Swipers() {
  window.fsAttributes.cmscombine.init?.();

  window.fsAttributes.push(
    [
      'cmscombine',
      async (listInstances: CMSList[]) => {
        listInstances.forEach((instance) => {
          const instanceEl = instance.wrapper.closest(INSTANCE_QUERY) as unknown as HTMLElement;

          if (!instanceEl) {
            instance.wrapper.style.display = 'hidden';
            return;
          }
          createInsight1Swiper(instanceEl);

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

function createInsight1Swiper(instanceElement: HTMLElement) {
  const swiperEl = instanceElement.querySelector('.swiper') as unknown as HTMLElement;
  if (!swiperEl) {
    // eslint-disable-next-line no-console
    console.warn(`No swiper element found in ${INSTANCE_QUERY} instance`);
    return;
  }

  const swiper = new Swiper(swiperEl, {
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
  });

  return swiper;
}
