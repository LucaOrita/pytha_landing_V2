import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export default function GA4Provider() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        id="ga-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
            });
          `,
        }}
      />
      <GoogleAnalytics gaId={gaId} />
    </>
  );
}
