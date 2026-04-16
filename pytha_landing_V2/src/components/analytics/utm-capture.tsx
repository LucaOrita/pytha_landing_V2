'use client';

import { useEffect } from 'react';

import { captureLandingPage, captureUtmParams } from '@/lib/utm';

export default function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
    captureLandingPage();
  }, []);

  return null;
}
