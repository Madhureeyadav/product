import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
       toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
     toast.success("Account created");
    const accountData = { ...formData };
    console.log('printing account Data');
    console.log(accountData);
    navigate('/Dashboard');
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <div className="mb-4">
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">Student</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name<sup>*</sup>
          </label>
          <input
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
            placeholder="Enter First Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
           Last Name<sup>*</sup>
          </label>
          <input
            required
            type="text"
            name="lastName"
            onChange={changeHandler}
            placeholder="Enter last Name"
            value={formData.lastName}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email<sup>*</sup>
          </label>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter the email"
            value={formData.email}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* ... other input fields ... */}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password<sup>*</sup>
          </label>
          <div className="relative">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <span
              className="absolute right-0 top-0 mt-2 mr-2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Confirm  Password<sup>*</sup>
          </label>
          <div className="relative">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Enter Confirm Password"
              value={formData.confirmPassword}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <span
              className="absolute right-0 top-0 mt-2 mr-2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>
        {/* ... other input fields ... */}
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
