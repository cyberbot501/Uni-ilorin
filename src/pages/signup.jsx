import React, { useState } from "react";
import SIDEBAR from "../layout/sideBar";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    faculty: "",
    department: "",
    matricNumber: "",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidationErrors = (errors) => {
    let message = "";
    if (errors.includes("firstName must be a string")) message += "First name must be a string. ";
    if (errors.includes("firstName should not be empty")) message += "First name should not be empty. ";
    if (errors.includes("lastName must be a string")) message += "Last name must be a string. ";
    if (errors.includes("lastName should not be empty")) message += "Last name should not be empty. ";
    if (errors.includes("email must be an email")) message += "Email must be valid. ";
    if (errors.includes("matric number is not strong enough")) message += "Matric number is not strong enough. ";
    if (errors.includes("phoneNumber must be a number")) message += "Phone number must be a number. ";
    if (errors.includes("phoneNumber should not be empty")) message += "Phone number should not be empty. ";
    if (errors.includes("gender must be a string")) message += "Gender must be a string. ";
    if (errors.includes("gender should not be empty")) message += "Gender should not be empty. ";
    if (errors.includes("department must be a string")) message += "Department must be a string. ";
    if (errors.includes("department should not be empty")) message += "Department should not be empty. ";
    if (errors.includes("faculty must be a string")) message += "Faculty must be a string. ";
    if (errors.includes("faculty should not be empty")) message += "Faculty should not be empty. ";
    setErrorMessage(message);
  };

  const signup = async (credentials) => {
    setErrorMessage("");
    try {
      const response = await fetch("https://health-care-tkym.onrender.com/auth/student/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (response.ok) {
        navigate("/dashboard");
      } else {
        handleValidationErrors(result.errors);
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
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
              value={formData.email}
              onChange={handleInputChange}
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
                value={formData.firstName}
                onChange={handleInputChange}
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
                value={formData.lastName}
                onChange={handleInputChange}
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
                value={formData.gender}
                onChange={handleInputChange}
                className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px] bg-white border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
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
                value={formData.faculty}
                onChange={handleInputChange}
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
                value={formData.department}
                onChange={handleInputChange}
                placeholder="e.g Department of Computer Science"
                className="md:w-[305px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              />
            </label>

            <label className="">
              <p className="font-robo font-medium md:text-[20px] text-[12px]">Matric Number</p>
              <input
                type="text"
                name="matricNumber"
                value={formData.matricNumber}
                onChange={handleInputChange}
                placeholder="Enter Your Matric Number"
                className="md:w-[363px] w-[343px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
                required
              />
            </label>
          </div>

          <label className="">
            <p className="font-robo font-medium md:text-[20px] text-[12px]">Phone Number</p>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Your Phone Number"
              className="md:w-[675px] w-[345px] md:h-[50px] h-[40px] pl-[10px] border-[#D3D3D3] border-[1px] outline-none text-[#D3D3D8] rounded-[5px] font-robo font-medium md:text-[18px] text-[12px]"
              required
            />
          </label>

          <button
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