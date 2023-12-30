import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginFrom = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // setIsLoggedIn(true);
    toast.success("Logged in");
    navigate("/Dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      
      <div className="mt-4">
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
      <Link to="#" className="mb-4 block text-sm text-blue-500 hover:underline">
        Forget Password
      </Link>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginFrom;



