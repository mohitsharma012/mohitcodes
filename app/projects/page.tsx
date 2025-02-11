"use client";
import React from "react";
import Link from "next/link";
// import projectDatabase from "../../lib/projectDatabase";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

import { useState, useEffect } from "react";
import Loader from "@/app/components/loader";




const page = () => {
  const [loading, setLoading] = useState(true)
  
    const [projectDatabase, setprojectDatabase] = useState<any[]>([])
  
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/api/project`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        // Ensure a successful response
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }  
        const data = await response.json();
        setprojectDatabase([...data]);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }
  
  
    useEffect(() => {
      fetchProjectData();
    }
      , [])
  
  return (
    <>
    {loading ? (
      <Loader/>
    ) : (
      <div>


        <section className=" bg-[url('/Images/pageHeaderBackground.jpg')] bg-cover w-[calc(300% + 1.3px)] min-h-[50vh] bg-bottom bg-no-repeat flex">
          <h1 className="m-auto text-3xl md:text-5xl pt-16 font-bold tracking-tight">PORTFOLIO</h1>
        </section>
        
        <section className="pb-36">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              
              <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                {projectDatabase.map((project) => (
                  <div className="bg-[#020617] shadow  border rounded-xl p-3 pb-8">
                    <a
                      href={`/project/${project._id}`}
                      title=""
                      className="block aspect-w-4 aspect-h-3 "
                    >
                      <img
                        className="object-cover rounded-xl duration-700 w-full h-full transition ease-in-out hover:-translate-y-hover:-translate-z-4 hover:scale-105"
                        src={project.imageUrl}
                        alt="img"
                      />
                    </a>

                    <p className="mt-6 text-BASE font-bold">{project.title}</p>
                    <p className="mt-3 font-sans text-sm text-gray-400">
                      {project.description}
                    </p>
                    <a
                      href={`/project/${project._id}`}
                      className="inline-flex px-4 py-2 text-xs  font-semibold tracking-widest uppercase rounded-full text-black bg-sky-100 mt-6 hover:bg-sky-200"
                    >
                      More Details
                    </a>
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

export default page;
