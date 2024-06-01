import React from 'react'
import missions from '../../assets/Group.svg'
import vision from '../../assets/Group (1).svg'

export default function mission() {
  return (
    <div className='px-7 md:px-7 flex flex-col gap-7 md:gap-0 items-center md:flex md:flex-row md:justify-between pt-10 pb-10'>
        <div className='md:w-[638px] md:h-[233px] w-[100%] h-[200px] bg-white shadow-2xl rounded-[7px] md:flex md:flex-row flex flex-col text-center md:text-left items-center gap-1 px-2'>
            <img src={missions} alt="" className='w-[61px] h-[57px]'/>
            <div>
                <h2 className='font-robo font-semibold text-[15px] md:text-[30px]'>Our Mission</h2>
                <p className='font-robo font-medium text-[15px] md:text-[20px]'>“To optimize healthcare delivery at the unilorin clinic through
                    innovative technology, prioritizing patient care, accessibility,
                    and satisfaction”
                </p>
            </div>

        </div>

        <div className='md:w-[638px] md:h-[233px] w-[100%] h-[200px] bg-white shadow-2xl rounded-[7px] md:flex md:flex-row flex flex-col text-center md:text-left items-center gap-1 px-1'>
            <img src={vision} alt="" className='w-[61px] h-[57px] pt-2 md:pt-0'/>
            <div>
                <h2 className='font-robo font-semibold text-[15px] md:text-[30px]'>Our Vision</h2>
                <p className='font-robo font-medium text-[15px] md:text-[20px]'>“To optimize healthcare delivery at the unilorin clinic through
                    innovative technology, prioritizing patient care, accessibility,
                    and satisfaction”
                </p>
            </div>

        </div>
    </div>
  )
}
