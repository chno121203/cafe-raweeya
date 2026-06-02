'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import { getCategories, createCategory, deleteCategory } from '@/lib/categories';
import { Category } from '@/types/category';
import { useEffect, useState } from 'react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  const handleAdd = async () => {
    if (!newCategory.trim()) return;

    setLoading(true);
    const category = await createCategory({ name: newCategory });
    setCategories([...categories, category]);
    setNewCategory('');
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure?')) {
      setLoading(true);
      await deleteCategory(id);
      setCategories(categories.filter((c) => c.id !== id));
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Categories</h1>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Add New Category</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Category name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
            />
            <button
              onClick={handleAdd}
              disabled={loading}
              className="bg-amber-900 text-white px-6 py-2 rounded-lg hover:bg-amber-800 disabled:opacity-50 transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-amber-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{category.name}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(category.id)}
                      disabled={loading}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
