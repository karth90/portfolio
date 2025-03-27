'use client';

export default function FeaturedWork() {
  const projects = [
    {
      title: "Microsoft Azure ML Platform",
      description: "Led development of scalable ML platform on Azure, implementing advanced features for model deployment and monitoring",
      metrics: [
        "40% faster deployment",
        "60% cost reduction",
        "99.9% uptime"
      ],
      tags: ["Azure", "Machine Learning", "Python", "Docker"]
    },
    {
      title: "Industrial Equipment Predictive Maintenance",
      description: "Developed ML models for predictive maintenance and anomaly detection on industrial plant equipment",
      metrics: [
        "40% downtime reduction",
        "50% maintenance cost savings",
        "85% anomaly detection accuracy"
      ],
      tags: ["Machine Learning", "Python", "TensorFlow", "IoT"]
    },
    {
      title: "Ford Connected Vehicle Analytics",
      description: "Built analytics platform for connected vehicles, enabling predictive maintenance and customer insights",
      metrics: [
        "35% maintenance cost reduction",
        "45% faster insights",
        "2x data processing speed"
      ],
      tags: ["Big Data", "Python", "Spark", "AWS"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600">
            Featured Work
          </h2>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Patent Holder
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 