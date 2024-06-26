import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import {FaTruck} from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import{FaShield} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className=" mt-8 lg:p-6 w-screen lg:w-full p-2   font-poppins text-left">
      <div className="flex lg:flex-row flex-col px-6 justify-center bg-gray-100 lg:h-40 h-full lg:justify-around pt-10  font-poppins border-b border-gray-300 pb-8 mb-8">
        <div className="lg:text-left font-poppins ">
         <div className='flex lg:gap-x-4 gap-y-4'>
          
         <FaLocationDot size="25px" color='#005D76' />
         <h3 className="text-lg font-poppins font-semibold mb-2"><span className='text-customBlue'>Free</span> Delivery</h3>
         </div>
          <p>Enjoy free delivery with every order.</p>
        </div>
        <div className="lg:text-center">
        <div className='flex gap-x-4'>
          <FaTruck size="25px" color='#005D76'/>
          <h3 className="text-lg font-poppins font-semibold mb-2"><span className='text-customBlue'>Wide</span> Delivery Range</h3>
          </div>
          <p>We deliver to various locations.</p>
        </div>
        <div className="lg:text-center">
        <div className='flex gap-x-4'>
          <FaShield size="25px" color='#005D76'/>
          <h3 className="text-lg font-poppins font-semibold mb-2"><span className='text-customBlue'>Safe</span> and Secure</h3>
          </div>
          <p>Your order is handled with care.</p>
        </div>
      </div>
      <div className="flex font-poppins justify-around mb-8 gap-x-2 lg:gap-x-8">
      <div>
          <h3 className="lg:text-lg text-sm font-semibold mb-4">Rent</h3>
          <a href="/" className="text-gray-700">Help</a>
        </div>
        <div>
          <h3 className="lg:text-lg text-sm font-semibold font-poppins mb-4">Popular Locations</h3>
          <ul className="list-none p-0 lg:text-lg text-sm">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div>
          <h3 className="lg:text-lg text-sm font-semibold mb-4">Trending Locations</h3>
          <ul className="list-none p-0 lg:text-lg text-sm">
            <li>Bhubaneswar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        <div>
          <h3 className="lg:text-lg text-sm font-semibold mb-4">More Links</h3>
          <ul className="list-none p-0 lg:text-lg text-sm">
            <li><a href="/" className="text-gray-700">About Us</a></li>
            <li><a href="/" className="text-gray-700">Blog</a></li>
            <li><a href="/" className="text-gray-700">Sitemap</a></li>
            <li><a href="/" className="text-gray-700">Legal & Privacy Information</a></li>
            <li><a href="/" className="text-gray-700">Contact us</a></li>
          </ul>
        </div>
        <div >
          <h3 className="lg:text-lg text-sm font-semibold mb-4">Follow Us</h3>
          <ul className="list-none p-0 lg:text-lg text-sm ">
            <li><FaInstagram size="25px" color='#005D76'/></li>
            <li><FaFacebook size="25px" color='#005D76'/></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm justify-center p-6 bg-customBlue text-white font-poppins h-full  border-t border-gray-300 pt-4">
        <p>All rights reserved © 2020-2024 Rent</p>
      </div>
    </footer>
  );
};

export default Footer;
