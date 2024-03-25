'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

export const ChatBackground = () => {
  const { theme } = useTheme();

  if (theme === 'light') {
    return <Image alt="map" width={550} height={550} src="/map-light.svg" />;
  }

  return <Image alt="map" width={550} height={550} src="/map.svg" />;
};
