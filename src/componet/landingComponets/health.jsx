import React from 'react';
import serimg from '../../assets/image 3.svg';
import serim from "../../assets/health 2.svg";
import sering from "../../assets/health 3.svg";

const healthsData = [
    {
        id: 1,
        image: serimg,
        name: "Regular check-up",
        dis: "Schedule regular visits with your healthcare provider for preventive screenings, vaccinations, and overall health maintenance. Always pay attention to your body signals.",
    },

    {
        id: 2,
        image: serim,
        name: "Eat well",
        dis: "Focus on a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, carbonated drinks, sugar and excessive salt intake",
    },

    {
        id: 3,
        image: sering,
        name: "Practice good hygiene",
        dis: "Wash your hands regularly, cover your mouth when coughing or sneezing, and maintain proper hygiene to prevent the spread of germs and illness.",
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
            <div key={index} className='w-[100%] md:w-[415px] h-[456px] md:h-[536px] rounded-[10px] bg-white flex flex-col gap-4 justify-ends shadow-lg'>
                <img src={healths.image} alt="" className='w-[100%] h-[231px] md:w-[415px] md:h-[319px] rounded-t-[10px]'/>
                <h2 className='text-[20px] md:text-[25px] text-center md:text-left font-robo font-medium px-2'>{healths.name}</h2>
                <p className='text-[15px] md:text-[19px] text-center md:text-left  font-robo font-medium text-[#5F5E5E] px-2'>{healths.dis}</p>
            </div>
            ))}
        
        </div>
    </div>
  )
}
