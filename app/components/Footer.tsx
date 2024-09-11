import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-black py-8 mb-16 md:mb-0">
      
      <div className="flex flex-col m-auto gap-6 justify-around">
        <Link href="/" className="m-auto">
          <img src="/images/logo.png" className="w-24" alt="" />
        </Link>
        <span className="text-gray-300 flex gap-4 text-right m-auto font-mono">
          Copyright © 2024 Mohit Sharma <br /> <span className="hidden md:block">|</span>  Made with ❤️ by Mohit Sharma
        </span>
      </div>
    </footer>
  );
};

export default Footer;
