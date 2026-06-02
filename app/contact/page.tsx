'use client';

import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import SectionTitle from '@/components/common/SectionTitle';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission with Firebase
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Contact Us" subtitle="We'd love to hear from you!" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">📍 Location</h3>
                  <p className="text-gray-700">
                    [Cafe Raweeya Address]
                    <br />
                    [City, Country]
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">🕐 Hours</h3>
                  <div className="text-gray-700 space-y-1">
                    <p><span className="font-semibold">Monday - Friday:</span> 7:00 AM - 7:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 8:00 AM - 8:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">📞 Contact Info</h3>
                  <div className="text-gray-700 space-y-2">
                    <p>
                      <a href="tel:+1234567890" className="hover:text-amber-900 transition-colors">
                        📱 +1 (234) 567-8900
                      </a>
                    </p>
                    <p>
                      <a href="mailto:hello@caferaweeya.com" className="hover:text-amber-900 transition-colors">
                        ✉️ hello@caferaweeya.com
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">🌐 Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="text-2xl hover:opacity-70">📷</a>
                    <a href="#" className="text-2xl hover:opacity-70">👥</a>
                    <a href="#" className="text-2xl hover:opacity-70">🐦</a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
