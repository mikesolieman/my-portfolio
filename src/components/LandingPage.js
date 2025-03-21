import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const LandingPage = () => {
  const projects = [
    {
      title: "YouTube Data Pipeline",
      description: "ETL pipeline processing YouTube analytics data with Python and Apache Airflow",
      tags: ["Python", "Airflow", "ETL", "Data Engineering"],
      status: "Active"
    },
    {
      title: "Streaming Analytics",
      description: "Processed 2M+ rows of streaming data using PostgreSQL and Snowflake",
      tags: ["PostgreSQL", "Snowflake", "Looker"],
      status: "Completed"
    },
    {
      title: "Performance Metrics Dashboard",
      description: "Built Power BI dashboard monitoring $2B program performance metrics",
      tags: ["Power BI", "Data Visualization", "SQL"],
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-8 md:px-16 pt-8 md:pt-16 pb-32">
        <header className="mb-16">
          <h1 className="text-blue-600 font-serif italic text-xl">MS</h1>
        </header>

        <div className="max-w-2xl">
        <h2 className="text-blue-600 font-serif text-4xl md:text-6xl mb-8">
          Mike Solieman
        </h2>
        <div className="space-y-3">
          <p className="text-gray-800 text-base leading-relaxed">
            Hey! I'm a data analyst focusing on analytics, engineering, and insights.
          </p>
          
          <p className="text-gray-800 text-base leading-relaxed">
            Previously, I worked at Disney Streaming (Disney+/Hulu), developing cost efficiency metrics and content performance analytics. Before that, I was at Amazon (Prime Video/Amazon Studios), working on financial forecasting and content spend analysis.
          </p>
          
          <p className="text-gray-800 text-base leading-relaxed">
            I'd love to hear from you -- michael.solieman [at] gmail [dot] com or <a href="https://www.linkedin.com/in/michaelsolieman" className="text-blue-600 hover:underline">LinkedIn</a>
          </p>
        </div>
      </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 md:px-16 py-32 border-t border-gray-100">
        <header className="mb-24">
          <h2 className="text-blue-600 font-serif text-2xl">Projects</h2>
        </header>

        <div className="max-w-4xl space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.status}</p>
                </div>
                <ArrowUpRight 
                  className="text-gray-400 group-hover:text-blue-600 transition-colors" 
                  size={24} 
                />
              </div>
              
              <p className="text-gray-600 mb-6 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {index !== projects.length - 1 && (
                <div className="mt-24 h-px w-full bg-gray-100" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 md:px-16 py-32 border-t border-gray-100">
        <div className="max-w-4xl flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <p className="text-gray-400">Designed by Mike</p>
            <a 
              href="https://github.com/mikesolieman/my-portfolio"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
          <a 
            href="mailto:michael.solieman@gmail.com" 
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            michael.solieman [at] gmail [dot] com
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;