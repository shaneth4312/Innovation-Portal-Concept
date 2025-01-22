'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin',
  },
  {
    title: 'Applications',
    icon: FileText,
    href: '/admin/applications',
  },
  {
    title: 'Users',
    icon: Users,
    href: '/admin/users',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/admin/settings',
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="w-64 h-screen bg-card border-r flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Admin Portal</h1>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full hover:bg-muted transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}