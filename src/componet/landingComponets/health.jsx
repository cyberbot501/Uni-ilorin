import React from 'react'
import serimg from '../../assets/image 3.svg'

const healthsData = [
    {
        id: 1,
        image: serimg,
        name: "Regular check-up",
        dis: "Schedule regular visits with your healthcare provider for preventive screenings, vaccinations, and overall health maintenance. Always pay attention to your body signals.",
    },

    {
        id: 2,
        image: serimg,
        name: "Eat well",
        dis: "Schedule regular visits with your healthcare provider for preventive screenings, vaccinations, and overall health maintenance. Always pay attention to your body signals.",
    },

    {
        id: 3,
        image: serimg,
        name: "Practice good hygiene",
        dis: "Schedule regular visits with your healthcare provider for preventive screenings, vaccinations, and overall health maintenance. Always pay attention to your body signals.",
    },

]

export default function health() {
  return (
    <div className='bg-[#ffffff]'>
        <div className='text-center pt-10'>
            <h1 className='font-robo font-semibold text-[30px] md:text-[50px] text-[#605F5F]'>Health Tips</h1>
            <h2 className='font-robo font-medium text-[15px] md:text-[25px] text-[#605F5F]'>Take a look at what people say about Us</h2>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 px-7 gap-8 pt-8 pb-10 place-items-center'>
            {healthsData.map((healths, index)=>(
            <div key={index} className='w-[300px] md:w-[415px] h-[456px] md:h-[536px] rounded-[10px] bg-white flex flex-col gap-4 justify-ends shadow-lg'>
                <img src={healths.image} alt="" className='w-[300px] h-[231px] md:w-[415px] md:h-[319px] '/>
                <h2 className='text-[20px] md:text-[25px] font-robo font-medium px-2'>{healths.name}</h2>
                <p className='text-[15px] md:text-[19px] font-robo font-medium text-[#5F5E5E] px-2'>{healths.dis}</p>
            </div>
            ))}
        
        </div>
    </div>
  )
}
