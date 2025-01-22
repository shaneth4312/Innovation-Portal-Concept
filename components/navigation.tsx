'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth-context';

export function Navigation() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isAdmin = user?.role === 'ADMIN' || user?.role === 'ADM';

  const handleLogout = async () => {
    console.log('Handling logout click');
    try {
      await logout();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          HMGCC
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {isAdmin ? (
              <NavigationMenuItem>
                <Link href="/admin" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname.startsWith('/admin') && 'text-primary'
                    )}
                  >
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <Link href="/challenges" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === '/challenges' && 'text-primary'
                    )}
                  >
                    Challenges
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button variant="ghost" onClick={handleLogout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}