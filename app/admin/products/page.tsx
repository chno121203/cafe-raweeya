'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import ProductTable from '@/components/admin/ProductTable';
import { getProducts, deleteProduct } from '@/lib/products';
import { Product } from '@/types/product';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setLoading(true);
      await deleteProduct(id);
      setProducts(products.filter((p) => p.id !== id));
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900">Products</h1>
          <Link
            href="/admin/products/new"
            className="bg-amber-900 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition-colors"
          >
            + Add Product
          </Link>
        </div>

        <ProductTable products={products} onDelete={handleDelete} loading={loading} />
      </main>
    </div>
  );
}
