"use client";
import React from "react";
import Link from "next/link";
// import projectDatabase from "../../lib/projectDatabase";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

import { useState, useEffect } from "react";
import Loader from "@/app/components/loader";
import { ProjectData } from "../Data";

const ProjectsPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white/95">
          {/* Hero Section */}
          <section className="min-h-[70vh] flex flex-col items-center justify-center relative w-full overflow-hidden bg-white/95">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="flex flex-col z-20 align-middle m-auto gap-8 items-center text-center max-w-4xl px-4">
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium shadow-sm mb-2 hover:scale-105 transition-all duration-300 border border-purple-100">
                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    My Portfolio
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
                  Featured <span className="text-purple-600">Projects</span>
                </h1>
                <p className="mt-6 text-base text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                  A collection of my recent work and contributions to the digital world. Each project represents a unique challenge and solution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-2 text-base font-semibold rounded-lg bg-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="relative flex items-center">
                    Let's Work Together
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
                <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </section>

          {/* Projects Grid Section */}
          <section className="py-20 bg-white/95">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Project Cards */}
                  {ProjectData.sort((a, b) => a.position - b.position).map((project) => (
                    <div key={project.id} className="group shadow-xl relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <a href={`/project/${project.id}`} className="text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center gap-1">
                            View Project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
