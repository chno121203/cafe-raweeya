export default function About() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
          About Cafe Raweeya
        </h2>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Cafe Raweeya is a sanctuary for those who appreciate the art of fresh baking and 
            quality coffee. We believe in keeping our ingredients natural, our process transparent, 
            and our products always fresh.
          </p>

          <p>
            Every loaf of bread is baked daily with traditional techniques and premium ingredients. 
            Our cafe menu offers carefully selected beverages and light fare that complement our 
            artisan bakery perfectly.
          </p>

          <p className="text-amber-900 font-semibold text-xl">
            "Handcrafted with care, served with warmth"
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Quality Ingredients</h3>
            <p className="text-gray-600">
              We source the finest ingredients for every product we create.
            </p>
          </div>

          <div className="p-6">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Fresh Daily</h3>
            <p className="text-gray-600">
              Everything is baked fresh every day, nothing is pre-made or frozen.
            </p>
          </div>

          <div className="p-6">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Warm Hospitality</h3>
            <p className="text-gray-600">
              Every customer is treated like family. We serve with a smile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
