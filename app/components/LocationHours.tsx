export default function LocationHours() {
  return (
    <section id="location" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 text-center">
          Find Us
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Visit us and experience the warmth of Cafe Raweeya
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">📍 Address</h3>
              <p className="text-gray-700 text-lg">
                [Cafe Raweeya Address]
                <br />
                [City, Country]
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">🕐 Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Monday - Friday:</span> 7:00 AM - 7:00 PM
                </p>
                <p>
                  <span className="font-semibold">Saturday:</span> 8:00 AM - 8:00 PM
                </p>
                <p>
                  <span className="font-semibold">Sunday:</span> 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">📞 Contact</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-amber-900 transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hello@caferaweeya.com"
                    className="hover:text-amber-900 transition-colors"
                  >
                    hello@caferaweeya.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-amber-50 rounded-lg overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🗺️</div>
                <p className="text-gray-600 font-semibold">Map Coming Soon</p>
                <p className="text-sm text-gray-500 mt-2">
                  Embed your Google Map or location here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Can't wait to visit? Call us to place an order or reserve a table!
          </p>
          <a
            href="tel:+1234567890"
            className="inline-block px-8 py-3 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
