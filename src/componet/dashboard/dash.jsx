import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import BGB from "../../assets/image 4.svg";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

export default function dash() {
  const menu = [
    {
      id: 1,
      dis: "Total Booking",
      icon: <FaCalendarPlus className="w-[24px] h-[24px] text-[#BE8213]" />,
    },

    {
      id: 2,
      dis: "Booking Success",
      icon: <FaRegCalendarCheck className="w-[24px] h-[24px] text-[#BE8213]" />,
    },

    {
      id: 3,
      dis: "Booking Cancelled",
      icon: <FaRegCalendarTimes className="w-[24px] h-[24px] text-[#BE8213]" />,
    },

    {
      id: 4,
      dis: "Amount Paid",
      icon: <MdOutlinePayments className="w-[24px] h-[24px] text-[#BE8213]" />,
    },
  ];

  const rows = Array.from({ length: 10 }, (_, i) => ({
    name: "Dr. Femi Oni",
    service: "Cardiologist",
    date: "July 3, 2024",
    time: "9:00 AM",
  }));

  return (
    <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] pl-[320px] bg-[#E1E1E1] pt-[40px] px-5">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-[17px] font-medium font-robo">Welcome Back</p>
          <h2 className="text-[40px] font-medium font-robo">
            Raphael Ebenezer
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

      <div className="w-[100%] h-[310px] border-[1px] border-[#4F75C2] bg-[#4F75C2] rounded-[32px] py-7 flex flex-row overflow-hidden mt-4">
        <div className="flex flex-col justify-evenly gap-4 pl-6">
          <h2 className="text-[35px] font-robo font-medium text-[#FFFFFF]">
            Manage Your Healthcare Journey{" "}
          </h2>
          <p className="text-[17px] font-robo font-medium text-[#FFFFFF] w-[617px]">
            Schedule your next medical appointment with ease. Choose a
            convenient date and time, and our team will promptly confirm the
            availability of your preferred doctor.
          </p>
          <button className="text-[17px] font-robo font-medium text-[#4F75C2] bg-[#ffffff] w-[189px] h-[49px] rounded-[10px]">
            Book Appointment
          </button>
        </div>

        <div className="pt-[102px]">
          <img src={BGB} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-4">
        {menu.map((menu, index) => (
          <div
            key={index}
            className="border-[1px] border-[#FFFFFF] bg-[#FFFFFF] shadow-2xl mt-4 w-[219px] h-[121px] flex flex-row justify-center items-center gap-2 rounded-[10px]"
          >
            <div>{menu.icon}</div>
            <p>{menu.dis}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-row justify-evenly">
        <div className="flex flex-col gap-7">
          <div className="w-[666px] h-[442px] bg-white shadow-2xl rounded-[15px] border-[1px] border-white overflow-y-scroll px-2">
            <div className="flex flex-row justify-around items-center mt-5">
              <h2 className="text-[23px] font-robo font-medium ">
                Upcoming Appointment
              </h2>
              <select
                name=""
                id=""
                className="border-[1px] text-[#C3C1C1] text-[17px] font-robo font-medium border-[#D0CFCF] w-[238px] h-[43px] rounded-[5px]"
              >
                <option
                  value=""
                  disabled
                  className="text-[#C3C1C1] text-[17px] font-robo font-medium"
                >
                  Search Appointment
                </option>
                <option
                  value=""
                  className="text-[#C3C1C1] text-[17px] font-robo font-medium"
                >
                  Latest Appointent
                </option>
                <option
                  value=""
                  className="text-[#C3C1C1] text-[17px] font-robo font-medium"
                >
                  New
                </option>
                <option
                  value=""
                  className="text-[#C3C1C1] text-[17px] font-robo font-medium"
                >
                  Last
                </option>
              </select>
            </div>

            <div className=" mt-5 mb-5">
              <table className="min-w-full bg-white border-none border-b-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-[black] text-[18px] font-robo font-medium">
                      Profile
                    </th>
                    <th className="py-2 px-4 border-b text-[black] text-[18px] font-robo font-medium">
                      Service
                    </th>
                    <th className="py-2 px-4 border-b text-[black] text-[18px] font-robo font-medium">
                      Date
                    </th>
                    <th className="py-2 px-4 border-b text-[black] text-[18px] font-robo font-medium">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td className="py-2 px-4 border-none flex items-center text-[#545353] text-[18px] font-robo font-medium ">
                        <img
                          src=""
                          alt="Profile"
                          className="w-10 h-10 rounded-full mr-2"
                        />
                        {row.name}
                      </td>
                      <td className="  text-[#545353] text-[18px] font-robo font-medium">
                        {row.service}
                      </td>
                      <td className="  text-[#545353] text-[18px] font-robo font-medium">
                        {row.date}
                      </td>
                      <td className="  text-[#545353] text-[18px] font-robo font-medium">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-[666px] h-[197px] bg-white shadow-2xl rounded-[15px] border-[1px] p-4 mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Available Doctors</h2>
              <div className="flex items-center space-x-2"></div>
            </div>
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              className="mySwiper flex flex-col"
            >
              <div className="">
                <div className="swiper-button-prev absolute"></div>
                <div className="swiper-button-next "></div>
              </div>
              {[...Array(9).keys()].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-around items-center h-full">
                    <div className="w-[198px] h-[92px] border-[#DFDBDB] border-[1px] rounded-[15px] flex flex-row items-center px-4 gap-2">
                      <img
                        src=""
                        alt=""
                        className="w-[37px] h-[37px] rounded-[37px] items-center"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-[18px] font-robo font-medium">
                          Dr. Femi Oni
                        </h2>
                        <p className="text-[13px] font-robo font-medium text-[#545353]">
                          General Surgeon
                        </p>
                      </div>
                    </div>

                    <div className="w-[198px] h-[92px] border-[#DFDBDB] border-[1px] rounded-[15px] flex flex-row items-center px-4 gap-2">
                      <img
                        src=""
                        alt=""
                        className="w-[37px] h-[37px] rounded-[37px] items-center"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-[18px] font-robo font-medium">
                          Dr. Femi Oni
                        </h2>
                        <p className="text-[13px] font-robo font-medium text-[#545353]">
                          General Surgeon
                        </p>
                      </div>
                    </div>

                    <div className="w-[198px] h-[92px] border-[#DFDBDB] border-[1px] rounded-[15px] flex flex-row items-center px-4 gap-2">
                      <img
                        src=""
                        alt=""
                        className="w-[37px] h-[37px] rounded-[37px] items-center"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-[18px] font-robo font-medium">
                          Dr. Femi Oni
                        </h2>
                        <p className="text-[13px] font-robo font-medium text-[#545353]">
                          General Surgeon
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-[320px] h-[676px] rounded-[15px] bg-white shadow-2xl">

        </div>
      </div>
    </div>
  );
}
