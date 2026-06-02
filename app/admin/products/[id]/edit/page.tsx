'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import ProductForm from '@/components/admin/ProductForm';
import { getProductById, updateProduct } from '@/lib/products';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loading from '@/components/common/Loading';
import { Product } from '@/types/product';

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProductById(id as string);
      setProduct(data);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      await updateProduct(id as string, data);
      router.push('/admin/products');
    } catch (error) {
      console.error('Error updating product:', error);
    }
    setLoading(false);
  };

  if (loading) return <Loading />;

  if (!product) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <p className="text-red-600">Product not found</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Edit Product</h1>
        <div className="max-w-2xl">
          <ProductForm product={product} onSubmit={handleSubmit} loading={loading} />
        </div>
      </main>
    </div>
  );
}
