export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Background with dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-amber-900/80"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl pt-16">
        {/* Cafe Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Cafe Raweeya
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-amber-100 mb-8 font-light tracking-wide drop-shadow-md">
          Freshly Baked, Carefully Crafted
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/menu"
            className="px-8 py-3.5 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-sans"
          >
            Browse Menu
          </a>
          <a
            href="#location"
            className="px-8 py-3.5 border-2 border-amber-400 text-amber-400 rounded-full font-semibold hover:bg-amber-400 hover:text-amber-950 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-sans bg-black/20 backdrop-blur-sm"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white/70"
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
