import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import SIDEBAR from '../layout/sideBar';
import LOGO from '../assets/image 1.svg';

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    login(credentials);
  };

  const login = async (credentials) => {
    setErrorMessage('');

    try {
      const response = await fetch('https://health-care-tkym.onrender.com/auth/student/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.api_token);
        setUser({ name: data.name, email: data.email }); // Set user data
        navigate('/dashboard'); 
      } else {
        const errorData = await response.json();
        if (errorData?.error?.message === 'User not found') {
          setErrorMessage('User does not exist. Please sign up first.');
        } else if (errorData?.error?.message === 'Incorrect password') {
          setErrorMessage('Incorrect password. Please try again.');
        } else {
          handleValidationErrors(errorData?.error?.message || 'Something went wrong');
        }
      }
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong');
    }
  };

  const handleValidationErrors = (message) => {
    if (message.includes('email should not be empty')) {
      setErrorMessage('Email should not be empty');
    } else if (message.includes('email must be an email')) {
      setErrorMessage('Please enter a valid email address');
    } else if (message.includes('password should not be empty')) {
      setErrorMessage('Password should not be empty');
    } else {
      setErrorMessage(message);
    }
  };

  return (
    <div>
      <div>
        <SIDEBAR />
      </div>

      <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] xl:pl-[560px] bg-[#E1E1E1] flex flex-col justify-center items-center gap-7">
        <h1 className="font-robo md:text-[35px] font-medium text-[22px]">
          Sign In
        </h1>

        <div className="w-[130px] h-[130px] md:w-[196px] md:h-[196px]">
          <img src={LOGO} alt="Logo" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-[-50px]">
          <label>
            <p className="font-robo font-medium md:text-[20px] text-[15px]">
              Email
            </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter Your Email Address"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
              required
            />
          </label>

          <label>
            <p className="font-robo font-medium md:text-[20px] text-[15px]">
              Password
            </p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
              required
            />
          </label>
          <p className="text-[#BDBBBB] text-right md:text-[18px] text-[12px] cursor-pointer">
            Forgotten Matric number?
          </p>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <button
            type="submit"
            className="md:text-[20px] text-[15px] font-medium text-[#ffffff] rounded-[5px] bg-[#284904] hover:bg-[#8EB861] md:w-[493px] w-[293px] md:h-[50px] h-[40px]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}