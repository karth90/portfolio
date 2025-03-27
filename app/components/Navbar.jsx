'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-fade-in">
            <span className="text-xl font-bold text-gray-900">KS</span>
          </div>
          
          <div className="hidden md:block animate-fade-in">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Experience
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 