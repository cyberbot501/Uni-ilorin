import React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function footer() {
  return (
    <div className="">
      <div className="h-[100%] md:h-[615px] bg-[#29509F] flex flex-row justify-evenly pt-10 pb-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-[35px] text-white font-robo font-semibold">About US</h2>
          <p className="w-[535px] font-robo font-medium text-[23px] text-white">
            {" "}
            Unilorin clinic offers modern healthcare services to the university
            of Ilorin community, key features include easy registration, online
            appointment scheduling, flexible rescheduling, timely notifications
            and medication adherence tracking system. We are dedeicate to
            providing personalized, high-quality healthcare services. Your
            health and well-being are our top priorities, and we are here to
            support you every step of the way.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[35px] text-white font-robo font-semibold">Useful Link</h2>
          <div className="flex flex-col gap-4">
            <NavLink className='font-robo font-medium text-[23px] text-white'>About Us</NavLink>
            <NavLink className='font-robo font-medium text-[23px] text-white'>Our Service</NavLink>
            <NavLink className='font-robo font-medium text-[23px] text-white'>Contact Us</NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[35px] text-white font-robo font-semibold">Contact Us</h2>
          <p className="w-[205px] font-robo font-medium text-[23px] text-white">Permernrt site university of ilorin, kawra state</p>
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
