"use client"
import React,{useState} from 'react';
import { FaBell } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import flag from '../images/Group 1.jpg';

const HeaderTop = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="mx-4 w-screen lg:w-full">
      <nav className="bg-white shadow lg:p-6 p-2 gap-2 rounded-lg">
        <div className="container flex  gap-6 lg:flex-row  lg:justify-between  lg:gap-x-12">
          <div className="flex  lg:flex-row flex-col gap-2 space-x-0 lg:space-x-4">
          
            <div className="relative mt-2 lg:mt-0">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300  rounded-lg lg:py-2 lg:px-4 pl-10 w-4/5 lg:w-96 py-1 px-1 text-sm lg:text-lg"
              />
            </div>
            <span className="font-bold font-poppins text-xl lg:flex hidden  text-black">Rent</span>
            <button className="relative lg:hidden" onClick={toggleClass} >
              <FaBars/>
            </button>
          </div>
          <div className="flex items-center justify-center  lg:justify-start gap-x-4  mt-2 lg:mt-0">
            <select className="border border-gray-300 font-poppins text-sm lg:text-lg rounded lg:px-2 lg:py-1">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <button className="text-red-500 text-3xl">♥</button>
            <button className="relative">
              <FaBell/>
            </button>
           
            <button className="bg-customBlue font-poppins text-white lg:px-4 lg:py-2 lg:text-lg text-sm rounded py-1 px-1">Take rent</button>
            <button className="bg-white font-poppins text-customBlue lg:px-4 lg:py-2 lg:border-2 border-2 text-sm lg:text-lg py-1 px-1 border-customBlue rounded">Put on</button>
          </div>
        </div>
        <div className={`lg:static absolute lg:min-h-fit ${isToggled ? 'top-[9%]' : 'top-[-100%]'} z-[100]  bg-slate-100 min-h-[60vh] lg:bg-white left-0  w-full flex items-center  lg:mx-10 lg:mt-4`}>
          <div className='flex gap-x-6'>
          <ul className="  flex lg:flex-row flex-col  ml-6 justify-center lg:justify-start gap-x-4 gap-y-2 font-poppins text-gray-600">
            <li><button className="bg-customBlue font-poppins text-white px-4 py-2 rounded">Delhi NCR</button></li>
            <li className="font-semibold text-customBlue">Fresh</li>
            <li>Today's Deals</li>
            <li>Dresses</li>
            <li>Tops and Blouses</li>
            <li>Skirts</li>
            <li>Shoes</li>
            <li>Handbags</li>
            <li>Jewelry</li>
            <li>Sunglasses</li>
            <li>Hats and Caps</li>
            <li>All Categories</li>
          </ul>
          <span className="font-bold font-poppins text-2xl flex lg:hidden text-black">Rent</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;
