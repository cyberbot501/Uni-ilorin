import React from 'react'
import { CiHome } from "react-icons/ci";
import { LiaUserClockSolid } from "react-icons/lia";
import { BiFirstAid } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { TbMedicalCrossCircle } from "react-icons/tb";
import { RiBloggerLine } from "react-icons/ri";

export default function sideBarB() {
  return (
    <div className="md:w-[296px] md:min-h-[100hv] md:h-[100%] bg-[#E6F2D8]  md:fixed md:overflow-y-auto  flex flex-col justify-evenly items-center">
        <div className='flex flex-row items-center'>
            <img src="" alt="" className='md:w-[69px] md:h-[69px] rounded-[34.5px] bg-black'/>
            <h2 className='md:text-[20px] font-robo font-medium cursor-pointer'>Raphael Ebenezer</h2>
        </div>

        <div className='flex flex-col gap-5'>
           <button className='w-[216px] h-[47px] hover:bg-[#416C11] hover:text-white rounded-[10px] flex flex-row items-center px-4 gap-3'>
              <CiHome className='w-[16px] h-[16px] text-[#696868] ' />
              <p className='text-[#696868] font-robo font-medium text-[17px]'>Overview</p>
           </button>

           <button className='w-[216px] h-[47px] hover:bg-[#416C11] hover:text-white rounded-[10px] flex flex-row items-center px-4 gap-3'>
              <LiaUserClockSolid className='w-[16px] h-[16px] text-[#696868] ' />
              <p className='text-[#696868] font-robo font-medium text-[17px]'>Book Appointment</p>
           </button>

           <button className='w-[216px] h-[47px] hover:bg-[#416C11] hover:text-white rounded-[10px] flex flex-row items-center px-4 gap-3'>
              <BiFirstAid className='w-[16px] h-[16px] text-[#696868] ' />
              <p className='text-[#696868] font-robo font-medium text-[17px]'>Pharmacy</p>
           </button>

            <button className='w-[216px] h-[47px] hover:bg-[#416C11] hover:text-white rounded-[10px] flex flex-row items-center px-4 gap-3'>
              <MdPayment className='w-[16px] h-[16px] text-[#696868] ' />
              <p className='text-[#696868] font-robo font-medium text-[17px]'>Payments</p>
           </button>

            <button className='w-[216px] h-[47px] hover:bg-[#416C11] hover:text-white rounded-[10px] flex flex-row items-center px-4 gap-3'>
              <RiContactsLine className='w-[16px] h-[16px] text-[#696868] ' />
              <p className='text-[#696868] font-robo font-medium text-[17px]'>Contacts</p>
           </button>

           <button className='w-[216px] h-[47px] hover:bg-[#416C11] hover:text-white rounded-[10px] flex flex-row items-center px-4 gap-3'>
              <TbMedicalCrossCircle className='w-[16px] h-[16px] text-[#696868] ' />
              <p className='text-[#696868] font-robo font-medium text-[17px]'>Services</p>
           </button>

           <button className='w-[216px] h-[47px] hover:bg-[#416C11] hover:text-white rounded-[10px] flex flex-row items-center px-4 gap-3'>
              <RiBloggerLine className='w-[16px] h-[16px] text-[#696868] ' />
              <p className='text-[#696868] font-robo font-medium text-[17px]'>Contacts</p>
           </button>

            

            
        </div>
    </div>
  )
}