'use client';

import Image from "next/image";

export default function Companies() {
  const companies = [
    {
      name: "Microsoft Corporation",
      logo: "/microsoft-logo.png",
      alt: "Microsoft Logo",
      location: "Vancouver, Canada",
      roles: [
        {
          title: "Senior Data Scientist",
          period: "Jul 2023 - Present",
          description: "Leading AI/ML initiatives for Teams Phone growth, developing specialized AI agents using AutoGen, and driving data-driven decision making across cross-functional teams.",
          achievements: [
            "Built AI-powered agent using GPT-4.0 in Microsoft Copilot Studio for strategic recommendations",
            "Led cross-functional analysis resulting in 10% net new Phone tenant acquisitions",
            "Developed revenue attribution model and extended forecasting capabilities",
            "Created self-serve Power BI dashboard for Teams Phone product",
            "Led A/B testing increasing registration conversion rates by 10%"
          ],
          tools: ["Python", "Spark", "SQL", "Azure Synapse", "Kusto", "Power BI", "MS Fabric", "Azure ML Foundry", "AutoGen", "GPT-4.0"]
        },
        {
          title: "Data Scientist II",
          period: "Apr 2021 - Jul 2023",
          description: "Developed machine learning models and analytics solutions for Teams Webinar product growth.",
          achievements: [
            "Created ML-based product propensity model increasing MAU by 20%",
            "Developed engagement score metric driving OKR goal setting",
            "Designed customer segmentation models using clustering",
            "Served as data SME for product team and leadership"
          ]
        }
      ]
    },
    {
      name: "Applied Materials",
      logo: "/applied-materials-logo.png",
      alt: "Applied Materials Logo",
      location: "Santa Clara, California",
      roles: [
        {
          title: "Data Scientist",
          period: "Jan 2020 - Apr 2021",
          description: "Led AI/ML initiatives and enterprise tool adoption for semiconductor manufacturing optimization.",
          achievements: [
            "Led Dataiku infrastructure setup and adoption across teams",
            "Developed predictive maintenance use cases for semiconductor lab equipment",
            "Created AI-powered product within BI app framework",
            "Led team of junior data scientists"
          ],
          tools: ["AWS", "Python", "Spark", "Dataiku", "SQL", "Tableau"]
        }
      ]
    },
    {
      name: "Ford Motor Company",
      logo: "/ford-logo.png",
      alt: "Ford Logo",
      location: "Dearborn, Michigan",
      roles: [
        {
          title: "Data Scientist",
          period: "May 2018 - Jan 2020",
          description: "Led predictive maintenance and autonomous vehicle technology initiatives.",
          achievements: [
            "Filed utility patent on Autonomous Vehicle Rider Authentication",
            "Led riveting failure prediction project at assembly plant",
            "Pioneered Industry 4.0 predictive maintenance solution",
            "Productionalized XGBoost model for fault prediction"
          ],
          tools: ["R", "Python", "Spark", "Alteryx", "Pyspark", "DataRobot", "Qlikview"]
        }
      ]
    },
    {
      name: "ADT Security Services",
      logo: "/adt-logo.png",
      alt: "ADT Logo",
      location: "Boca Raton, Florida",
      roles: [
        {
          title: "Data Scientist",
          period: "Jan 2017 - Jan 2018",
          description: "Developed predictive analytics and machine learning models for security systems.",
          achievements: [
            "Identified early churn drivers using Decision Trees",
            "Developed ML model for predicting offline cameras",
            "Delivered high-impact analysis to senior leadership"
          ],
          tools: ["R", "Python", "SQL", "Tableau", "Apache Drill", "Apache Spark", "Unix", "Toad for SQL"]
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {companies.map((company) => (
            <div 
              key={company.name}
              className="w-full p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 80px) 100vw, 80px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{company.name}</h3>
                  <p className="text-gray-600">{company.location}</p>
                </div>
              </div>

              {company.roles.map((role, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-medium text-blue-600">{role.title}</h4>
                    <p className="text-gray-500">{role.period}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{role.description}</p>
                  
                  <div className="space-y-2">
                    {role.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <p className="text-gray-600">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {role.tools && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.tools.map((tool, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 