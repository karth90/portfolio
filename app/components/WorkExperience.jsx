'use client';

import Image from "next/image";

export default function WorkExperience() {
  const experiences = [
    {
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      role: "Senior Data Scientist",
      period: "Jul 2023 - Present",
      projects: [
        {
          title: "AI-Powered Strategic Agent Development",
          description: "Built an AI-powered agent using GPT-4.0 in Microsoft Copilot Studio to analyze structured and unstructured data, providing strategic recommendations on target markets, operator partnerships, and key product features",
          metrics: ["10% of net new Phone tenant acquisitions", "15% growth boost", "Multiple specialized AI agents using AutoGen"],
          technologies: ["GPT-4.0", "AutoGen", "Azure ML", "Python", "Power BI"]
        },
        {
          title: "Revenue Attribution & Forecasting",
          description: "Built revenue attribution models and extended forecasting capabilities by increasing Teams Phone user subscription data coverage from 2 to 5+ years",
          metrics: ["5+ years of historical data", "Accurate business projections", "Detailed revenue breakdown"],
          technologies: ["Python", "SQL", "Power BI", "MS Fabric"]
        }
      ]
    },
    {
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      role: "Data Scientist II",
      period: "Apr 2021 - Jul 2023",
      projects: [
        {
          title: "Product Propensity Model",
          description: "Developed a machine learning-based product propensity model analyzing data from 40+ Microsoft products across 200+ attributes",
          metrics: ["20% MAU increase over two quarters", "High-propensity tenant onboarding", "Improved customer understanding"],
          technologies: ["PySpark", "Cosmos Streams", "Machine Learning"]
        },
        {
          title: "Engagement Score & Customer Segmentation",
          description: "Created engagement score metrics and customer segmentation models using clustering, driving OKR goal setting and adoption",
          technologies: ["Python", "Clustering", "Telemetry Analysis"]
        }
      ]
    },
    {
      company: "Applied Materials",
      logo: "https://www.amat.com/content/dam/amat/images/amat-logo.png",
      role: "Data Scientist",
      period: "Jan 2020 - Apr 2021",
      projects: [
        {
          title: "Enterprise AI Tool Implementation",
          description: "Led the evaluation and implementation of Dataiku infrastructure, including test cases and training sessions",
          metrics: ["Successful enterprise adoption", "Infrastructure optimization", "User training completion"],
          technologies: ["AWS", "Dataiku", "Python", "Spark"]
        },
        {
          title: "Predictive Maintenance System",
          description: "Developed predictive maintenance use cases for semiconductor lab equipment using anomaly detection models",
          technologies: ["AWS", "Python", "Mahalanobis Distance", "Anomaly Detection"]
        }
      ]
    },
    {
      company: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1200px-Ford_logo_flat.svg.png",
      role: "Data Scientist",
      period: "May 2018 - Jan 2020",
      projects: [
        {
          title: "Autonomous Vehicle Rider Authentication",
          description: "Filed a utility patent on Autonomous Vehicle Rider Authentication, contributing to Ford's leadership in autonomous vehicle technology",
          metrics: ["Patent filed", "Industry 4.0 solution", "Executive recognition"],
          technologies: ["Python", "R", "PySpark", "XGBoost"]
        },
        {
          title: "Riveting Failure Prediction System",
          description: "Led a riveting failure prediction project using robot cycle data, implementing an XGBoost model for time-series classification",
          metrics: ["Two-hour early prediction", "Daily email alerts", "Plant efficiency improvement"],
          technologies: ["PySpark", "Python", "XGBoost", "QlikView"]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Key Projects & Achievements
        </h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-gray-600">{exp.role} • {exp.period}</p>
                </div>
              </div>

              {/* Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Metrics */}
                    {project.metrics && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-500 mb-2">Key Metrics</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric, mIndex) => (
                            <span
                              key={mIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-500 mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 