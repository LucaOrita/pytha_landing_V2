'use client';

import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleExitIntent = useCallback(() => {
    if (sessionStorage.getItem('exit_popup_shown')) return;
    sessionStorage.setItem('exit_popup_shown', '1');
    setShow(true);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) handleExitIntent();
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleExitIntent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    console.log('Exit-intent email capture:', email);
    analytics.formSubmit('exit_intent', window.location.pathname);
    setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Închide"
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#fff1f2]">
              <svg className="size-6 text-[#8a1820]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Mulțumim!</h3>
            <p className="mt-2 text-gray-500">Vei primi ghidul pe email în câteva minute.</p>
          </div>
        ) : (
          <>
            <div className="mb-1 text-sm font-medium text-[#8a1820]">Înainte să pleci...</div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              Ghid gratuit: 5 pași pentru digitalizarea atelierului
            </h3>
            <p className="mb-6 text-gray-500">
              Descoperă cum atelierele de mobilă trec de la proiectare manuală la producție automatizată.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email-ul tău"
                required
                className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#8a1820] focus:outline-none focus:ring-2 focus:ring-[#8a1820]/20"
              />
              <Button type="submit" className="shrink-0">
                Descarcă gratuit
              </Button>
            </form>
            <p className="mt-3 text-center text-xs text-gray-400">
              Fără spam. Te poți dezabona oricând.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
