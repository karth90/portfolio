'use client';

export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sign up for my newsletter to receive the latest updates on my work, 
          data science insights, and technical articles.
        </p>

        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Your email is safe with me. No spam, unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
} 