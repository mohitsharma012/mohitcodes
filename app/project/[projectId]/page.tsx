// app/projects/[projectId]/page.tsx
"use client"; // Marking this component as a Client Component

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProjectPage = () => {
  const { projectId } = useParams(); // Get projectId from URL
  console.log(projectId);

  // Fetch project data based on projectId (this is an example)

  return (
    <>
      <section className="py-32 md:py-52 w-full">
        <div className="flex mx-5 flex-col max-w-7xl md:mx-auto md:flex-row gap-16">
          <img
            className=" md:w-1/2 rounded-3xl transition ease-in-out md:ms-12 hover:shadow-2xl hover:shadow-gray-700  hover:-translate-z-2 hover:scale-110 duration-300 border  "
            src="https://mohitji.site/media/projectsImages/WhatsApp_Image_2024-05-15_at_16.15.04_293ee116.jpg"
            alt=""
          />
          <div>
            <h1 className="text-4xl font-bold  sm:text-6xl">
              AlleyBot - An AI Friend to Talk With
            </h1>

            <p className="mt-4 text-base text-gray-400 sm:text-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.
            </p>

            <div className="mt-10 flex sm:items-center  gap-5">
              <Link
                href="/"
                title=""
                className="inline-flex items-center justify-center w-52 py-3 text-base font-semibold text-white transition-all duration-200 bg-orange-600 hover:bg-orange-800 focus:bg-orange-700"
                role="button"
              >
                {" "}
                View Project
              </Link>
              <Link
                href="/"
                title=""
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
          <div className="w-auto m-auto flex gap-8 md:gap-10 mt-12" >
            <div className="">
              <img src="/icons/cppIcon.png" alt="" className=" w-[5vh]  md:w-[7vh]" />
            </div>
            <div className="">
              <img src="/icons/cppIcon.png" alt="" className=" w-[5vh]  md:w-[7vh]" />
            </div>
            <div className="">
              <img src="/icons/cppIcon.png" alt="" className=" w-[5vh]  md:w-[7vh]" />
            </div>
            <div className="">
              <img src="/icons/cppIcon.png" alt="" className=" w-[5vh]  md:w-[7vh]" />
            </div>
            <div className="">
              <img src="/icons/cppIcon.png" alt="" className=" w-[5vh]  md:w-[7vh]" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
