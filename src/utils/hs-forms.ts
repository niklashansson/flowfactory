const INSTANCE_QUERY = '[data-component-id=hs-form]';

export function createHubSpotForms() {
  const instances = document.querySelectorAll(INSTANCE_QUERY) as unknown as HTMLElement[];
  if (!instances || instances.length <= 0) return;

  for (const instance of instances) {
    createHubSpotForm(instance);
  }
}

function createHubSpotForm(element: HTMLElement) {
  const datasets = ['formId', 'portalId', 'locale', 'cssClass', 'css', 'region'];

  const [formId, portalId, locale, cssClass, css, region] = datasets.map(
    (str) => element.dataset[str]
  );

  if (!formId || !portalId) {
    // eslint-disable-next-line no-console
    console.warn(`HubSpot Form and Portal Ids are required`);
    return;
  }

  const instanceId = crypto.randomUUID();
  element.dataset.hsFormInstanceId = instanceId;

  const targetSelector = `[data-hs-form-instance-id='${instanceId}']`;

  hbspt?.forms.create({
    region,
    portalId,
    formId,
    css,
    cssClass,
    locale,
    target: targetSelector,
  });
}
