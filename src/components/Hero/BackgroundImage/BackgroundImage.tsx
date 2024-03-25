'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

export const BackgroundImage = () => {
  const { theme } = useTheme();

  if (theme === 'light') {
    return (
      <Image
        src="/lightHero.jpeg"
        alt="light-hero"
        height={0}
        width={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    );
  }

  return (
    <Image
      src="/darkHero.jpeg"
      alt="dark-hero"
      height={0}
      width={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  );
};
