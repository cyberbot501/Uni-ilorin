import React from 'react'
import LOGO from '../assets/image 1.svg'

export default function intro() {  
  return (
    <div className='w-[100%] h-[100%] min-h-[100vh] flex flex-col justify-center items-center' >
        <div className='w-[196px] h-[169px] md:w-[130px] md:h-[130px]'>
            <img src={LOGO} alt=""/>
        </div>
        <div>
            <h1 className='text-[40px] font-normal text-black text-center mt-10 md:mt-5'>UNIVERSITY OF ILORIN</h1>
            <p className='text-[30px] font-normal text-black text-center mb-10 md:mt-5'>Better By Far</p>
        </div>
        <button className='text-[20px] font-medium text-[#ffffff] border-[1px] rounded-[5px] border-[#284904] bg-[#284904] w-[171px] h-[54px]'>GET STARTED</button>
    </div>
  )
}
