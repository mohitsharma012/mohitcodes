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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme; 
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme; 
  };

  const NavbarLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Portfolio",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <nav className="fixed z-30 w-full ">
        <div
          className={`flex mx-auto flex-wrap justify-between h-full py-4 transition-all duration-300 bg-gray-200 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-lg w-full px-8 md:px-48"
              : "bg-white/80 shadow-lg w-5/6 md:w-3/4 mt-6 rounded-xl px-4 md:px-8"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 my-auto">
            <Link
              href="/"
              className="flex transition ease-in-out duration-150 hover:opacity-80"
            >
              <img src="/Images/logo.png" alt="Logo" className="w-20" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden  lg:flex lg:items-center lg:justify-center lg:space-x-8">
            {NavbarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-200 group ${
                  isActive(link.href) 
                    ? "text-purple-600" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full ${
                  isActive(link.href) ? "w-full" : ""
                }`}></span>
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden lg:flex items-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={handleClick}
            className="p-2 ml-auto transition-all duration-200 rounded-lg lg:hidden hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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

          {/* Mobile Menu */}
          {navbarOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick={handleClick}
              ></div>
              
              {/* Menu Panel */}
              <div className="absolute right-0 top-0 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-lg font-semibold text-gray-900">Menu</span>
                    <button
                      onClick={handleClick}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6 text-gray-600"
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

                  {/* Links */}
                  <div className="flex-1 px-4 py-6 space-y-4">
                    {NavbarLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleClick}
                        className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                          isActive(link.href)
                            ? "bg-purple-50 text-purple-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t">
                    <Link
                      href="/contact"
                      onClick={handleClick}
                      className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl"
                    >
                      Get Started
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
