import { createInsightsCms } from '$utils/create-insights-cms';
import { createInsightsCmsSwipers } from '$utils/create-insights-cms-swipers';
import { createInsightsSwipers } from '$utils/create-insights-swipers';
import { createTestimonialsSwipers } from '$utils/create-testimonials-swipers';
import { initiateFsAttributes } from '$utils/initiate-fs-attributes';

window.Webflow ||= [];
window.Webflow.push(() => {
  initiateFsAttributes();

  createInsightsCmsSwipers();
  createInsightsSwipers();
  createTestimonialsSwipers();
  createInsightsCms();
});
