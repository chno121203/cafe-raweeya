export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-4">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-orange-50 to-amber-100"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* Cafe Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4">
          Cafe Raweeya
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-amber-800 mb-8 font-light">
          Freshly Baked, Carefully Crafted
        </p>

        {/* Subtitle */}
        <p className="text-lg text-amber-700 mb-12 max-w-2xl mx-auto">
          Experience the warmth of authentic bakery and cafe culture. From artisan bread to specialty coffee.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-3 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
          >
            Browse Menu
          </a>
          <a
            href="#location"
            className="px-8 py-3 border-2 border-amber-900 text-amber-900 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-amber-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
