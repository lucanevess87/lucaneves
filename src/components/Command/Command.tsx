'use client';

import { useEffect, useState } from 'react';

import { scrollToSection } from '@/utils/scrollSection';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleNavigate = (section: string) => {
    scrollToSection(section);
    setOpen(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onClick={() => handleNavigate('hero-section')}>Home</CommandItem>
          <CommandItem onClick={() => handleNavigate('hero-about')}>About</CommandItem>
          <CommandItem onClick={() => handleNavigate('hero-chat')}>Chat</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
