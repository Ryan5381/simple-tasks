import React from "react";

const Footer = () => {
  return (
    <div className="bg-white shadow-hard">
      <div className="flex flex-col md:flex-row items-center justify-center py-4 gap-6 text-sm text-[#999]">
        <a
          href="#"
          className="text-[#999] hover:text-[#666]! transition-colors cursor-pointer"
        >
          About
        </a>
        <span className="hidden md:inline text-[#ddd]">|</span>
        <a
          href="#"
          className="text-[#999] hover:text-[#666]! transition-colors cursor-pointer"
        >
          Contact
        </a>
        <span className="hidden md:inline text-[#ddd]">|</span>
        <a
          href="#"
          className="text-[#999] hover:text-[#666]! transition-colors cursor-pointer"
        >
          FAQ
        </a>
        <span className="hidden md:inline text-[#ddd]">|</span>
        <a
          href="#"
          className="text-[#999] hover:text-[#666]! transition-colors cursor-pointer"
        >
          Customer Service
        </a>
      </div>
      <div className="flex items-center justify-center pb-4">
        <p className="text-[#999] md:text-sm text-center px-4">
          2025© Simple Tasks All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
