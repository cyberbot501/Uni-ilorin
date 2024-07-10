import React from 'react';
import unilorin from "../assets/unilorin.svg";
import appoint from "../assets/appoint.svg";
import over from "../assets/over.svg";
import pharm from "../assets/pharm.svg";
import bill from "../assets/bill.svg";
import doc from "../assets/doc.svg";
import patient from "../assets/patient.svg";
import blog from "../assets/blog.svg";

export default function NewBar() {

    //    const getCookie = (name) => {
    //       const value = `; ${document.cookie}`;
    //       const parts = value.split(`; ${name}=`);
    //       if (parts.length === 2) return parts.pop().split(';').shift();
    //     };

    // const credentials = getCookie('credentials');
    // const [lastName, firstName] = credentials ? credentials.split(',') : ["Loading...", ""];

    return (
        <div className="md:w-[273px] md:min-h-[100hv] md:h-[100%] bg-[#E6F2D8]  md:fixed md:overflow-y-auto  flex flex-col justify-evenly items-center">
            <div className='justify-center items-center w-[127.09px] h-[110px] mt-[10px]'>
                <img src={unilorin} alt="" className='' />
            </div>

            <div className='flex flex-col gap-4 mt-[-12px] justify-center items-center'>
                <button className='w-[216px] h-[47px] hover:bg-[#416C11] rounded-[10px] flex flex-row items-center px-4 gap-3 group'>
                    <img src={over} className='w-[16px] h-[16px] text-[#696868] group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[#696868] font-robo font-500 text-custom-17 group-hover:text-white'>Overview</p>
                </button>

                <button className='w-[216px] h-[47px] hover:bg-[#416C11] rounded-[10px] flex flex-row items-center px-4 gap-3 group'>
                    <img src={appoint} className='w-[16px] h-[16px] text-[#696868] group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[#696868] font-robo font-500 text-custom-17 group-hover:text-white'>Appointments</p>
                </button>

                <button className='w-[216px] h-[47px] hover:bg-[#416C11] rounded-[10px] flex flex-row items-center px-4 gap-3 group'>
                    <img src={pharm} className='w-[16px] h-[16px] text-[#696868] group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[#696868] font-robo font-500 text-custom-17 group-hover:text-white'>Pharmacy</p>
                </button>

                <button className='w-[216px] h-[47px] hover:bg-[#416C11] rounded-[10px] flex flex-row items-center px-4 gap-3 group'>
                    <img src={bill} className='w-[16px] h-[16px] text-[#696868] group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[#696868] font-robo font-500 text-custom-17 group-hover:text-white'>Billings</p>
                </button>

                <button className='w-[216px] h-[47px] hover:bg-[#416C11] rounded-[10px] flex flex-row items-center px-4 gap-3 group'>
                    <img src={doc} className='w-[16px] h-[16px] text-[#696868] group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[#696868] font-robo font-500 text-custom-17 group-hover:text-white'>Doctors</p>
                </button>

                <button className='w-[216px] h-[47px] hover:bg-[#416C11] rounded-[10px] flex flex-row items-center px-4 gap-3 group'>
                    <img src={patient} className='w-[16px] h-[16px] text-[#696868] group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[#696868] font-robo font-500 text-custom-17 group-hover:text-white'>Patients</p>
                </button>

                <button className='w-[216px] h-[47px] hover:bg-[#416C11] rounded-[10px] flex flex-row items-center px-4 gap-3 group'>
                    <img src={blog} className='w-[16px] h-[16px] group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[#696868] group-hover:text-white font-robo font-500 text-custom-17'>Blog</p>
                </button>
            </div>
        </div>
    )
}