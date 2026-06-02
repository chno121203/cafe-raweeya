'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import { useState, useEffect } from 'react';
import { getProducts } from '@/lib/products';
import { getCategories } from '@/lib/categories';

export default function AdminPage() {
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      const categories = await getCategories();
      setProductCount(products.length);
      setCategoryCount(categories.length);
    };
    loadData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Products</h3>
            <p className="text-4xl font-bold text-amber-900">{productCount}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Categories</h3>
            <p className="text-4xl font-bold text-amber-900">{categoryCount}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Status</h3>
            <p className="text-2xl text-green-600 font-semibold">✓ Active</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <a
              href="/admin/products"
              className="block text-amber-900 hover:text-amber-700 font-medium"
            >
              → Manage Products
            </a>
            <a
              href="/admin/categories"
              className="block text-amber-900 hover:text-amber-700 font-medium"
            >
              → Manage Categories
            </a>
            <a
              href="/admin/settings"
              className="block text-amber-900 hover:text-amber-700 font-medium"
            >
              → Site Settings
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
