// app/projects/[projectId]/page.tsx
"use client"; // Marking this component as a Client Component

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "@/app/components/loader";

const ProjectPage = () => {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(true)
  interface Project {
    imageUrl: string;
    imageUrl_2: string;
    imageUrl_3: string;
    title: string;
    description: string;
    livelink: string;
  }

  const [project, setProject] = useState<Project | null>(null);

  const fetchProjectData = async () => {
    try {
      const response = await fetch(`/api/project/${projectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      setProject(await response.json());
      setLoading(false)
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <>
    {loading ? (
      <Loader/>
    ):
      <section className="py-32 flex md:py-52 w-full">
        <div className="flex max-w-7xl mx-auto">
          <div className="flex mx-5 flex-col max-w-7xl md:mx-auto  gap-6">
            {project && project.imageUrl && (
              <img
              className=" md:w-4/5 rounded-3xl transition ease-in-out md:ms-12 hover:shadow-2xl hover:shadow-gray-700  hover:-translate-z-2 hover:scale-110 duration-300 border  "
              src={project ? project.imageUrl : "/images/404.jpg"}
              alt=""
              />
            )}

            {project && project.imageUrl_2 && (
              
              <img
              className=" md:w-4/5 rounded-3xl transition ease-in-out md:ms-12 hover:shadow-2xl hover:shadow-gray-700  hover:-translate-z-2 hover:scale-110 duration-300 border  "
              src={project ? project.imageUrl_2 : "/images/404.jpg"}
              alt=""
              />
            )}

            {project && project.imageUrl_3 && (
              
              <img
              className=" md:w-4/5 rounded-3xl transition ease-in-out md:ms-12 hover:shadow-2xl hover:shadow-gray-700  hover:-translate-z-2 hover:scale-110 duration-300 border  "
              src={project ? project.imageUrl_3 : "/images/404.jpg"}
              alt=""
              />
            )}
          </div>
          <div className="w-full mt-16 md:mt-36 flex flex-col ">
            <div>
              <h1 className="text-4xl font-bold  ">
                {project ? project.title : "Project not found"}
              </h1>

              <p className="mt-4 text-base text-gray-400 sm:text-xl">
                {project ? project.description : "Project not found"}
              </p>
              {/* <textarea name="" id=""  className="mt-4 text-base text-gray-400 sm:text-xl bg-[#020617] p-4 w-full h-screen  rounded-xl">
                {project ? project.description : "Project not found"}
              </textarea> */}

              {project && project.livelink ? (
                <div className="mt-10 flex sm:items-center  gap-5">
                  <Link
                    href={project ? project.livelink : "/"}
                    title=""
                    target="_blank"
                    className="inline-flex items-center rounded-md justify-center w-52 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 hover:bg-blue-800 focus:bg-blue-800"
                    role="button"
                  >
                    {" "}
                    View 
                  </Link>
                  {/* <Link
                    href={project ? project.gitlink : "/"}
                    title=""
                    target="_blank"
                    className="inline-flex items-center justify-center w-52 py-3 text-base font-semibold text-white transition-all duration-200  border-2 border-orange-600 hover:bg-orange-600 focus:bg-orange-700"
                    role="button"
                  >
                    {" "}
                    View Code
                  </Link> */}
                </div>
              ) : null}
            </div>
           
          </div>
        </div>
      </section>
    }
    </>
  );
};

export default ProjectPage;
