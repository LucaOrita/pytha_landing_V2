'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white px-4 py-4 shadow-lg">
      <div className="container flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-dacoda-gray text-center text-sm sm:text-left">
          Folosim cookie-uri pentru a îmbunătăți experiența. Prin continuarea
          navigării, ești de acord.{' '}
          <Link
            href="/cookies"
            className="text-dacoda-orange underline underline-offset-2"
          >
            Politică cookies
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="bg-dacoda-orange hover:bg-dacoda-orange-dark shrink-0 rounded-lg px-6 py-2 text-sm font-medium text-white transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
