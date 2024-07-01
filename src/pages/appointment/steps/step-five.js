import React from 'react'

function StepFive() {
    return (
        <div>
            <form className="flex flex-col gap-4 mt-[20px]">
                <label className="">
                    <p className="font-robo font-medium md:text-[20px] text:[15px]">
                        Appointment ID
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
                        Notification Time
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
                        Notification Date
                    </p>
                    <input
                        type="date"
                        name=""
                        id=""
                        placeholder=""
                        className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px]  border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text:[12px]"
                    />
                </label>
            </form>

            <button className="md:text-[20px] text-[15px] font-medium text-[#ffffff]  rounded-[5px] bg-[#284904] hover:bg-[#8EB861] md:w-[493px] w-[293px]  md:h-[50px] h-[40px] ">
                Set Notification
            </button>
        </div>
    )
}

export default StepFive