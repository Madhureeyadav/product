import React ,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

  const [theme,setTheme]=useState('light');

  useEffect(() => {
    const savedTheme =localStorage.getItem('theme');
    if(savedTheme){
      setTheme(savedTheme);
    }
  },[]) ;

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme',theme);
  },[theme]);

  const toogleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' :'light';
    setTheme(newTheme);
  };
  return (
    <div className="flex justify-evenly items-center bg-blue-900 text-white p-4">
      <div className="flex items-center ">
        {/* Adjust the src attribute with the actual path or URL of your logo */}
       <div><NavLink to="/">
          <img src="/frame.png" alt="logo" className="h-10 w-15" />
        </NavLink></div> 
        <div>
        <nav className="hidden md:flex space-x-4 ml-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" activeClassName="font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName="font-bold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Category" activeClassName="font-bold">
             
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName="font-bold">
              Contact
              </NavLink>
            </li>
          </ul>
          <button onClick={toogleTheme} className="border-2">Toggle Theme</button>
        </nav>
        
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {!isLoggedIn && (
          <>
            <NavLink to="/Signin" activeClassName="font-bold">
              <button className="btn-primary">Signup</button>
            </NavLink>
            <NavLink to="/Loginup" activeClassName="font-bold">
              <button className="btn-secondary">Login</button>
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavLink to="/Logout">
              <button
                className="btn-secondary"
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success('Logged out');
                }}
              >
                Logout
              </button>
            </NavLink>
            <NavLink to="/Dashboard" activeClassName="font-bold">
              <button className="btn-primary">Dashboard</button>
            </NavLink>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;
