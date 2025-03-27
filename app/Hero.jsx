'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = [
    {
      src: "/profile.jpg",
      alt: "Karthik Sundar",
      title: "Karthik Sundar"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToNext = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  const goToPrevious = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-center lg:text-left">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600">
                Karthik Sundar
              </h1>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Patent Holder</span>
              <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">10+ Years Experience</span>
              <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">AI Agent Developer</span>
              <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Product Analytics Expert</span>
            </div>
            
            <p className="text-xl text-gray-600 mb-3 font-medium">
              Senior Data Scientist | AI/ML Expert | Driving Product Strategy with Data Analytics
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Based in Seattle, WA • Canadian Citizen • TN Visa Sponsorship
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-6">
              <a
                href="https://calendly.com/karthiksundar-51"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a 15-min Call
              </a>
              <a
                href="mailto:karthiksundar.51@gmail.com"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://drive.google.com/file/d/1sV42ABCfSSpZsH2QmC2XI7wice22z8nD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Full Resume
              </a>
            </div>

            {/* Key Metrics for Recruiters */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Project-Led Impact</h3>
              <p className="text-sm text-gray-600">Key metrics from recent initiatives</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-2xl font-bold text-blue-600">20%</p>
                <p className="text-sm text-gray-600">Microsoft Teams Webinars MAU Growth</p>
                <p className="text-xs text-gray-500 mt-1">Through predictive customer targeting</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-2xl font-bold text-blue-600">10%</p>
                <p className="text-sm text-gray-600">Microsoft Teams Phone Acquisitions</p>
                <p className="text-xs text-gray-500 mt-1">Via Teams-Phone bundle analysis & A/B testing</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-2xl font-bold text-blue-600">120</p>
                <p className="text-sm text-gray-600">MAU from Product & Leadership</p>
                <p className="text-xs text-gray-500 mt-1">Self-serve Power BI dashboard for Teams Phone metrics</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-2xl font-bold text-blue-600">4%</p>
                <p className="text-sm text-gray-600">Equipment Downtime Reduction</p>
                <p className="text-xs text-gray-500 mt-1">Through ML-based predictive maintenance</p>
              </div>
            </div>

            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a Senior Data Scientist with over a decade of experience driving innovation through scalable platforms, 
              AI-driven solutions, and data integrations. I excel in helping product teams gain a competitive advantage by 
              delivering quick, detailed insights from both internal and external data sources. With a hacker's "fail fast" mindset, 
              I leverage cutting-edge AI tools and agents to accelerate product growth, enhance user understanding, and push the 
              boundaries of what's possible. My approach combines technical expertise with strategic thinking to deliver actionable 
              insights at the intersection of business, technology, and customer experience.
            </p>

            {/* Quick Value Proposition */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">Why Work With Me:</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Built AI agents using GPT-4.0 and AutoGen</p>
                    <p className="text-xs text-blue-600 mt-0.5">Use hacker-doer mindset to leverage cutting-edge tech for competitive advantage</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Led cross-functional data analysis projects at Microsoft</p>
                    <p className="text-xs text-blue-600 mt-0.5">Driving organizational change and presenting to wider audience</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Patent holder in Autonomous Vehicle Technology</p>
                    <p className="text-xs text-blue-600 mt-0.5">Out-of-the-box thinking and innovative problem-solving</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200">AI Agents</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200">Machine Learning</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200">Rapid Prototyping</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200">Product Strategy</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200">Data Integration</span>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm font-medium">
                Let's discuss how I can help your team leverage AI and data science to drive growth and innovation. Quick 15-minute call to explore opportunities.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://linkedin.com/in/karsundar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Personal Blurb */}
            <div className="mt-4 text-center lg:text-left">
              <p className="text-sm text-gray-600 italic">
                "When I'm not building AI solutions, you'll find me exploring Seattle's dog parks with my mini Goldendoodle, 
                tinkering with my Honda Shadow cruiser, or cheering for CSK and Manchester United. 
                I'm passionate about pushing the boundaries of what's possible with data, but I believe a little fun and adventure 
                keeps the creative juices flowing!"
              </p>
            </div>
          </div>

          <div 
            className="relative w-full aspect-square max-w-sm mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform rotate-3"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-full min-h-[400px]">
                <Image
                  src="/profile.jpg"
                  alt="Karthik Sundar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 text-center">
                <p className="text-sm font-medium">Karthik Sundar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
