import { Category } from '@/types/category';

// Mock categories - replace with Firebase queries
const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Bread',
    description: 'Artisan breads',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Pastries',
    description: 'Sweet pastries',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function getCategories(): Promise<Category[]> {
  // TODO: Replace with Firebase query
  return mockCategories;
}

export async function getCategoryById(id: string): Promise<Category | null> {
  // TODO: Replace with Firebase query
  return mockCategories.find((c) => c.id === id) || null;
}

export async function createCategory(category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category> {
  // TODO: Replace with Firebase write
  const newCategory: Category = {
    ...category,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return newCategory;
}

export async function updateCategory(id: string, category: Partial<Category>): Promise<Category | null> {
  // TODO: Replace with Firebase update
  const index = mockCategories.findIndex((c) => c.id === id);
  if (index === -1) return null;

  const updated = { ...mockCategories[index], ...category, updatedAt: new Date() };
  mockCategories[index] = updated;
  return updated;
}

export async function deleteCategory(id: string): Promise<boolean> {
  // TODO: Replace with Firebase delete
  const index = mockCategories.findIndex((c) => c.id === id);
  if (index === -1) return false;

  mockCategories.splice(index, 1);
  return true;
}
