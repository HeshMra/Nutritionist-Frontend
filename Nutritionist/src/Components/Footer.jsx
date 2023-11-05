import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className="bg-[#1A3129] h-[299px] ">
      <footer class="flex items-center p-16 mx-8 ">
        <img
          src="images/logo.png"
          class="w-[194.62px] h-[45px] cursor-pointer "
        />
        <ul class="flex-1 text-center">
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white ">
              Home
            </a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="/recipes/About" class="no-underline text-white ">
              About
            </a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white ">
              Team
            </a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white ">
              Process
            </a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white ">
              Pricing
            </a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white ">
              Blog
            </a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white ">
              Contact
            </a>
          </li>
        </ul>
        <a href="##" class=" text-white px-6">
          Got To Top 
        </a>
        <BsFillArrowUpCircleFill style={{ color: "#CBEA7B" }} className="w-12 h-12 relative ml-4  mr-4"/>
      </footer>

      <div className="bg-[#2C5446] h-[87px] rounded-lg shadow border border-[#356554] mx-28 flex items-center pl-5 ">
        <div className="flex-1 flex space-x-5 ">
          <div className="bg-[#2C5446] w-[223px] h-[55px] text-white flex items-center justify-center rounded-lg shadow border border-[#356554]">
            <FaEnvelope
              style={{ color: "#CBEA7B" }}
              className="w-6 h-6 relative"
            />
            <p className="flex items-center ml-1.5">hello@squareup.com</p>
          </div>

          <div className="bg-[#2C5446] w-[223px] h-[55px] text-white flex items-center justify-center rounded-lg shadow border border-[#356554]">
            <IoCall
              style={{ color: "#CBEA7B" }}
              className="w-6 h-6 relative "
            />
            <p className="flex items-center ml-1.5">+91 91813 23 2309</p>
          </div>

          <div className="bg-[#2C5446] w-[223px] h-[55px] text-white flex items-center justify-center rounded-lg shadow border border-[#356554]">
            <IoLocationSharp
              style={{ color: "#CBEA7B" }}
              className="w-6 h-6 relative "
            />
            <p className="flex items-center ml-1.5">Somewhere in the World</p>
          </div>
        </div>
        <p className="text-white p-5 flex items-center">© 2023 Nutritionist. All rights reserved.  </p>
      </div>
    </div>
  );
};

export default Footer;
