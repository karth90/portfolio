'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Karthik's expertise in data science and machine learning has been instrumental in driving our product development forward. His ability to translate complex technical concepts into actionable business insights is remarkable.",
      author: "Sarah Chen",
      role: "Product Director at TechCorp",
      image: "/testimonials/sarah.jpg"
    },
    {
      quote: "Working with Karthik on our ML infrastructure was a game-changer. He not only built a scalable system but also mentored our team on best practices in data science.",
      author: "Michael Rodriguez",
      role: "Engineering Manager at DataFlow",
      image: "/testimonials/michael.jpg"
    },
    {
      quote: "Karthik's approach to experimentation and A/B testing has significantly improved our product decisions. His statistical expertise combined with business acumen is invaluable.",
      author: "Emily Thompson",
      role: "Head of Product at GrowthLabs",
      image: "/testimonials/emily.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.author[0]}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 