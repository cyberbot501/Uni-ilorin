import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import SIDEBAR from '../layout/sideBar';
import LOGO from '../assets/image 1.svg';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://health-care-tkym.onrender.com/auth/student/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.data.api_token);
        window.location.href = "/dashboard";
      } else {
        console.log(errorMessage);
        const errorData = await res.json();
        setErrorMessage(errorData?.error?.message || "Something went wrong");
      }
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
              value={credentials.email}
              onChange={handleChange}
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
              value={credentials.password}
            onChange={handleChange}
              placeholder="Enter Password"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
              required
            />
          </label>
          <p className="text-[#BDBBBB] text-right md:text-[18px] text-[12px] cursor-pointer">
            Forgotten Matric number?
          </p>
          {errorMessage && <div id="error">{errorMessage}</div>}
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