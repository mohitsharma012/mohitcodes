"use client"; // This makes the component a Client Component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => setNavbarOpen(!navbarOpen);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme; 
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme; 
  };

  return (
    <>
      <nav className="fixed z-30 w-full h-20">
        <div
          className={` shadow-gray-700 flex mx-auto h-full transition-all duration-300 shadow-xl ${theme === "light" ? "bg-white" : "bg-black"} ${
            isScrolled
              ? "bg-opacity-90 w-full px-8 md:px-48 "
              : "bg-opacity-100 w-5/6 md:w-3/4 mt-6 rounded-xl px-4 md:px-8"
          } `}
        >
          {/* Logo */}
          <div className="flex-shrink-0 my-auto">
            <Link
              href="/"
              className="flex transition ease-in-out  duration-150"
            >
              <img src="/Images/logo.png" alt="Logo" className="w-28" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-6">
            <Link
              href="/"
              className={`text-base  font-semibold font-mono ease-in-out transition-all duration-200 ${
                isActive("/") ? "text-[#43b7ff]" : "text-white"
              } `}
            >
              HOME
            </Link>
            {/* <Link
              href="/about"
              className={`text-base  font-semibold font-mono ease-in-out transition-all duration-200 ${
                isActive("/about") ? "text-[#43b7ff]" : "text-white"
              } `}
            >
              ABOUT ME
            </Link>
            <Link
              href="/services"
              className={`text-base  font-semibold font-mono ease-in-out transition-all duration-200 ${
                isActive("/services") ? "text-[#43b7ff]" : "text-white"
              } `}
            >
              SERVICES
            </Link> */}
            <Link
              href="/projects"
              className={`text-base  font-semibold font-mono ease-in-out transition-all duration-200 ${
                isActive("/projects") ? "text-[#43b7ff]" : "text-white"
              } `}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`text-base  font-semibold font-mono ease-in-out transition-all duration-200 ${
                isActive("/contact") ? "text-[#43b7ff]" : "text-white"
              } `}
            >
              CONTACT ME
            </Link>
          </div>

          <Link
            href="/contact"
            className="hidden lg:block px-8 ms-auto my-auto py-3 text-sm font-bold font-sans text-black transition-all duration-200 border border-transparent rounded-3xl bg-gradient-to-r bg-gray-200 focus:outline-none hover:bg-gray-50 focus:opacity-10 shadow-xl"
          >
            GET STARTED
          </Link>
          <button
            onClick={toggleTheme}
            className="text-xl ps-4"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>

          {/* Hamburger Menu for Mobile */}
          {!navbarOpen && (
            <button
              type="button"
              onClick={handleClick}
              className=" p-1 ml-auto transition-all space-x-12 duration-200 border border-black lg:hidden"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          {/* Mobile Menu */}
          {navbarOpen && (
            <div className="lg:hidden flex flex-col absolute top-0 rounded right-0 w-1/2 bg-gray-900 shadow-lg">
              <div className="w-full h-8 content-center m-auto mt-5 ">
                <button
                  onClick={handleClick}
                  className="flex w-full px-3 justify-between"
                >
                  <span className="text-gray-500">Menu</span>
                  <svg
                    className="block w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col px-5 space-y-6 py-6">
                <Link
                  href="/"
                  className="text-base font-normal hover:text-opacity-80"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-base font-normal hover:text-opacity-80"
                >
                  Projects
                </Link>
                {/* <Link
                  href="/about"
                  className="text-base font-normal hover:text-opacity-80"
                >
                  About
                </Link> */}
                <Link
                  href="/contact"
                  className="text-base font-normal hover:text-opacity-80"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
