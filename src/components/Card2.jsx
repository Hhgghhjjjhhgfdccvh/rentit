import React from 'react';

const Card2 = () => {
  return (
    <div className="flex justify-center border  font-poppins rounded-lg shadow-md p-4 lg:w-full w-screen lg:px-2  lg:px-gap-x-2 gap-1">
      <img 
        src="/images/Rec3.png"
        alt="iPhone 14 Pro Max with Apple M1 chip" 
        className="lg:w-full w-3/5 h-4/5  rounded-t-lg"
      />
      <div className="p-4 text-balance lg:text-base text-xs">
        <h2 className="text-lg font-bold">iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)</h2>
        <p className="text-gray-600 ">You can rent it at the best price</p>
        <p className="lg:text-2xl text-xl font-semibold mt-2">₹9,900.00 / mo</p>
        <div className="flex lg:flex-row flex-col items-center  mt-2">
          <div className="flex space-x-1 text-yellow-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z"/></svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z"/></svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z"/></svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.503a1 1 0 00.95.69h4.742c.969 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.462 4.503c.3.921-.755 1.688-1.538 1.118l-3.833-2.783a1 1 0 00-1.176 0l-3.833 2.783c-.783.57-1.838-.197-1.538-1.118l1.462-4.503a1 1 0 00-.364-1.118L2.06 9.93c-.783-.57-.381-1.81.588-1.81h4.742a1 1 0 00.95-.69L9.049 2.927z"/></svg>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 010 7.292m-1 2.354V21m0-14a4 4 0 011 7.742m4 1.006V21m0-14a4 4 0 00-1-7.742m-1 0v14m1 2.354V21" /></svg>
          </div>
          <span className="text-gray-600 ml-2">0 rating</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
