import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import doc from '../../assets/image 9.png'
import sug from '../../assets/Mask group.svg'
import { useNavigate } from "react-router-dom";

export default function Appoint() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register");
  };

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

  const doctor = [
    {
      id: 1,
      name: "Dr. Femi Oni",
      type: "General Surgeon",
      image: doc,
    },

    {
      id: 2,
      name: "Dr. Femi Oni",
      type: "General Surgeon",
      image: sug,
    },

    {
      id: 3,
      name: "Dr. Femi Oni",
      type: "General Surgeon",
      image: doc,
    },

    {
      id: 4,
      name: "Dr. Femi Oni",
      type: "General Surgeon",
      image: sug,
    },
  ];
  return (
    <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] pl-[320px] bg-[#E1E1E1] pt-[40px] px-5">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-[17px] font-medium font-robo">
            Hi Raphael Ebenezer
          </p>
          <h2 className="text-[40px] font-medium font-robo">
            Book Appointment
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

      <div >
        <div className="grid grid-cols-1">
          {doctor.map((doctor, index) => (
          <div className=" flex flex-row items-center justify-between px-4 w-[100%] h-[234px] border-[#F9FBF8] bg-[#F9FBF8] border-[1px] rounded-[15px] mt-5 mb-5" key={index}>
            <div  className='flex flex-row items-center gap-3'>
              <img
                    src={doctor.image}
                    alt=""
                    className="w-[122px] h-[122px] rounded-[122px] items-center"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-[25px] font-robo font-medium">{doctor.name}</h2>
                    <p className="text-[18px] font-robo font-medium text-[#545353]">
                      {doctor.type}
                    </p>
                </div>
              </div>
             
              <button onClick={handleButtonClick} className="text-[20px] font-robo font-medium text-white w-[196px] h-[48px] rounded-[10px] items-center bg-[#598A23]">Book Appointment</button>
         </div>
         ))}
        </div>
      </div>

      
    </div>
  );
}
