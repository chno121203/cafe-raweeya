import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import SectionTitle from '@/components/common/SectionTitle';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="About Cafe Raweeya" />

            <div className="space-y-8 text-lg text-gray-700">
              <section>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Story</h3>
                <p>
                  Cafe Raweeya was founded with a simple mission: to bring the warmth of authentic 
                  bakery and cafe culture to our community. What started as a passion project has 
                  blossomed into a beloved gathering place for friends, families, and coffee enthusiasts.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Philosophy</h3>
                <p>
                  We believe in the power of freshly baked goods and quality coffee to bring people 
                  together. Every loaf, pastry, and cup served at Cafe Raweeya is crafted with care, 
                  using only the finest ingredients and time-honored techniques.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Commitment</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">🌾 Quality Ingredients</h4>
                    <p>We source premium ingredients from trusted suppliers who share our values.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">☕ Freshness First</h4>
                    <p>Everything is baked fresh daily. We never compromise on quality for convenience.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">💛 Community Focus</h4>
                    <p>We're not just a cafe; we're a community hub where people feel welcome and valued.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Meet Our Team</h3>
                <p>
                  Our dedicated team of bakers, baristas, and hospitality professionals work tirelessly 
                  to ensure every visit to Cafe Raweeya is memorable. From the master bakers who arrive 
                  before dawn to the baristas perfecting their craft, each team member shares our passion 
                  for excellence.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
