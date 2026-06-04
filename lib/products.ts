import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';
import { Product } from '@/types/product';

const COLLECTION = 'products';

function toProduct(id: string, data: Record<string, any>): Product {
  return {
    id,
    name: data.name ?? '',
    description: data.description ?? '',
    price: data.price ?? 0,
    category: data.category ?? '',
    image: data.image ?? undefined,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
  };
}

export async function getProducts(): Promise<Product[]> {
  if (!db) return [];
  const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => toProduct(d.id, d.data()));
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  if (!db) return [];
  const q = query(
    collection(db, COLLECTION),
    where('category', '==', categoryId)
  );
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map((d) => toProduct(d.id, d.data()));
  // Sort by createdAt descending in-memory to avoid needing a composite index
  return products.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getProductById(id: string): Promise<Product | null> {
  if (!db) return null;
  const ref = doc(db, COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return toProduct(snapshot.id, snapshot.data());
}

export async function createProduct(
  product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Product> {
  if (!db) throw new Error('Firebase not initialized');
  const now = Timestamp.now();
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...product,
    createdAt: now,
    updatedAt: now,
  });
  return {
    ...product,
    id: docRef.id,
    createdAt: now.toDate(),
    updatedAt: now.toDate(),
  };
}

export async function updateProduct(
  id: string,
  product: Partial<Omit<Product, 'id' | 'createdAt'>>
): Promise<Product | null> {
  if (!db) return null;
  const ref = doc(db, COLLECTION, id);
  const now = Timestamp.now();
  await updateDoc(ref, { ...product, updatedAt: now });
  return getProductById(id);
}

export async function deleteProduct(id: string): Promise<boolean> {
  if (!db) return false;
  const ref = doc(db, COLLECTION, id);
  await deleteDoc(ref);
  return true;
}
