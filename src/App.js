import Navbar1 from "./components/Navbar1"
import {Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from './pages/Cart'
const App=()=>{
  return (
  <div>
  <div className="bg-slate-900">
  <Navbar1/>
  </div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  </div>)
};
export default App;

// import './App.css';
// import { BrowserRouter,Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar';
// import Signin from './pages/Signin';
// import Loginup from './pages/Loginup';
// import Dashboard from './pages/Dashboard';
// import Logout from './pages/Logout'
// import Category from './pages/Category'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import React,{useState} from "react";
// import Footer from './components/Footer'

// const App=() =>{

//    const [theme,setTheme]=useState('light');
// const [isLoggedIn,setIsLoggedIn] = useState(false);
//  return (

//     <BrowserRouter>
//     <div className={`App ${theme}`}>
//       <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    
//       <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Category" element={<Category />} />
//         <Route path="/Contact" element={<Contact/>} />
//         <Route  path="/Signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
//         <Route  path="/Loginup" element={<Loginup setIsLoggedIn={setIsLoggedIn}/>}  />
//         <Route path="/Dashboard" element={<Dashboard/>} />
//         <Route path="/Logout" element={<Logout />} />
     
//       </Routes>
     
//       <Footer/>
//       </div>
//       </BrowserRouter>
    
//   );
// }

// export default App;

