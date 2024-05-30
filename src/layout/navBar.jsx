import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navBar.css"
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className='flex flex-row justify-between border-1px border-white bg-white w-[100%] h-[100px] items-center px-10'>
        <div>
            <h2 className='font-robo font-medium text-[25px]'>UNILORIN CLINIC</h2>
        </div>

        <div className='flex flex-row gap-10'>
            <NavLink className='font-robo font-medium text-[17px] text-[#000000] underline-from-left hover:text-[#598A23]'>Home</NavLink>
            <NavLink className='font-robo font-medium text-[17px] text-[#646363] underline-from-left hover:text-[#598A23]'>About Us</NavLink>
            <NavLink className='font-robo font-medium text-[17px] text-[#646363] underline-from-left hover:text-[#598A23]'>Service</NavLink>
            <NavLink className='font-robo font-medium text-[17px] text-[#646363] underline-from-left hover:text-[#598A23]'>Contact Us</NavLink>
        </div>

        <div>
            <button  onClick={handleLoginClick} className='font-robo font-medium text-[17px] w-[77px] h-[34px] rounded-[23px] bg-white'>Login</button>
            <button onClick={handleSignUpClick} className='w-[77px] h-[34px] rounded-[23px] bg-[#284904] text-white font-robo font-medium text-[17px]'>Sign up</button>
        </div>
    </div>
  )
}
