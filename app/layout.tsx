import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Navigation } from '@/components/navigation';
import { AuthProvider } from '@/contexts/auth-context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HMGCC',
  description: 'Submit and manage innovation challenges',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navigation />
            <main className="min-h-screen bg-background">
              {children}
            </main>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}