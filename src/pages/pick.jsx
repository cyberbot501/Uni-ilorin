import React from "react";
import { useNavigate } from "react-router-dom";

export default function Pick() {
    const navigate = useNavigate();

    const handleDoctorClick = () => {
      navigate("/dsignup");
    };

    const handleStudentClick = () => {
      navigate("/signup");
    };
  return (
    <div className="w-[100%] h-[100%] min-h-[100vh] flex flex-col justify-center items-center">
      <div>
        <p className="text-[30px] md:text-[40px] font-normal  text-black text-center mb-5 font-mali">Are you a</p>
        <p className="text-[30px] md:text-[40px] font-normal  text-black text-center mb-5 font-mali">Doctor or a Student</p>
      </div>

      <div className="flex flex-row gap-5">
        <button
          onClick={handleStudentClick}
          className="text-[20px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] w-[171px] h-[54px]"
        >
          Student 
        </button>

        <button
          onClick={handleDoctorClick}
          className="text-[20px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] w-[171px] h-[54px]"
        >
          Doctor
        </button>
      </div>
    </div>
  );
}
