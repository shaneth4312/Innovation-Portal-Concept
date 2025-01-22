'use client';

import { redirect } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { AdminSidebar } from '@/components/admin/sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (!user) {
    redirect('/');
  }

  if (user.role !== 'ADMIN' && user.role !== 'ADM') {
    redirect('/challenges');
  }

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}