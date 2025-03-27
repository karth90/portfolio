'use client';

import Image from "next/image";

export default function BeyondDataScience() {
  const interests = [
    {
      title: "Seattle Life",
      description: "Exploring Seattle's dog parks with my wife and our mini Goldendoodle. When not walking the pup, you'll find me tinkering with my 2006 Honda Shadow cruiser.",
      image: "/seattle-motorcycles.png",
      alt: "Seattle Life"
    },
    {
      title: "Chennai Super Kings",
      description: "Die-hard CSK fan supporting the Men in Yellow through thick and thin. Gotta maintain that Chennai, India home connection! 😄",
      image: "/csk.png",
      alt: "Chennai Super Kings"
    },
    {
      title: "Manchester United",
      description: "Loyal Red Devil through the ups and downs (and there have been a lot of downs lately 😅).",
      image: "/man-utd.png",
      alt: "Manchester United"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Beyond Data Science
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={interest.image}
                  alt={interest.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {interest.title}
              </h3>
              <p className="text-gray-600">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 