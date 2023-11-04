import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[95px] bg-[#1A3129] flex justify-between items-center">
      <div className="flex items-center p-16 mx-8">
        <img
          src="Images/Logo.png"
          alt="Logo"
          className="w-[194.62px] h-[45px] cursor-pointer "
        />
      </div>
      <ul className="flex space-x-5  p-16 mx-8  items-center">
        <li className="list-none inline-block ">
          <a href="/" className="no-underline text-white px-2 hover:text-[#CBEA7B]">
            Home
          </a>
        </li>
        <li className="list-none inline-block ">
          <a href="/" className="no-underline text-white px-2 hover:text-[#CBEA7B]">
            About
          </a>
        </li>
        <li className="list-none inline-block ">
          <a href="/" className="no-underline text-white px-2 hover:text-[#CBEA7B]">
            Team
          </a>
        </li>
        <li className="list-none inline-block ">
          <a href="/" className="no-underline text-white px-2 hover:text-[#CBEA7B]">
            Process
          </a>
        </li>
        <li className="list-none inline-block ">
          <a href="/" className="no-underline text-white px-2 hover:text-[#CBEA7B]">
            Pricing
          </a>
        </li>
        <li className="list-none inline-block ">
          <a href="/" className="no-underline text-white px-2 hover:text-[#CBEA7B]">
            Blog
          </a>
        </li>
        
        <div className="px-2">
          <a
            href="##"
            class="bg-[#CBEA7B] rounded-lg py-3.5 font-medium inline-block mr-4 
           hover:border-yellow-500 hover:text-white hover:border w-[137px] h-[55px] leading-[27px] text-center "
          >
            Contact Us
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
