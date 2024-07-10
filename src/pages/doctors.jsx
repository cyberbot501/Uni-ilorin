import React, { useState } from 'react';
import NewBar from '../layout/newBar';
import bell from "./../assets/bell.svg";
import guy from "./../assets/guy.svg";
import Doctors from '../componet/doctorsCard/doctorsCard';
import doctorImage from './../assets/doctor 1.svg'; // Assuming you have a doctorImage.png file
import doctorsData from './../constants/MOCK_DATA.json';

function DoctorsPage() {
    const [visibleCount, setVisibleCount] = useState(12);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 12);
    };

    return (
        <div>
            <div>
                <NewBar />
            </div>
            <div className=''>
                <div className="flex flex-row justify-between items-center border-[1px] w-[100%] border-custom-green bg-white h-[86px] pl-[343px] pt-[5px]">
                    <div>
                        <h2 className="font-600 text-custom-25 text-[#000000] font-inter font-robo">
                            Doctors
                        </h2>
                    </div>

                    <div className="flex flex-row gap-8 justify-between items-center mr-[70px]">
                        <div className=''>
                            <button className='border-[1px] border-[#E4F0D7] w-[101px] h-[35px] rounded-[5px] gap-[10px]'>
                                <span className='font-inter font-600 text-custom-12 text-[#416C11]'>+</span>
                                <span className='font-inter font-600 text-custom-12 text-[#416C11]'>Add Profile</span>
                            </button>
                        </div>

                        <div className='w-[24.11px] h-[24px]'>
                            <img src={bell} alt='' />
                        </div>

                        <div className="">
                            <img src={guy} className="w-[35px] h-[35px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorsPage;
