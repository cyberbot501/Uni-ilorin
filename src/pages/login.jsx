import React from "react";
import SIDEBAR from "../layout/sideBar";
import LOGO from "../assets/image 1.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {


  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div>
        <SIDEBAR />
      </div>

      <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] xl:pl-[560px] bg-[#E1E1E1]  flex flex-col justify-center items-center gap-7">
        <h1 className="font-robo md:text-[35px] font-medium text-[22px]">
          Sign In
        </h1>

        <div className="w-[130px] h-[130px] md:w-[196px] md:h-[196px]">
          <img src={LOGO} alt="" />
        </div>

        <form action="" className="flex flex-col gap-4 mt-[-50px]">
          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Email
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Address"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text:[15px]">
              Matric Number
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Matric Number"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
            />
          </label>
          <p className="text-[#BDBBBB] text-right md:text-[18px] text[12px] cursor-pointer">
            Forgotten Matric number?
          </p>
        </form>

        <button onClick={handleButtonClick} className="md:text-[20px] text-[15px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] md:w-[493px] w-[293px]  md:h-[50px] h-[40px] ">
          Sign In
        </button>
      </div>
    </div>
  );
}
