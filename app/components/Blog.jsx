'use client';

export default function Blog() {
  const posts = [
    {
      title: "Building Scalable ML Pipelines",
      excerpt: "Learn how to design and implement production-grade machine learning pipelines that scale with your business needs.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      image: "/blog/pipeline.jpg"
    },
    {
      title: "The Future of A/B Testing",
      excerpt: "Exploring advanced techniques in experimentation and how they're shaping the future of product development.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Experimentation",
      image: "/blog/testing.jpg"
    },
    {
      title: "Data Quality Best Practices",
      excerpt: "A comprehensive guide to implementing robust data quality checks in your data pipeline.",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Data Engineering",
      image: "/blog/quality.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <a href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
            View all articles →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center px-4">{post.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {post.category}
                  </span>
                  <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 