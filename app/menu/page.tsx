'use client';

import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import ProductGrid from '@/components/products/ProductGrid';
import CategoryFilter from '@/components/products/CategoryFilter';
import { getProducts, getProductsByCategory } from '@/lib/products';
import { getCategories } from '@/lib/categories';
import { useEffect } from 'react';
import { Product } from '@/types/product';
import { Category } from '@/types/category';

export default function MenuPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [productsData, categoriesData] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleSelectCategory = async (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setLoading(true);

    if (categoryId) {
      const filtered = await getProductsByCategory(categoryId);
      setProducts(filtered);
    } else {
      const all = await getProducts();
      setProducts(all);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              title="Our Menu"
              subtitle="Explore our full selection of baked goods and cafe offerings"
            />

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />

            <ProductGrid products={products} loading={loading} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
