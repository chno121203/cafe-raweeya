import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  hideDetails?: boolean;
}

export default function ProductCard({ product, hideDetails }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-5xl opacity-60">🍞</div>
        )}
      </div>
      <div className={`p-4 ${hideDetails ? 'pb-5' : ''}`}>
        <h3 className="text-base font-semibold text-amber-900 mb-1 leading-snug">
          {product.name}
        </h3>
        {!hideDetails && (
          <>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
              {product.description || 'No description available.'}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-amber-800 font-bold text-lg">
                ฿{product.price.toLocaleString('th-TH', { minimumFractionDigits: 0 })}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
