import React from 'react'
import NAVBAR from '../layout/navBar'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import HERO from '../componet/landingComponets/hero'

export default function landingPage() {
  return (
    <div>
        <div className='flex flex-row justify-between border-1px border-[#28A745] bg-[#28A745] w-[100%] h-[59px] items-center px-10'>
            <div className='flex flex-row gap-7 text-white'>
                <div className='flex flex-row items-center gap-[2px]'>
                    <MdOutlineMail className='w-[20px] h-[20px]'/>
                    <p className='font-robo font-medium text-[20px]'>uniilorinclinic.com</p>
                </div>
                <div className='flex flex-row items-center gap-[2px]'>
                    <FaPhone className='w-[20px] h-[20px]'/>
                    <p className='font-robo font-medium text-[20px]'>+234 564 444 28</p>
                </div>
            </div>


            <div className='flex flex-row gap-7 text-white'>
                <FaGooglePlusG className='w-[20px] h-[20px] cursor-pointer'/>
                <FaPinterestP className='w-[20px] h-[20px] cursor-pointer'/>
                <FaTwitter className='w-[20px] h-[20px] cursor-pointer'/>
                <FaFacebookF className='w-[20px] h-[20px] cursor-pointer'/>
            </div>
        </div>

        <NAVBAR />
        <HERO />
    </div>
  )
}
