import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navBar.css";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGooglePlusG, FaPinterestP, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/pick");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed w-[100%] z-10">
      <div className="flex flex-row justify-between border-1px border-[#d3e2d6] bg-[#28A745] w-[100%] md:h-[59px] h-[30px] items-center md:px-7 px-2 ">
        <div className="flex flex-row md:gap-7 gap-2 text-white">
          <div className="flex flex-row items-center gap-[2px]">
            <MdOutlineMail className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] " />
            <p className="font-robo font-medium md:text-[20px] text-[10px]">
              uniilorinclinic.com
            </p>
          </div>
          <div className="flex flex-row items-center gap-[2px]">
            <FaPhone className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
            <p className="font-robo font-medium md:text-[20px] text-[10px]">
              +234 564 444 28
            </p>
          </div>
        </div>

        <div className="flex flex-row md:gap-7 gap-2 text-white">
          <FaGooglePlusG className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
          <FaPinterestP className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
          <FaTwitter className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
          <FaFacebookF className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-row justify-between border border-white bg-white w-full md:h-[100px] h-[40px] items-center md:px-7 px-2 ">
        <div>
          <h2 className="font-robo font-medium md:text-2xl text-[18px]">
            UNILORIN CLINIC
          </h2>
        </div>

        <div className="hidden md:flex flex-row gap-10">
          <NavLink
            to="/"
            className="font-robo font-medium md:text-[17px] text-black underline-from-left hover:text-[#598A23]"
          >
            Home
          </NavLink>
          <a
            href="https://uilpgportal.unilorin.edu.ng/about"
            className="font-robo font-medium md:text-[17px] text-[#646363] underline-from-left hover:text-[#598A23]"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            href="https://uilpgportal.unilorin.edu.ng/services"
            className="font-robo font-medium md:text-[17px] text-[#646363] underline-from-left hover:text-[#598A23]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Services
          </a>
          <a
            href="https://uilpgportal.unilorin.edu.ng/contact"
            className="font-robo font-medium md:text-[17px] text-[#646363] underline-from-left hover:text-[#598A23]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>

        <div className="hidden md:flex flex-row gap-4">
          <button
            onClick={handleLoginClick}
            className="font-robo font-medium md:text-[17px] w-20 h-9 rounded-full bg-white border border-gray-300 hover:bg-gray-100"
          >
            Login
          </button>
          <button
            onClick={handleSignUpClick}
            className="w-20 h-9 rounded-full bg-[#284904] text-white font-robo font-medium md:text-[17px] hover:bg-[#52831D]"
          >
            Sign Up
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700"
          >
            <CiMenuFries className="w-[20px] h-[20px]" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
            <button
              onClick={toggleClose}
              className="text-gray-700 "
            >
              <IoIosCloseCircleOutline className="w-[20px] h-[20px]" />
            </button>

            <NavLink
              to="/"
              className="block px-4 py-2 text-[15px] text-[#646363] hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <a
              href="https://uilpgportal.unilorin.edu.ng/about"
              className="block px-4 py-2 text-[15px] text-[#646363] hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </a>
            <a
              href="https://uilpgportal.unilorin.edu.ng/services"
              className="block px-4 py-2 text-[15px] text-[#646363] hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </a>
            <a
              href="https://uilpgportal.unilorin.edu.ng/contact"
              className="block px-4 py-2 text-[15px] text-[#646363] hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
            <button
              onClick={handleLoginClick}
              className="block w-full text-left px-4 py-2 text-[15px] text-black hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={handleSignUpClick}
              className="block w-full text-left px-4 py-2 text-[15px] text-black hover:bg-gray-100"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
