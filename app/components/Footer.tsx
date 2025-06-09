import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-white py-8 mb-16 md:mb-0 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col m-auto gap-6 justify-around">
          <Link href="/" className="m-auto transition-transform duration-300 hover:scale-105">
            <img src="/Images/logo.png" className="w-24" alt="Mohit Sharma Logo" />
          </Link>
          <div className="text-gray-600 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center font-mono">
            <span>Copyright ©2025 Mohit Sharma            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span>Made with <span className="text-red-500">❤️</span> by Mohit Sharma</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
