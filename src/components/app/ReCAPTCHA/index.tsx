'use client';
import React, { useRef } from 'react';
import RC from 'react-google-recaptcha';

export const ReCAPTCHA = () => {
  const captchaRef = useRef(null);
  return (
    <RC
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ''}
      size="compact"
      ref={captchaRef}
    />
  );
};
