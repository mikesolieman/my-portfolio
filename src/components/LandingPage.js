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
      title: "Streaming Analytics Platform",
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
        <header className="mb-32">
          <h1 className="text-blue-600 font-serif italic text-xl">MS</h1>
        </header>

        <div className="max-w-2xl">
          <h2 className="text-blue-600 font-serif text-4xl md:text-6xl mb-8">
            Mike Solieman
          </h2>
          <p className="text-gray-800 text-xl leading-relaxed">
            Current University of Michigan grad student focused on building with code and scotch tape (most recently at Disney Streaming) while pursuing personal projects in mobile and web development.
            <span className="block mt-4">
            Previously helped optimize content library management at Disney+. 
            </span>
            <span className="block mt-4">
            I’m also interested in data engineering and crafting pipelines and transforming complex systems at scale.
            </span>
            <span className="block mt-4">
            On the side, I work in the photography studio capturing portraits. My work is on mikesolieman.com.
            </span>
          </p>
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
          <p className="text-gray-400">By Mike 2025</p>
          <a 
            href="mailto:michael.solieman@gmail.com" 
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            michael.solieman@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;