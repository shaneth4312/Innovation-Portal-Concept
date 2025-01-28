'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider forcedTheme="light" attribute="class">
      {children}
    </NextThemesProvider>
  );
}