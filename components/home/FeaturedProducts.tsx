export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 px-4 bg-amber-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 text-center">
          Our Menus
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Explore our carefully curated selection of baked goods and cafe offerings
        </p>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bakery Menu Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
              <div className="text-6xl">🥐</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Bakery & Pastries</h3>
              <p className="text-gray-700 mb-6">
                Fresh artisan bread, croissants, pastries, and seasonal baked goods made with 
                premium ingredients and traditional baking methods.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ Artisan Bread</li>
                <li>✓ Croissants & Pastries</li>
                <li>✓ Seasonal Specials</li>
                <li>✓ Custom Orders Available</li>
              </ul>
              <a
                href="/menu#bakery"
                className="inline-block w-full text-center px-6 py-2 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
              >
                View Menu
              </a>
            </div>
          </div>

          {/* Cafe Menu Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
              <div className="text-6xl">☕</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Cafe Menu</h3>
              <p className="text-gray-700 mb-6">
                Specialty coffee, tea, and light fare to complement your bakery selection. 
                Perfect for a quick bite or leisurely afternoon.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ Premium Coffee & Espresso</li>
                <li>✓ Specialty Tea Selection</li>
                <li>✓ Light Snacks & Sandwiches</li>
                <li>✓ Beverages & Drinks</li>
              </ul>
              <a
                href="/menu#cafe"
                className="inline-block w-full text-center px-6 py-2 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
