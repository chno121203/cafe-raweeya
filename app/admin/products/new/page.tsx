'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import ProductForm from '@/components/admin/ProductForm';
import { createProduct } from '@/lib/products';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NewProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      await createProduct(data);
      router.push('/admin/products');
    } catch (error) {
      console.error('Error creating product:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Create New Product</h1>
        <div className="max-w-2xl">
          <ProductForm onSubmit={handleSubmit} loading={loading} />
        </div>
      </main>
    </div>
  );
}
