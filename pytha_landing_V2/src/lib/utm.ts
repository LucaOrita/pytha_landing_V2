const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtmParams(): void {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  const params: UtmParams = {};
  let hasUtm = false;

  for (const key of UTM_KEYS) {
    const value = url.searchParams.get(key);
    if (value) {
      params[key] = value;
      hasUtm = true;
    }
  }

  if (hasUtm) {
    sessionStorage.setItem('utm_params', JSON.stringify(params));
  }
}

export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function captureLandingPage(): void {
  if (typeof window === 'undefined') return;

  if (!sessionStorage.getItem('landing_page')) {
    sessionStorage.setItem('landing_page', window.location.pathname);
  }
}

export function getLandingPage(): string {
  if (typeof window === 'undefined') return '';
  return sessionStorage.getItem('landing_page') || '';
}
