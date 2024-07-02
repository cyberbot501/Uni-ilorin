import React from 'react'
import serimg from '../../assets/Vector (1).png';
import serim from '../../assets/service 2.svg';
import sering from '../../assets/service 3.svg';
import serig from '../../assets/service 4.svg';
import seri from '../../assets/service 5.svg';
import serimgs from '../../assets/service 6.svg';


const serviceData = [
    {
        id: 1,
        image: serimg,
        name: "Registration",
        dis: "One Time Registration For Easy Access To Healthcare Services With Our Streamlined System For Hassle Free Appointments.",
    },

    {
        id: 2,
        image: serim,
        name: "Appointment Scheduling",
        dis: "One Time Registration For Easy Access To Healthcare Services With Our Streamlined System For Hassle Free Appointments.",
    },

    {
        id: 3,
        image: sering,
        name: "Appointment Rescheduling",
        dis: "One Time Registration For Easy Access To Healthcare Services With Our Streamlined System For Hassle Free Appointments.",
    },

    {
        id: 4,
        image: serig,
        name: "Notifications",
        dis: "One Time Registration For Easy Access To Healthcare Services With Our Streamlined System For Hassle Free Appointments.",
    },

    {
        id: 5,
        image: seri,
        name: "Medication Adherence Tracking System",
        dis: "One Time Registration For Easy Access To Healthcare Services With Our Streamlined System For Hassle Free Appointments.",
    },

    {
        id: 6,
        image: serimgs,
        name: "Health Tips",
        dis: "One Time Registration For Easy Access To Healthcare Services With Our Streamlined System For Hassle Free Appointments.",
    },




]

export default function services() {
  return (
    <div>
         <div className='bg-[#F3F6F6]'>
        <div className='text-center pt-10'>
            <h1 className='font-robo font-semibold text-[30px] md:text-[50px] text-[#605F5F]'>Our Services</h1>
            <h2 className='font-robo font-medium text-[15px] md:text-[25px] text-[#605F5F]'>Take a look at some of our key features</h2>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 px-7 gap-8 pt-8 pb-10 place-items-center'>
            {serviceData.map((service, index)=>(
            <div key={index} className='w-[100%] md:w-[406px] h-[300px] md:h-[378px] rounded-[10px] bg-white px-2 flex flex-col items-center justify-evenly'>
                <div className='border-1px border-[#598A23] bg-[#598A23] w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-[50px] md:rounded-[80px] place-content-center px-3 md:px-6'>
                    <img src={service.image} alt="" className='w-[31px] h-[31px] md:w-[41px] md:h-[41px] '/>
                </div>

                <h2 className='text-[20px] md:text-[25px] font-robo font-medium text-center'>{service.name}</h2>
                <p className='text-[15px] md:text-[19px] font-robo font-medium text-center text-[#5F5E5E]'>{service.dis}</p>
                <button className='w-[75px] md:w-[99px] h-[30px] md:h-[36px] rounded-[4px] bg-[#598A23] text-white text-[12px] md:text-[16px] font-robo font-medium text-center'>Click Here</button>
                
            </div>
            ))}
           
        </div>
    </div>


    <div className='bg-[#5198CC] flex flex-col items-center justify-evenly'>
        <h2 className='font-robo font-medium text-[15px] md:text-[25px] text-white text-center pt-10'>We Are Professionals</h2>
        <h1 className='font-robo font-semibold text-[30px] md:text-[50px] text-white text-center'>Professional Approach</h1>
        <h2 className='font-robo font-medium text-[20px] md:text-[40px] text-white text-center pb-5'>and Quality Services</h2>
        <button className='w-[135px] md:w-[210px] h-[40px] md:h-[56px] rounded-[4px] bg-[#598A23] text-white text-[12px] md:text-[16px] font-robo font-medium text-center mb-10'>Book an Appointment</button>
    </div>

    </div>
   
    
  )
}
