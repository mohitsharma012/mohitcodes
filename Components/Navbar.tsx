"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => setNavbarOpen(!navbarOpen);

  return (
    <>
      <nav className="fixed bg-black w-full shadow-md z-10">
        <div className="flex mx-4 md:mx-12 items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex transition ease-in-out hover:-translate-z-3 hover:scale-110 duration-150"
            >
              <img src="/Images/logo.png" alt="Logo" className="w-28" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          {!navbarOpen && (
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex p-1 transition-all duration-200 border border-black lg:hidden"
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

          {/* Desktop Menu */}
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-12">
            <Link
              href="/"
              className="text-base font-normal hover:-translate-y-2 ease-in-out transition-all duration-200 hover:text-opacity-80"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-base font-normal hover:-translate-y-2 ease-in-out transition-all duration-200 hover:text-opacity-80"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-base font-normal hover:-translate-y-2 ease-in-out transition-all duration-200 hover:text-opacity-80"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-base font-normal hover:-translate-y-2 ease-in-out transition-all duration-200 hover:text-opacity-80"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          {navbarOpen && (
            <div className="lg:hidden flex flex-col absolute top-0 rounded right-0 w-1/2 bg-gray-900 shadow-lg">
              <div className="w-full h-8 content-center m-auto mt-5 ">
                <button onClick={handleClick} className="flex w-full px-3 justify-between">
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
                <Link
                  href="/about"
                  className="text-base font-normal hover:text-opacity-80"
                >
                  About
                </Link>
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
