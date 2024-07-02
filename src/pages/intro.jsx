import React from "react";
import LOGO from "../assets/image 1.svg";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="w-[100%] h-[100%] min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[130px] h-[130px] md:w-[196px] md:h-[196px]">
        <img src={LOGO} alt="" />
      </div>
      <div>
        <h1 className="text-[30px] md:text-[40px] font-normal  text-black text-center mb-5 font-mali">
          UNIVERSITY OF ILORIN
        </h1>
        <p className="text-[20px] md:text-[30px] font-normal text-black text-center mb-10 font-robo italic">
          Better By Far
        </p>
      </div>
      <button
        onClick={handleButtonClick}
        className="text-[20px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] w-[171px] h-[54px]"
      >
        GET STARTED
      </button>
    </div>
  );
}
