import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';
import { Category } from '@/types/category';

const COLLECTION = 'categories';

function toCategory(id: string, data: Record<string, any>): Category {
  return {
    id,
    name: data.name ?? '',
    description: data.description ?? undefined,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
  };
}

export async function getCategories(): Promise<Category[]> {
  if (!db) return [];
  const q = query(collection(db, COLLECTION), orderBy('name', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => toCategory(d.id, d.data()));
}

export async function getCategoryById(id: string): Promise<Category | null> {
  if (!db) return null;
  const ref = doc(db, COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return toCategory(snapshot.id, snapshot.data());
}

export async function createCategory(
  category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Category> {
  if (!db) throw new Error('Firebase not initialized');
  const now = Timestamp.now();
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...category,
    createdAt: now,
    updatedAt: now,
  });
  return {
    ...category,
    id: docRef.id,
    createdAt: now.toDate(),
    updatedAt: now.toDate(),
  };
}

export async function updateCategory(
  id: string,
  category: Partial<Omit<Category, 'id' | 'createdAt'>>
): Promise<Category | null> {
  if (!db) return null;
  const ref = doc(db, COLLECTION, id);
  const now = Timestamp.now();
  await updateDoc(ref, { ...category, updatedAt: now });
  return getCategoryById(id);
}

export async function deleteCategory(id: string): Promise<boolean> {
  if (!db) return false;
  const ref = doc(db, COLLECTION, id);
  await deleteDoc(ref);
  return true;
}
