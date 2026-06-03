'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Cafe Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-amber-900 flex items-center justify-center bg-white">
              <span className="text-xl font-bold text-amber-900">☕</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-amber-900">Cafe Raweeya</h1>
              <p className="text-xs text-amber-700">Bakery & Cafe</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-sans">
            <Link
              href="/"
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-amber-900 hover:text-amber-700 font-medium transition-colors flex items-center gap-1">
                About Us
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors"
                >
                  Our Story
                </Link>
                <a
                  href="#values"
                  className="block px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors"
                >
                  Our Values
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="text-amber-900 hover:text-amber-700 font-medium transition-colors flex items-center gap-1">
                Menu
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="/menu"
                  className="block px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors"
                >
                  Bakery & Pastries
                </Link>
                <a
                  href="/menu#cafe"
                  className="block px-4 py-2 text-amber-900 hover:bg-amber-50 transition-colors"
                >
                  Cafe Menu
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/admin/login"
              className="text-amber-700 hover:text-amber-900 font-medium transition-colors text-sm"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-amber-200 font-sans">
            <Link
              href="/"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/menu"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/admin/login"
              className="block px-4 py-2 text-amber-700 hover:bg-amber-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
