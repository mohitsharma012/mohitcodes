import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="pt-10  bg-[url(linear-gradient(315deg,#b8c6db,#f5f7fa 74%))] flex overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 h-[90vh]">
        <div className="flex flex-col align-middle m-auto gap-4 items-center ">
          <h2 className="text-2xl   text-amber-500		 sm:text-3xl font-mono font-thin opacity-75">
            Hi, my name is
          </h2>
          <h2 className="text-5xl font-thin sm:text-7xl -mt-3 font-mono">
            Mohit Sharma
          </h2>
          <h2 className="text-2xl font-thin font-serif sm:text-4xl">
            Full Stack Developer
          </h2>
          {/* <p className="max-w-lg my-4 mb-8 text-xl leading-7 text-gray-500 md:mt-8">
                Hi, I’m Mohit Sharma, a passionate Web Developer specializing in
                creating modern, responsive websites and applications.
              </p> */}
          <Link
            href="/contact"
            className="bg-amber-600 rounded mt-5 md:mt-8 text-gray-300 px-8 py-2 hover:bg-amber-900 text-lg "
          >
            Connect with me
          </Link>
          <Link
            href="/contact"
            className="text-5xl absolute  bottom-36 md:bottom-12 animate-bounce	"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-14 text-amber-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold  sm:text-4xl text-amber-600 sm:leading-tight">
              Core Strengths
            </h2>
          </div>

          <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-16 md:grid-cols-4 gap-x-2 gap-y-2 md:gap-y-6">
            <div>
              <img
                className="object-contain w-28  md:w-32 mx-auto"
                src="/icons/reactIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-32 md:w-40 mx-auto"
                src="/icons/mongodbIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-32 md:w-40 mx-auto"
                src="/icons/nodejsIcon.png"
                alt=""
              />
            </div>
            <div className="text-4xl font-sans mx-auto font-light text-gray-300">
              express
            </div>
            <div>
              <img
                className="object-contain w-28 md:w-36 mx-auto rounded-xl"
                src="/icons/djangoIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-12 md:w-16 mx-auto rounded-xl"
                src="/icons/pythonIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-12 md:w-16 mx-auto rounded-xl"
                src="/icons/jsIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-24 md:w-32 mx-auto rounded-xl"
                src="/icons/bootstrapIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-24 md:w-28 mx-auto rounded"
                src="/icons/mysqlIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain rounded w-36 mx-auto"
                src="/icons/postgresqlIcon.png"
                alt=""
              />
            </div>

            <div className="object-contain rounded text-2xl md:text-4xl mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 432 416"
              >
                <path
                  fill="currentColor"
                  d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
                />
              </svg>
            </div>

            <div>
              <img
                className="object-contain w-12 md:w-16 mx-auto"
                src="/icons/cppIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-44 rounded mx-auto"
                src="/icons/tailwindIcon.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-28 rounded mx-auto"
                src="/icons/nextIcon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  sm:pt-16 pb-26 ">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl text-amber-600 font-bold leading-tight sm:text-4xl lg:text-5xl">
              Numbers tell our story
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-16 mt-16 text-center lg:mt-16 sm:gap-x-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-5xl md:text-6xl">
                <span className="text-transparent bg-clip-text text-white">
                  {" "}
                  10+{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-300">
                Projects Built
              </p>
            </div>
            <div>
              <h3 className="font-bold text-5xl md:text-6xl">
                <span className="text-transparent bg-clip-text text-white">
                  {" "}
                  5+{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-300">Clients</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold w-full m-auto text-5xl md:text-6xl">
                <span className="text-transparent bg-clip-text text-white">
                  {" "}
                  20+{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-300">
                worked with
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10  md:pb-24 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl flex flex-col  mx-auto text-center">
            <h2 className="text-3xl text-amber-600 font-bold leading-tight sm:text-4xl lg:text-5xl">
            My Creations
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:mt-16 lg:gap-x-12">
            <Link href="/project/id" >             
              <img
                className="w-full rounded-3xl transition ease-in-out   hover:-translate-z-2 hover:scale-110 duration-300 border  "
                src="https://mohitji.site/media/projectsImages/WhatsApp_Image_2024-05-15_at_16.15.04_293ee116.jpg"
                alt=""
              />
            </Link>
            <Link href="/project/id" >             
              <img
                className="w-full rounded-3xl transition ease-in-out   hover:-translate-z-2 hover:scale-110 duration-300 border  "
                src="https://mohitji.site/media/projectsImages/WhatsApp_Image_2024-05-15_at_16.15.04_293ee116.jpg"
                alt=""
              />
            </Link>
            <Link href="/project/id" >             
              <img
                className="w-full rounded-3xl transition ease-in-out   hover:-translate-z-2 hover:scale-110 duration-300 border  "
                src="https://mohitji.site/media/projectsImages/WhatsApp_Image_2024-05-15_at_16.15.04_293ee116.jpg"
                alt=""
              />
            </Link>

            
          </div>

          <div className="mt-8 text-center cursor-pointer	 md:mt-16">
            <Link
              href="/projects"
              className="  py-3 font-semibold text-gray-200 bg-amber-600 border border-transparent rounded-md px-14 hover:bg-amber-800 cursor-pointer	 focus:bg-amber-800"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
