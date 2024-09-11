import React from "react";
import Link from "next/link";
import projectDatabase from "@/lib/projectDatabase";

const page = () => {
  return (
    <section className="py-10 pt-40 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl flex flex-col gap-5 mx-auto text-center">
          <h2 className="text-3xl text-amber-600 font-bold leading-tight sm:text-4xl lg:text-5xl">
            Works Crafted by My Hands
          </h2>
          <span className="text-gray-400">
            Each one of my projects has a little special part of me in it, here'
            s a selection of hand-picked creation of mine.
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:mt-16 lg:gap-x-12">
          {projectDatabase.map((project) => (
            <Link href={`/project/${project.id}`}>
              <img
                className="w-full rounded-3xl transition ease-in-out h-full hover:-translate-z-2 hover:scale-110 duration-300 border  "
                src={`/projects/${project.imageUrl}`}
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
