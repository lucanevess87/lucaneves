'use client';

import { motion } from 'framer-motion';
import { Mouse, SunMoon } from 'lucide-react';
import { useState } from 'react';

import { ToggleMode } from '@/components/ToggleMode';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollSection';

export const FloatingNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="backdrop-filter backdrop-blur-lg border self-center my-10 fixed z-99 bottom-0 flex items-center justify-center rounded-full px-6 py-1.5"
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {open ? (
        <div className="flex items-center">
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
          <ToggleMode />
        </div>
      ) : (
        <div className="flex items-center gap-6 p-1.5">
          <Mouse className="w-5 h-5" />
          <SunMoon className="w-5 h-5" />
        </div>
      )}
    </motion.div>
  );
};
