import { createInsightsCmsSwipers } from '$utils/create-insights-cms-swipers';
import { createInsightsSwipers } from '$utils/create-insights-swipers';
import { createTestimonialsSwipers } from '$utils/create-testimonials-swipers';

window.Webflow ||= [];
window.Webflow.push(() => {
  createInsightsCmsSwipers();
  createInsightsSwipers();
  createTestimonialsSwipers();
});
