'use client';

import { Code } from 'lucide-react';

import { scrollToSection } from '@/utils/scrollSection';

import { Button } from '../ui/button';

export const Navigation = () => (
  <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between fixed z-50">
    <div className="flex items-center gap-4 w-64">
      <Code className="h-6 w-6" />
      <h1 className="text-lg">Luca Neves</h1>
    </div>

    <div className="flex items-center gap-2">
      <p>Press</p>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>J
      </kbd>
    </div>

    <nav className="flex gap-4 sm:gap-6 w-64">
      <Button
        variant="link"
        className="text-sm font-medium hover:underline underline-offset-4"
        onClick={() => scrollToSection('hero-section')}
      >
        Home
      </Button>
      <Button
        variant="link"
        className="text-sm font-medium hover:underline underline-offset-4"
        onClick={() => scrollToSection('about')}
      >
        About
      </Button>
      <Button
        variant="link"
        className="text-sm font-medium hover:underline underline-offset-4"
        onClick={() => scrollToSection('chat')}
      >
        Chat
      </Button>
    </nav>
  </header>
);
