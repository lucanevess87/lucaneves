'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Switch } from '../ui/switch';

export const ToggleMode = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-start gap-2">
      <Switch
        onCheckedChange={(value) => {
          setTheme(value ? 'light' : 'dark');
        }}
      />
      {theme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </div>
  );
};
