import { Product } from '@/types/product';

// Mock products data - replace with Firebase queries
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Artisan Sourdough',
    description: 'Traditional sourdough bread with a crispy crust and soft interior',
    price: 4.99,
    category: 'bakery',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Croissant',
    description: 'Buttery and flaky French croissant',
    price: 3.50,
    category: 'pastries',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function getProducts(): Promise<Product[]> {
  // TODO: Replace with Firebase query
  return mockProducts;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  // TODO: Replace with Firebase query
  return mockProducts.filter((p) => p.category === category);
}

export async function getProductById(id: string): Promise<Product | null> {
  // TODO: Replace with Firebase query
  return mockProducts.find((p) => p.id === id) || null;
}

export async function createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
  // TODO: Replace with Firebase write
  const newProduct: Product = {
    ...product,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return newProduct;
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<Product | null> {
  // TODO: Replace with Firebase update
  const index = mockProducts.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updated = { ...mockProducts[index], ...product, updatedAt: new Date() };
  mockProducts[index] = updated;
  return updated;
}

export async function deleteProduct(id: string): Promise<boolean> {
  // TODO: Replace with Firebase delete
  const index = mockProducts.findIndex((p) => p.id === id);
  if (index === -1) return false;

  mockProducts.splice(index, 1);
  return true;
}
