'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

type Consent = 'pending' | 'accepted' | 'rejected';

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>('pending');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent');
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored as Consent);
    } else {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setConsent('accepted');
    setVisible(false);
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setConsent('rejected');
    setVisible(false);
  };

  if (!visible || consent !== 'pending') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg md:flex md:items-center md:justify-between md:gap-4 md:px-8">
      <p className="mb-3 text-sm text-gray-600 md:mb-0">
        Folosim cookies pentru a analiza traficul și a îmbunătăți experiența pe site.{' '}
        <a href="/politica-confidentialitate" className="text-[#8a1820] underline">
          Politica de confidențialitate
        </a>
      </p>
      <div className="flex shrink-0 gap-3">
        <Button variant="outline" size="sm" onClick={reject} className="text-xs">
          Refuză
        </Button>
        <Button size="sm" onClick={accept} className="text-xs">
          Accept
        </Button>
      </div>
    </div>
  );
}
