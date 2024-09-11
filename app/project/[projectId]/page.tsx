// app/projects/[projectId]/page.tsx
"use client"; // Marking this component as a Client Component

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import projectDatabase from "@/lib/projectDatabase";

const ProjectPage = () => {
  const { projectId } = useParams(); // Get projectId from URL
  console.log(projectId);

  const project = projectDatabase.find(
    (project) => project.id === Number(projectId)
  );
  console.log(project);

  return (
    <>
      <section className="py-32 md:py-52 w-full">
        <div className="flex mx-5 flex-col max-w-7xl md:mx-auto md:flex-row gap-16">
          <img
            className=" md:w-1/2 rounded-3xl transition ease-in-out md:ms-12 hover:shadow-2xl hover:shadow-gray-700  hover:-translate-z-2 hover:scale-110 duration-300 border  "
            src={`/projects/${project ? project.imageUrl : "img"}`}
            alt=""
          />
          <div>
            <h1 className="text-4xl font-bold  sm:text-5xl">
              {project ? project.title : "Project not found"}
            </h1>

            <p className="mt-4 text-base text-gray-400 sm:text-xl">
              {project ? project.description : "Project not found"}
            </p>

            <div className="mt-10 flex sm:items-center  gap-5">
              <Link
                href={project ? project.livelink : "/"}
                title=""
                target="_blank"
                className="inline-flex items-center justify-center w-52 py-3 text-base font-semibold text-white transition-all duration-200 bg-orange-600 hover:bg-orange-800 focus:bg-orange-700"
                role="button"
              >
                {" "}
                View Project
              </Link>
              <Link
                href={project ? project.gitlink : "/"}
                title=""
                target="_blank"
                className="inline-flex items-center justify-center w-52 py-3 text-base font-semibold text-white transition-all duration-200  border-2 border-orange-600 hover:bg-orange-600 focus:bg-orange-700"
                role="button"
              >
                {" "}
                View Code
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-16 md:mt-36 flex flex-col ">
          <h2 className="text-3xl text-center m-auto font-sans text-orange-500 font-bold leading-tight sm:text-5xl ">
            What Technologies are used?{" "}
          </h2>
          <div className="w-auto  m-auto mx-5 flex-wrap md:mx-auto flex gap-8  mt-12">
            {project
              ? project.technologies.map((tech) => (
                  <div className="flex  h-[5vh]  align-middle mx-auto md:h-[vh] ">
                    <img
                      src={`/icons/${tech}Icon.png`}
                      alt=""
                      className=" h-auto mx-auto rounded "
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
