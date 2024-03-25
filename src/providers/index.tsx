import React, { ReactNode } from 'react';

import { Toaster } from '@/components/ui/toaster';

import ReactQueryProvider from './react-query';
import { ThemeProvider } from './theme-provider';

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
    <ReactQueryProvider>
      {children}
      <Toaster />
    </ReactQueryProvider>
  </ThemeProvider>
);
