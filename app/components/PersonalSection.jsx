'use client';

import Image from 'next/image';

export default function PersonalSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 mb-12 text-center">
          Beyond Data Science
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location & Family */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/personal/seattle.jpg"
                alt="Seattle Skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Seattle Life</h3>
            <p className="text-gray-600">Living in the Emerald City with my wife and our adorable mini Goldendoodle</p>
          </div>

          {/* Motorcycles */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/personal/vintage-bike.jpg"
                alt="Vintage Motorcycle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vintage Bikes</h3>
            <p className="text-gray-600">Enthusiastic about classic motorcycles and their timeless engineering</p>
          </div>

          {/* Cricket */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/personal/csk-logo.png"
                alt="CSK Logo"
                fill
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">CSK Fan</h3>
            <p className="text-gray-600">Proud supporter of the Chennai Super Kings cricket team</p>
          </div>

          {/* Football */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/personal/manutd-logo.png"
                alt="Manchester United Logo"
                fill
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Man United</h3>
            <p className="text-gray-600">Die-hard Manchester United fan (staying strong through the rebuild!)</p>
          </div>
        </div>
      </div>
    </section>
  );
} 