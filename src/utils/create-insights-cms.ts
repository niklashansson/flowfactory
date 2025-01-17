import type { CMSList } from 'src/types/CMSList';

const INSTANCE_QUERY = '[data-insights-element="section"]';

export function createInsightsCms() {
  // 1. See if there are any instances
  const instances = document.querySelectorAll(INSTANCE_QUERY) as unknown as HTMLElement[];
  if (!instances || instances.length <= 0) return;

  // 2. Initiate Finsweet Attribute dependencies
  window.fsAttributes.cmsnest.init?.();

  window.fsAttributes.push([
    'cmsnest',
    async (instances: CMSList[]) => {
      instances.forEach((instance) => {
        const sortTrigger = instance.wrapper.querySelector(
          '.insights_1_sort-trigger'
        ) as unknown as HTMLAnchorElement;

        if (sortTrigger) sortTrigger.click();
      });
    },
  ]);
}
