'use client';

export default function LatestProjects() {
  const projects = [
    {
      title: "Azure ML Model Monitoring",
      description: "Developed a comprehensive monitoring system for ML models in production, tracking performance metrics and data drift",
      image: "/projects/azure-ml.jpg",
      metrics: "40% faster issue detection | 60% reduced downtime",
      tags: ["Azure ML", "Python", "Docker", "Prometheus"]
    },
    {
      title: "Industrial Equipment Predictive Maintenance",
      description: "Built ML models for predictive maintenance and anomaly detection on industrial plant equipment",
      image: "/projects/predictive-maintenance.jpg",
      metrics: "40% downtime reduction | 50% maintenance cost savings",
      tags: ["Machine Learning", "Python", "TensorFlow", "IoT"]
    },
    {
      title: "Connected Vehicle Analytics",
      description: "Built analytics platform for connected vehicles, enabling predictive maintenance and customer insights",
      image: "/projects/vehicle-analytics.jpg",
      metrics: "35% maintenance cost reduction | 45% faster insights",
      tags: ["Big Data", "Python", "Spark", "AWS"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600">
            Latest Projects
          </h2>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Patent Holder
          </div>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <p className="text-lg text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-blue-600 font-medium mb-6">{project.metrics}</p>
                
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