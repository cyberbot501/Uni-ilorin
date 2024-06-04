import React from "react";
import LOGO from "../assets/image 1.svg";

export default function sideBar() {
  return (<div className="xl:w-[544px] xl:min-h-[100hv] xl:h-[100%] bg-[#416C11]  xl:fixed xl:overflow-y-auto xl:flex xl:flex-col xl:justify-center xl:items-center  hidden">
    
      <div className="w-[130px] h-[130px] md:w-[196px] md:h-[196px]">
        <img src={LOGO} alt="" />
      </div>
      <div>
        <h1 className="text-[30px] md:text-[40px] font-normal  text-white text-center mb-5 font-mali">
          UNIVERSITY OF ILORIN
        </h1>
      </div>
    </div>
  );
}
