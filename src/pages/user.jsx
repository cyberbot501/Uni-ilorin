import React from 'react';
import SideBarB from '../layout/sideBarB';
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Profile from "../assets/head.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";

function user() {
    return (
        <div>
            <div>
                <SideBarB />
            </div>
            <div className='border-[1px] h-[100%] min-h-[100vh] w-[100%] pl-[320px] bg-[#E1E1E1] pt-[40px] px-5'>
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p className="text-[17px] font-medium font-robo">
                            Welcome
                        </p>
                        <h2 className="text-[40px] font-medium font-robo">
                            Your Profile
                        </h2>
                    </div>

                    <div className="flex flex-row gap-8">
                        <div className="border-[1px] border-[#416C11] bg-[#F8FBF6] flex flex-row items-center rounded-[10px] w-[290px] h-[45px] gap-[8px]">
                            <CiSearch className="w-[18px] h-[18px] text-[#416C11] ml-[2px]" />
                            <input
                                type="text"
                                placeholder="search"
                                className=" bg-transparent text-[#8D8D8D] text-[17px] font-medium font-robo outline-none w-[260px] h-[45px] rounded-[10px]"
                            />
                        </div>

                        <div className="border-[1px] border-[#416C11] bg-[#416C11] w-[51px] h-[51px] rounded-[51px] place-content-center px-[6px] shadow-md">
                            <IoIosNotificationsOutline className="text-[#F8FBF6] w-[35px] h-[35px]" />
                        </div>
                    </div>
                </div>

                <div className='mt-[40px]'>
                    <img src={Profile} alt='Profile' className='w-271 h-271' />
                </div>

                <div className='flex mt-[40px] gap-10 items-center justify-center border-2 h-[72px] border-custom-gray'>
                    <p className='p-2 text-[#262626] font-robo font-500 text-custom-20 leading-[23.44px] tracking-[0.02em]'>Profile</p>
                    <p className='p-2 text-[#262626] font-robo font-500 text-custom-20 leading-[23.44px] tracking-[0.02em]'>Medical information</p>
                    <p className='p-2 text-[#262626] font-robo font-500 text-custom-20 leading-[23.44px] tracking-[0.02em]'>Insurance information</p>
                    <p className='p-2 text-[#262626] font-robo font-500 text-custom-20 leading-[23.44px] tracking-[0.02em]'>Appointment history</p>
                </div>

                <div className='mt-[40px] items-center justify-center border-2 h-[717px] border-custom-gray'>
                    <div className='flex mt-[101px] gap-[15px]'>
                        <div className='ml-[75px]'>
                            <div className='h-[101px] flex flex-col'>
                                <label className='text-[#303130] font-robo font-500 text-custom-22 leading-[25.78px] tracking-[0.02em]'>
                                    Full Name:
                                </label>
                                <input
                                    type='text'
                                    id='fullname'
                                    placeholder='Enter Your Full Name'
                                    className='pt-2 pr-2 pb-2 pl-5 border-2 h-[60] w-[320px] border-unique-gray rounded mt-[5px]'
                                />
                            </div>
                            <div className='w-[425px] h-[101px] flex flex-col mt-[10px]'>
                                <label className='text-[#303130] font-robo font-500 text-custom-22 leading-[25.78px] tracking-[0.02em]'>
                                    Date of Birth:
                                </label>
                                <input
                                    type='date'
                                    id='dob'
                                    placeholder='Enter Your Date of Birth'
                                    className='pt-2 pr-2 pb-2 pl-5 border-2 h-[60] w-[320px] border-unique-gray rounded mt-[5px]'
                                />
                            </div>
                            <div className='w-[425px] h-[101px] flex flex-col mt-[10px]'>
                                <label className='text-[#303130] font-robo font-500 text-custom-22 leading-[25.78px] tracking-[0.02em]'>
                                    Phone Number:
                                </label>
                                <input
                                    type='number'
                                    id='phone'
                                    placeholder='Enter Your Phone Number'
                                    className='pt-2 pr-2 pb-2 pl-5 border-2 h-[60] w-[320px] border-unique-gray rounded mt-[5px]'
                                />
                            </div>
                        </div>
                        <div className='ml-[-50px]'>
                            <div className='h-[101px] flex flex-col'>
                                <label className='text-[#303130] font-robo font-500 text-custom-22 leading-[25.78px] tracking-[0.02em]'>
                                    Gender:
                                </label>
                                <input
                                    type='gender'
                                    id='gender'
                                    placeholder='Enter Your Gender'
                                    className='pt-2 pr-2 pb-2 pl-5 border-2 h-[60] w-[320px] border-unique-gray rounded mt-[5px]'
                                />
                            </div>
                            <div className='h-[101px] flex flex-col mt-[10px]'>
                                <label className='text-[#303130] font-robo font-500 text-custom-22 leading-[25.78px] tracking-[0.02em]'>
                                    Address:
                                </label>
                                <input
                                    type='text'
                                    id='address'
                                    placeholder='Enter Your Address'
                                    className='pt-2 pr-2 pb-2 pl-5 border-2 h-[60] w-[320px] border-unique-gray rounded mt-[5px]'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex ml-[102px] mt-[223px] gap-[50px]'>
                        <button className='text-[#757272] flex font-robo font-500 text-custom-20 leading-[23.44px] gap-[8px]'><div className='w-[15.59px] h-[16px] color-[#757272]'><IoSettingsOutline /></div> Preferences</button>
                        <button className='text-[#757272] flex font-robo font-500 text-custom-20 leading-[23.44px] gap-[8px]'><div className='w-[16px] h-[16px] color-[#757272]'><VscGraph /></div> Activity</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default user