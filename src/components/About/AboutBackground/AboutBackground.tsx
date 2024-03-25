'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

export const AboutBackground = () => {
  const { theme } = useTheme();

  if (theme === 'light') {
    return (
      <Image
        src="/wave-light.svg"
        alt="wave-light"
        height={0}
        width={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    );
  }

  return (
    <Image
      src="/wave2.svg"
      alt="wave-1"
      height={0}
      width={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  );
};
