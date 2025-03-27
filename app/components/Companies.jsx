'use client';

import Image from "next/image";

export default function Companies() {
  const companies = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      alt: "Microsoft Logo"
    },
    {
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1200px-Ford_logo_flat.svg.png",
      alt: "Ford Logo"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Companies I've Worked With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-24 w-full flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={company.alt}
                  width={200}
                  height={96}
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 