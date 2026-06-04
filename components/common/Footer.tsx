export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-amber-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">Cafe Raweeya</h4>
            <p className="text-amber-100 text-sm font-sans">
              Handcrafted with care, served with warmth. Experience the art of fresh baking and quality coffee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a href="/menu" className="text-amber-100 hover:text-white transition-colors">
                  Menus
                </a>
              </li>
              <li>
                <a href="#location" className="text-amber-100 hover:text-white transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="/about" className="text-amber-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-amber-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 font-sans">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-900 hover:bg-amber-800 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-900 hover:bg-amber-800 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                👥
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-900 hover:bg-amber-800 flex items-center justify-center transition-colors"
                title="Twitter"
              >
                🐦
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-amber-100">
          <p className="font-sans">© {currentYear} Cafe Raweeya. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-sans">
            <a href="#" className="hover:text-amber-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
