import React from 'react';
import HEROI from '../../assets/image 2.svg'; 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <div className="md:pt-[159px] pt-[65px]">
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img src={HEROI} alt="Hero" className="w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-left text-left md:gap-7 gap-3 md:px-60 px-16">
                <h1 className="font-robo md:text-[60px] text-[25px] font-bold text-white">
                  UNIVERSITY OF ILORIN CLINIC
                </h1>
                <h3 className="font-robo md:text-[40px] text-[15px] font-bold text-white">
                  Better By Far
                </h3>
                <button className="font-robo md:text-[18px] text-[10px] w-[101px] h-[25px] md:w-[191px] md:h-[45px] bg-[#7BAC46] text-white">
                  Book an Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img src={HEROI} alt="Hero" className="w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-left text-left md:gap-7 gap-3 md:px-60 px-16">
                <h1 className="font-robo md:text-[60px] text-[20px] font-bold text-white">
                  UNIVERSITY OF ILORIN CLINIC
                </h1>
                <h3 className="font-robo md:text-[40px] text-[15px] font-bold text-white">
                  Better By Far
                </h3>
                <button className="font-robo md:text-[18px] text-[10px] w-[101px] h-[25px] md:w-[191px] md:h-[45px] bg-[#7BAC46] text-white">
                  Book an Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img src={HEROI} alt="Hero" className="w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-left text-left md:gap-7 gap-3 md:px-60 px-16">
                <h1 className="font-robo md:text-[60px] text-[20px] font-bold text-white">
                  UNIVERSITY OF ILORIN CLINIC
                </h1>
                <h3 className="font-robo md:text-[40px] text-[15px] font-bold text-white">
                  Better By Far
                </h3>
                <button className="font-robo md:text-[18px] text-[10px] w-[101px] h-[25px] md:w-[191px] md:h-[45px] bg-[#7BAC46] text-white">
                  Book an Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img src={HEROI} alt="Hero" className="w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-left text-left md:gap-7 gap-3 md:px-60 px-16">
                <h1 className="font-robo md:text-[60px] text-[20px] font-bold text-white">
                  UNIVERSITY OF ILORIN CLINIC
                </h1>
                <h3 className="font-robo md:text-[40px] text-[15px] font-bold text-white">
                  Better By Far
                </h3>
                <button className="font-robo md:text-[18px] text-[10px] w-[101px] h-[25px] md:w-[191px] md:h-[45px] bg-[#7BAC46] text-white">
                  Book an Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img src={HEROI} alt="Hero" className="w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-left text-left md:gap-7 gap-3 md:px-60 px-16">
                <h1 className="font-robo md:text-[60px] text-[20px] font-bold text-white">
                  UNIVERSITY OF ILORIN CLINIC
                </h1>
                <h3 className="font-robo md:text-[40px] text-[15px] font-bold text-white">
                  Better By Far
                </h3>
                <button className="font-robo md:text-[18px] text-[10px] w-[101px] h-[25px] md:w-[191px] md:h-[45px] bg-[#7BAC46] text-white">
                  Book an Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img src={HEROI} alt="Hero" className="w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-left text-left md:gap-7 gap-3 md:px-60 px-16">
                <h1 className="font-robo md:text-[60px] text-[20px] font-bold text-white">
                  UNIVERSITY OF ILORIN CLINIC
                </h1>
                <h3 className="font-robo md:text-[40px] text-[15px] font-bold text-white">
                  Better By Far
                </h3>
                <button className="font-robo md:text-[18px] text-[10px] w-[101px] h-[25px] md:w-[191px] md:h-[45px] bg-[#7BAC46] text-white">
                  Book an Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </div>
  );
}