'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    cafeName: 'Cafe Raweeya',
    email: 'hello@caferaweeya.com',
    phone: '+1 (234) 567-8900',
    address: '[Cafe Raweeya Address]',
    city: '[City, Country]',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // TODO: Save settings to Firebase
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Site Settings</h1>

        {saved && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-6">
            ✓ Settings saved successfully
          </div>
        )}

        <div className="bg-white p-8 rounded-lg shadow max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cafe Name
              </label>
              <input
                type="text"
                name="cafeName"
                value={settings.cafeName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={settings.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City & Country
              </label>
              <input
                type="text"
                name="city"
                value={settings.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
            >
              Save Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
