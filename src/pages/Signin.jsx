// SignupForm.js

import React from 'react';

import Template from '../components/Template';

const Signin = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with study Notion for free"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career"
      formtype="Signup"
      setIsLoggedIn={setIsLoggedIn}
    />
      
   
  );
};

export default Signin;

