import React,{useState} from 'react'
import {toast} from 'react-hot-toast'

const Contact = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    number:" ",
    message:" ",

  });

  function changeHandler(event){
    setFormData((prevData)=>({
...prevData,
[event.target.name]:event.target.value
    }));

  }
    function submitHandler(event){
      event.preventDefault();
      toast.success('Successfully send');
    }
  
  return (
   <>
    <div className="h-48 md:h-72 top-0 left-0 w-full bg-cover bg-center opacity-70" style={{ backgroundImage: "url(/frame.png)" }}></div>
    <div className="w-full mx-auto md:flex md:justify-between gap-10 md:items-center bg-cover bg-center p-4 bg-slate-200 " >
    <div className="md:w-1/2 mb-8 md:mb-0 border-2 border-gray-300  bg-slate-100 rounded-md h-54">
      <div className=" ">Contact Us </div>
      <p className="text-gray-700">Mobile: 0123456789</p>
      <p className="text-gray-700">Mobile: 0123456789</p>
      
    </div>
    <div className="md:w-1/2 border-2 border-gray-300 p-6 rounded-md bg-white">
      <form onSubmit={submitHandler} className="">
  
    <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
    <input
      required
      type="text"
      id="name"
      name="name"
      onChange={changeHandler}
      placeholder="Enter your name"
      value={formData.name}
      className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
    />

    <label htmlFor="email" className="block mt-4 text-sm font-semibold text-gray-600">Email</label>
    <input
      required
      type="email"
      id="email"
      name="email"
      onChange={changeHandler}
      placeholder="Enter your email"
      value={formData.email}
      className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
    />

    <label htmlFor="number" className="block mt-4 text-sm font-semibold text-gray-600">Mobile Number</label>
    <input
      required
      type="tel"
      id="number"
      name="number"
      onChange={changeHandler}
      placeholder="Enter your mobile number"
      value={formData.number}
      className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
    />

    <label htmlFor="message" className="block mt-4 text-sm font-semibold text-gray-600">Message</label>
    <textarea
      required
      id="message"
      name="message"
      onChange={changeHandler}
      placeholder="Ask your inquiry"
      value={formData.message}
      className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
    ></textarea>
 <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
    Send
  </button>
 
  </form>
  </div>
  </div>
</>

  )
}

export default Contact
