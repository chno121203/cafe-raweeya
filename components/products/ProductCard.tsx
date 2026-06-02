import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl">🥐</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-amber-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-amber-900 font-bold">${product.price.toFixed(2)}</span>
          <Link
            href={`/menu/${product.id}`}
            className="px-4 py-2 bg-amber-900 text-white rounded text-sm hover:bg-amber-800 transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
