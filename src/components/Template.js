import React from 'react';
import SignupFrom from './SignupFrom';
import LoginFrom from './LoginFrom';
import { FcGoogle } from 'react-icons/fc';

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-8 bg-white shadow-md rounded p-8 md:flex items-center justify-center">
        <div className="md:w-1/2 md:mr-8">
          <h1 className="text-3xl font-extrabold mb-4 text-center">{title}</h1>
          <p className="text-gray-600 text-center mb-6">
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>
          {formtype === 'Signup' ? (
            <SignupFrom setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginFrom setIsLoggedIn={setIsLoggedIn} />
          )}
          <div className="mt-6 flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <p className="mx-4 text-sm text-gray-500">OR</p>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <div className="mt-7 justify-center text-center border-2 border-light flex p-2 space-x-3">
            <FcGoogle size={20} />
            <p>Sign in with Google</p>
          </div>
        </div>

        {/* Uncomment the following code if you want to include images */}
        <div className="mt-8 md:mt-0 bg-white shadow-md rounded p-8 md:flex items-center justify-center">
          <img
            src="./frame.png"
            alt="pattern"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
