'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/products', label: 'Products', icon: '🥐' },
    { href: '/admin/categories', label: 'Categories', icon: '📂' },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-amber-900 text-white p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-8">Admin</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded transition-colors ${
              pathname === item.href
                ? 'bg-amber-800'
                : 'hover:bg-amber-800'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <Link
        href="/"
        className="flex items-center gap-3 px-4 py-2 rounded transition-colors hover:bg-amber-800 mt-8"
      >
        <span>🏠</span>
        <span>Back to Site</span>
      </Link>
    </aside>
  );
}
