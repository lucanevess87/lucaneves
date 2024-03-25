import Link from 'next/link';

import { AboutSection } from '@/components/About';
import { ChatSection } from '@/components/Chat';
import { HeroSection } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ChatSection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
