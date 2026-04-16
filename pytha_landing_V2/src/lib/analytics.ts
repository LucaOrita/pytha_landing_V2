export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, params);
}

export const analytics = {
  formSubmit: (formType: string, page: string) =>
    trackEvent('form_submit', { form_type: formType, page }),

  ctaClick: (label: string, page: string) =>
    trackEvent('cta_click', { label, page }),

  videoPlay: (videoName: string, page: string) =>
    trackEvent('video_play', { video_name: videoName, page }),
};
