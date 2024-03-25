import { Inter as FontSans } from 'next/font/google';

import './globals.css';
import { CommandMenu } from '@/components/Command';
import { FloatingNav } from '@/components/Navigation/FloatingNav/FloatingNav';
import { cn } from '@/lib/utils';
import { Providers } from '@/providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>
          <div className="w-full flex justify-center">
            {children}
            <FloatingNav />
            <CommandMenu />
          </div>
        </Providers>
      </body>
    </html>
  );
}
