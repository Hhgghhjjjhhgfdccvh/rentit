"use client"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-0 lg:mx-10 mt-4">
      <div className="flex justify-between items-center">
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between gap-y-4 lg:gap-x-12">
          <div className="flex flex-col lg:flex-row items-center gap-x-8 space-x-0 lg:space-x-4">
            <span className="font-bold font-poppins text-xl  text-black">Rent</span>
            <div className="relative mt-2 lg:mt-0">
              <input
                type="text"
                placeholder="What are you searching for?"
                className="border border-gray-300 rounded-lg py-2 px-4 pl-10 w-full lg:w-96"
              />
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-x-4 mt-2 lg:mt-0">
            <select className="border border-gray-300 font-poppins rounded px-2 py-1">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <button className="text-red-500 text-3xl">♥</button>
            <button className="relative">
              <FaBell/>
            </button>
           
          </div>
        </div>
        
        <button onClick={toggleMenu} className="lg:hidden">
         <FaBars color='black'/>
        </button>
      </div>
      <ul className={`flex-col lg:flex lg:flex-row flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 font-poppins text-gray-600 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <li><button className="bg-customBlue font-poppins text-white px-4 py-2 rounded">Delhi NCR</button></li>
        <li>
            <button className="bg-customBlue font-poppins text-white px-4 py-2  rounded">Take on Rent</button>
            <button className="bg-white font-poppins text-customBlue px-4 py-2 border-2 border-customBlue rounded">Put on Rent</button></li>
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
    </div>
  );
};

export default Head;
