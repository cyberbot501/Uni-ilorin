import React from "react";
import SIDEBAR from "../layout/sideBar";
import { NavLink } from "react-router-dom";

export default function Dsignup() {
    return (
        <div>
          <div>
            <SIDEBAR />
          </div>
    
          <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] xl:pl-[560px] bg-[#E1E1E1]  flex flex-col justify-center items-center gap-4">
            <h1 className="font-robo md:text-[35px] font-medium  text-[22px]">
              Sign Up
            </h1>
    
            <form action="" className="flex flex-col gap-4 ">
              <label className="">
                <p className="font-robo font-medium md:text-[20px] text:[12px]">
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
    
              <div className="md:flex md:flex-row md:justify-center md:gap-3 flex flex-col gap-4">
                <label className="">
                  <p className="font-robo font-medium md:text-[20px] text:[12px]">
                    First Name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your First Name"
                    className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
                  />
                </label>
    
                <label className="">
                  <p className="font-robo font-medium md:text-[20px] text:[12px]">
                    Last Name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Last Name"
                    className="md:w-[363px] w-[343px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
                  />
                </label>
              </div>
    
              <div className="md:flex md:flex-row md:justify-center md:gap-3 flex flex-col gap-4">
                <label className="">
                  <p className="font-robo font-medium md:text-[20px] text:[12px]">
                    Gender
                  </p>
                  <select
                    name=""
                    id=""
                    placeholder="Enter Your Matric Number"
                    className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px] bg-white  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
                  >
                    <option value="male" hidden>
                      Gender
                    </option>
                    <option value="female" className="text-black">
                      Female
                    </option>
                    <option value="male" className="text-black">
                      Male
                    </option>
                  </select>
                </label>
    
                <label className="">
                  <p className="font-robo font-medium md:text-[20px] text:[12px]">
                  Doctor ID *
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="e.g Faculty of CIS"
                    className="md:w-[363px] w-[343px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
                  />
                </label>
              </div>
    
              <div className="md:flex md:flex-row md:justify-center md:gap-3 flex flex-col gap-4">
                <label className="">
                  <p className="font-robo font-medium md:text-[20px] text:[12px]">
                 Department
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="e.g Department of medcine"
                    className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
                  />
                </label>
    
                <label className="">
                  <p className="font-robo font-medium md:text-[20px] text:[12px]">
                    Phone Number
                  </p>
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Enter Your Phone Number"
                    className="md:w-[363px] w-[343px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
                  />
                </label>
              </div>
            </form>
    
            <button className="md:text-[20px] text-[15px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] md:w-[493px] w-[293px]  md:h-[50px] h-[40px] ">
              Sign Up
            </button>
            <p className="text-[#BDBBBB] md:text-[18px] text[12px] font-robo font-medium">
              Already have an account?
              <NavLink to="/login" className="text-[#284904]">
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      );
}
