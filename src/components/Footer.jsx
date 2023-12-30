import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-evenly">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <NavLink to="/">
            <img src="./frame.png" alt="logo" className="w-20 h-auto" />
          </NavLink>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="font-bold mb-2">Menu</div>
          <ul className="flex flex-col">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/category">Category</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="font-bold mb-2">Service</div>
          <ul className="flex flex-col">
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-use">Terms of Use</NavLink>
            </li>
            <li>
              <NavLink to="/refund-policy">Refund & Cancellation Policy</NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <div className="font-bold mb-2">Get in Touch</div>
          <p>Email Support: support@gmail.com</p>
        </div>
      </div>

      <hr className="border border-white my-8" />

      <div className="text-center">
        <p className="p-4">
          Copyright@ 2023 Product-Based Website - Helping Customers Find the Best Products
        </p>
      </div>
    </div>
  );
};

export default Footer;
