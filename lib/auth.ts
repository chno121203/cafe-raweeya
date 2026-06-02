// Authentication utilities
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

export async function checkAuthStatus(): Promise<boolean> {
  return new Promise((resolve) => {
    if (!auth) {
      resolve(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(!!user);
    });
  });
}

export async function loginUser(email: string, password: string): Promise<boolean> {
  try {
    if (!auth) {
      throw new Error('Firebase not initialized');
    }
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful:', result.user.email);
    return true;
  } catch (error: any) {
    console.error('Login error:', error.message);
    throw error;
  }
}

export async function logoutUser(): Promise<void> {
  try {
    if (!auth) {
      throw new Error('Firebase not initialized');
    }
    await signOut(auth);
    console.log('Logout successful');
  } catch (error: any) {
    console.error('Logout error:', error.message);
    throw error;
  }
}

export async function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve) => {
    if (!auth) {
      resolve(null);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}
