import React, { useState } from "react";
import SIDEBAR from "../layout/sideBar";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    department: "",
    faculty: "",
    matricNo: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/dashboard')
  }

  // const validatePassword = (password) => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   return passwordRegex.test(password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.phone.trim()) {
      setErrorMessage("Phone number should not be empty");
      return;
    }

    // if (!validatePassword(credentials.password)) {
    //   setErrorMessage("Password is not strong enough");
    //   return;
    // }

    try {
      const res = await fetch("https://health-care-tkym.onrender.com/auth/student/signup", {
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
        document.cookie = `credentials=${credentials.lastName},${credentials.firstName}; path=/`;
        navigate("/login");
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData?.message || "Something went wrong");
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

      <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] xl:pl-[560px] bg-[#E1E1E1] flex flex-col justify-center items-center gap-4">
        <h1 className="font-robo md:text-[35px] font-medium text-[22px]">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="">
            <p className="font-robo font-medium md:text-[20px] text-[12px]">Email</p>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
              required
            />
          </label>

          <div className="md:flex md:flex-row md:justify-center md:gap-3 flex flex-col gap-4">
            <label className="">
              <p className="font-robo font-medium md:text-[20px] text-[12px]">First Name</p>
              <input
                type="text"
                name="firstName"
                value={credentials.firstName}
                onChange={handleChange}
                placeholder="Enter Your First Name"
                className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              />
            </label>

            <label className="">
              <p className="font-robo font-medium md:text-[20px] text-[12px]">Last Name</p>
              <input
                type="text"
                name="lastName"
                value={credentials.lastName}
                onChange={handleChange}
                placeholder="Enter Your Last Name"
                className="md:w-[363px] w-[343px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              />
            </label>
          </div>

          <div className="md:flex md:flex-row md:justify-center md:gap-3 flex flex-col gap-4">
            <label className="">
              <p className="font-robo font-medium md:text-[20px] text-[12px]">Gender</p>
              <select
                name="gender"
                value={credentials.gender}
                onChange={handleChange}
                className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px] bg-white border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              >
                <option value="" hidden>
                  Select Gender
                </option>
                <option value="female" className="text-black">
                  Female
                </option>
                <option value="male" className="text-black">
                  Male
                </option>
              </select>
            </label>

            <label className="">
              <p className="font-robo font-medium md:text-[20px] text-[12px]">Faculty</p>
              <input
                type="text"
                name="faculty"
                value={credentials.faculty}
                onChange={handleChange}
                placeholder="e.g Faculty of CIS"
                className="md:w-[363px] w-[343px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              />
            </label>
          </div>

          <div className="md:flex md:flex-row md:justify-center md:gap-3 flex flex-col gap-4">
            <label className="">
              <p className="font-robo font-medium md:text-[20px] text-[12px]">Department</p>
              <input
                type="text"
                name="department"
                value={credentials.department}
                onChange={handleChange}
                placeholder="e.g Department of Computer Science"
                className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              />
            </label>

            <label className="">
              <p className="font-robo font-medium md:text-[20px] text-[12px]">Matric Number</p>
              <input
                type="text"
                name="matricNo"
                value={credentials.matricNo}
                onChange={handleChange}
                placeholder="Enter Your Matric Number"
                className="md:w-[363px] w-[343px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              />
            </label>
          </div>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text-[12px]">Phone Number</p>
            <input
              type="text"
              name="phone"
              value={credentials.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
              required
            />
          </label>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text-[12px]">Password</p>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
              required
            />
          </label>

          <button
            onClick={handleSignupClick}
            type="submit"
            className="bg-[#1A1A1A] text-white md:w-[675px] w-[345px] md:h-[50px] h-[40px] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
          >
            Sign Up
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}

        <NavLink
          to="/login"
          className="font-robo font-medium text-[#1A1A1A] md:text-[20px] text-[12px] mt-4"
        >
          Already have an account? Login
        </NavLink>
      </div>
    </div>
  );
}