import React from "react";
import { useNavigate } from "react-router-dom";

export default function StepOne() {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate('/steptwo');
  };

  return (

    <div>
      <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%]  bg-[#E1E1E1]  flex flex-col justify-center items-center gap-7">
        <h1 className="font-robo md:text-[35px] font-medium text-[22px]">
          Appointment Scheduling
        </h1>

        <form action="" className="flex flex-col gap-4 mt-[20px]">
          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Name
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder=""
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Email
            </p>
            <input
              type="email"
              name=""
              id=""
              placeholder=""
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Matric Number
            </p>
            <input
              type="number"
              name=""
              id=""
              placeholder=""
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Phone
            </p>
            <input
              type="number"
              name=""
              id=""
              placeholder=""
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>


          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Select Date
            </p>
            <input
              type="date"
              name=""
              id=""
              placeholder=""
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Select Time
            </p>
            <input
              type="time"
              name=""
              id=""
              placeholder=""
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Department
            </p>
            <select
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            >
              <option>Math</option>
              <option>computer</option>
            </select>
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Select Doctor
            </p>
            <select
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            >
              <option>Math</option>
              <option>computer</option>
            </select>
          </label>

        </form>

        <button onClick={handleScheduleClick} className="md:text-[20px] text-[15px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] md:w-[493px] w-[293px]  md:h-[50px] h-[40px] ">
          Schedule Appointment
        </button>
      </div>
    </div>
    // <div>
    //   <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%]  bg-[#E1E1E1]  flex flex-col justify-center items-center gap-7">
    //     <h1 className="font-robo md:text-[35px] font-medium text-[22px]">
    //       Medication Adherence Tracking System
    //     </h1>

    //     <form action="" className="flex flex-col gap-4 mt-[20px]">
    //       <label className="">
    //         <p className="font-robo font-medium md:text-[20px] text:[15px]">
    //           Patient ID
    //         </p>
    //         <input
    //           type="text"
    //           name=""
    //           id=""
    //           placeholder=""
    //           className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
    //         />
    //       </label>

    //       <label className="">
    //         <p className="font-robo font-medium md:text-[20px] text:[15px]">
    //           Medication
    //         </p>
    //         <input
    //           type="text"
    //           name=""
    //           id=""
    //           placeholder=""
    //           className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
    //         />
    //       </label>

    //       <label className="">
    //         <p className="font-robo font-medium md:text-[20px] text:[15px]">
    //           Date
    //         </p>
    //         <input
    //           type="date"
    //           name=""
    //           id=""
    //           placeholder=""
    //           className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
    //         />
    //       </label>

    //       <label className="">
    //         <p className="font-robo font-medium md:text-[20px] text:[15px]">
    //           Time
    //         </p>
    //         <input
    //           type="time"
    //           name=""
    //           id=""
    //           placeholder=""
    //           className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
    //         />
    //       </label>

    //       <label className="">
    //         <p className="font-robo font-medium md:text-[20px] text:[15px]">
    //           Adherence (Percentage)
    //         </p>
    //         <input
    //           type="text"
    //           name=""
    //           id=""
    //           placeholder=""
    //           className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
    //         />
    //       </label>

    //     </form>

    //     <button className="md:text-[20px] text-[15px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] md:w-[493px] w-[293px]  md:h-[50px] h-[40px] ">
    //       Submit Adherence
    //     </button>
    //   </div>
    // </div>
  );
}
