import React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from 'react-icons/fa';

export default function footer() {
  return (
    <div className="">
      <div className="h-[100%] md:h-[662px] bg-[#29509F] flex justify-center items-center pt-10 pb-10">
        <div className="flex flex-col md:flex-row gap-20 justify-center items-start mt-20 pt-10 pb-10">
          <div className="flex flex-col gap-5 max-w-[535px]">
            <h2 className="text-[35px] text-white font-robo font-semibold">About Us</h2>
            <p className="font-robo font-medium text-[23px] text-white">
              Unilorin clinic offers modern healthcare services to the university of Ilorin community. Key features include easy registration, online appointment scheduling, flexible rescheduling, timely notifications, and medication adherence tracking system. We are dedicated to providing personalized, high-quality healthcare services. Your health and well-being are our top priorities, and we are here to support you every step of the way.
            </p>
          </div>

          <div className="flex flex-col gap-5 max-w-[219px]">
            <h2 className="text-[35px] text-white font-robo font-semibold">Useful Links</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <NavLink className='flex justify-between items-center font-robo font-medium text-[23px] text-white'>
                  About Us
                  <FaChevronRight className='text-white' />
                </NavLink>
                <div className='w-[219px] h-[1px] bg-white group-hover:w-[100px] transition-all duration-300'></div>
              </div>
              <div className="">
                <NavLink className='flex justify-between items-center font-robo font-medium text-[23px] text-white'>
                  Our Services
                  <FaChevronRight className='text-white' />
                </NavLink>
                <div className='w-[219px] h-[1px] bg-white group-hover:w-[100px] transition-all duration-300'></div>
              </div>
              <div className="">
                <NavLink className='flex justify-between items-center font-robo font-medium text-[23px] text-white'>
                  Contact Us
                  <FaChevronRight className='text-white' />
                </NavLink>
                <div className='w-[219px] h-[1px] bg-white group-hover:w-[100px] transition-all duration-300'></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-w-[205px]">
            <h2 className="text-[35px] text-white font-robo font-semibold">Contact Us</h2>
            <p className="font-robo font-medium text-[23px] text-white">Permanent site, University of Ilorin, Kwara State</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between border-1px border-[black] bg-[black] w-[100%] md:h-[59px] h-[30px] items-center md:px-7 px-2 ">
        <div className="flex flex-row md:gap-7 gap-2 text-white">
          <div className="flex flex-row items-center gap-[2px]">
            <p className="font-robo font-medium md:text-[20px] text-[10px]">
              2024
            </p>
            <p className="font-robo font-medium md:text-[20px] text-[10px]">
              @
            </p>
          </div>

          <p className="font-robo font-medium md:text-[20px] text-[10px]">
            All Rights Reserved
          </p>

          <p className="font-robo font-medium md:text-[20px] text-[10px]">|</p>

          <p className="font-robo font-medium md:text-[20px] text-[10px]">
            Umar Rahmat Imhotseme
          </p>
        </div>

        <div className="flex flex-row md:gap-7 gap-2 text-white">
          <FaGooglePlusG className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
          <FaPinterestP className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
          <FaTwitter className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
          <FaFacebookF className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
