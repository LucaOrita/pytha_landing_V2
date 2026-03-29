'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useSyncExternalStore } from 'react';

import { cn } from '@/lib/utils';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const x = e.clientX;
      const y = e.clientY;

      const nextTheme = theme === 'dark' ? 'light' : 'dark';

      // If browser supports View Transitions, use circular clip-path mask
      if (document.startViewTransition) {
        document.documentElement.style.setProperty('--x', `${x}px`);
        document.documentElement.style.setProperty('--y', `${y}px`);
        document.documentElement.classList.add('theme-transition');

        const transition = document.startViewTransition(() => {
          setTheme(nextTheme);
        });

        transition.finished.then(() => {
          document.documentElement.classList.remove('theme-transition');
        });
      } else {
        setTheme(nextTheme);
      }
    },
    [theme, setTheme],
  );

  if (!mounted) {
    return (
      <button
        className={cn(
          'text-muted-foreground hover:text-foreground inline-flex size-9 cursor-pointer items-center justify-center rounded-md transition-colors',
          className,
        )}
        aria-label="Schimba tema"
      >
        <Sun className="size-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'text-muted-foreground hover:text-foreground inline-flex size-9 cursor-pointer items-center justify-center rounded-md transition-colors',
        className,
      )}
      aria-label={theme === 'dark' ? 'Activeaza modul luminos' : 'Activeaza modul intunecat'}
    >
      {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
