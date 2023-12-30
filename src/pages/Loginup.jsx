import React from 'react'

import Template from'../components/Template'

const LoginUp = (setIsLoggedIn) => {
  return (
    <Template 
    title="Welcome Back"
    desc1="build skills for today, tomorrow, and beyond"
    desc2="Esucation to future proof your career"
   
    formtype="Login"
    setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default LoginUp
