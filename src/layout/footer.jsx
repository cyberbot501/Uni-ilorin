import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function footer() {
  return (
    <div className=''>
        <div className='h-[315px] md:h-[615px] bg-[#29509F]'>

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

            <p className="font-robo font-medium md:text-[20px] text-[10px]">
            |
            </p>

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
  )
}
