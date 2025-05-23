// app/projects/[projectId]/page.tsx
"use client"; // Marking this component as a Client Component

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { ProjectData } from "../../Data";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = ProjectData.find(project => project.id === Number(projectId));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-12 md:pb-24 md:pt-44 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {project ? project.title : "Project not found"}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {project ? project.description : "Project not found"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Project Images */}
            <div className="space-y-6 md:space-y-8 w-full lg:w-3/5">
              {project && project.imageUrl && (
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-2xl md:rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    className="relative rounded-2xl md:rounded-3xl w-full transition duration-300 group-hover:scale-[1.02]"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
              )}

              {project && project.imageUrl_2 && (
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-2xl md:rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    className="relative rounded-2xl md:rounded-3xl w-full transition duration-300 group-hover:scale-[1.02]"
                    src={project.imageUrl_2}
                    alt={`${project.title} - Additional view`}
                  />
                </div>
              )}

              {project && project.imageUrl_3 && (
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-2xl md:rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    className="relative rounded-2xl md:rounded-3xl w-full transition duration-300 group-hover:scale-[1.02]"
                    src={project.imageUrl_3}
                    alt={`${project.title} - Additional view`}
                  />
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-8 md:space-y-12 w-full lg:w-2/5">
              {/* Technologies Section */}
              {project && (
                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-50 text-purple-700 rounded-full text-xs md:text-sm font-medium border border-purple-100 hover:bg-purple-100 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Section */}
              {project && (
                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Features
                  </h2>
                  <ul className="space-y-3 md:space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 md:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Section */}
              {project && project.livelink && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-purple-100">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Ready to Explore?</h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                    Experience the full functionality of this project by visiting the live demo.
                  </p>
                  <Link
                    href={project.livelink}
                    target="_blank"
                    className="inline-flex items-center justify-center w-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white transition-all duration-200 bg-purple-600 hover:bg-purple-700 rounded-lg md:rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Live Demo
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
