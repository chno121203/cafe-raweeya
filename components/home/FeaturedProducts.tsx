'use client';

import { useState, useEffect, useRef } from 'react';
import { getProducts } from '@/lib/products';
import { Product } from '@/types/product';
import ProductCard from '@/components/products/ProductCard';
import Link from 'next/link';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        // Show up to 10 latest products in the featured slider
        setProducts(data.slice(0, 10));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToDot = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    if (maxScrollLeft <= 0) return;

    let targetScroll = 0;
    if (index === 1) {
      targetScroll = maxScrollLeft / 2;
    } else if (index === 2) {
      targetScroll = maxScrollLeft;
    }

    slider.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveIndex(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      if (maxScrollLeft <= 0) return;

      const percentage = scrollLeft / maxScrollLeft;
      if (percentage < 0.25) {
        setActiveIndex(0);
      } else if (percentage < 0.75) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [products]);

  return (
    <section className="py-16 md:py-24 px-4 bg-amber-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Menus
          </h2>
          <p className="text-gray-700 text-lg font-sans max-w-2xl">
            Explore our carefully curated selection of baked goods and cafe offerings. Freshly made every day.
          </p>
        </div>

        {/* Slider Container */}
        {loading ? (
          <div className="flex gap-6 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] bg-gray-200/60 rounded-xl h-[340px] animate-pulse shrink-0" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-amber-100">
            <p className="text-amber-800 text-lg">No products available yet. Check back soon!</p>
          </div>
        ) : (
          <>
            <div 
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-4 -mt-4 px-2 -mx-2 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {products.map((product) => (
                <div key={product.id} className="min-w-[280px] md:min-w-[320px] max-w-[320px] shrink-0 snap-start">
                  <ProductCard product={product} hideDetails={true} />
                </div>
              ))}
            </div>

            {/* Pagination Dots (3 dots) */}
            <div className="flex justify-center items-center gap-2.5 mt-2 mb-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => scrollToDot(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-950 ${
                    activeIndex === index 
                      ? 'w-6 h-2.5 bg-amber-900' 
                      : 'w-2.5 h-2.5 bg-amber-200 hover:bg-amber-300'
                  }`}
                  aria-label={`Go to slide page ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="mt-6 text-center">
          <Link
            href="/menu"
            className="inline-block px-10 py-3.5 bg-amber-900 text-white rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
