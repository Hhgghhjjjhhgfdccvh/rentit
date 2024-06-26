import React from "react";
import ItemCard from "./itemCard";
import Card from "./Card"
import ReviewCard from "./ReviewCard"
import Card2 from './Card2'

function Deal() {
  const items = [
    {
      id: 1,
      title: "Inalsa Air Fryer Fry-Light-1400W",
      price: "₹4,627.00/mo",
      image: "/images/Rec.jpg",
      available: true,
    },
    {
      id: 2,
      title: "Oneplus Bullets Z2 Bluetooth Wireless",
      price: "₹1,699.00/mo",
      image: "/images/Rec3.png",
      available: true,
    },
    {
      id: 3,
      title: "New Fastrack Reflex Play| AMOLED Display",
      price: "₹5,699.00/mo",
      image: "/images/Rec4.png",
      available: true,
    },
    {
      id: 4,
      title: "Apple iPhone 13 (128GB) - Green",
      price: "₹76,900.00/mo",
      image: "/images/Rec3.png",
      available: true,
    },
    {
      id: 5,
      title: "Samsung Galaxy Tab S8+ - Wifi Only, Graphite",
      price: "₹74,998.00/mo",
      image: "/images/Rec2.png",
      available: true,
    },
  ];
  return (
    <div className="mx-4">
    <section className="sm:col-auto">
      <div className="w-full sm:w-[1517px] h-auto sm:h-[628px]">
        <img src="/images/deal.png" className="lg:w-full lg:h-full w-screen h-3/5 object-cover" />
      </div>
    </section>
  
    <section>
      <div className="flex-1 mr-0 lg:mr-5 flex-col flex justify-center">
        <h2 className="text-2xl font-bold font-poppins mb-4 mt-6 text-center lg:text-left">
          Today's Hot Deals
        </h2>
        <div className="flex justify-center items-center">
          <div className="border-b-4 border-customBlue border-dashed mb-4 w-full max-w-3xl"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  
    <section>
      <div className="flex-1 mr-0 lg:mr-5 flex-col flex justify-center">
        <h2 className="text-2xl font-bold font-poppins mb-4 mt-6 text-center lg:text-left">
          Your Searched Item
        </h2>
        <div className="flex justify-center items-center">
          <div className="border-b-4 border-customBlue border-dashed mb-4 w-full max-w-3xl"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  
    <section>
      <div className="relative w-full mt-14 flex justify-center">
        <img src="/images/Rectangle 3.png" className="absolute w-full sm:w-[1400px] h-auto sm:h-[600px] object-cover" />
        <p className="absolute lg:mt-40 text-customGold font-bold text-3xl mt-60 font-poppins">
          20% special offer
        </p>
        <img src="/images/Jewellery (1).png" className="absolute w-[200px] sm:w-[400px] h-auto sm:h-[150px]" />
      </div>
      <div className="relative w-full mt-72 flex gap-x-6 justify-center font-poppins">
        <p className="text-customGold">check it out</p>
      </div>
    </section>
  
    <section>
      <div className="flex-1 mr-0 lg:mr-5 lg:mt-80 flex-col flex justify-center">
        <h2 className="text-2xl font-bold font-poppins mb-4 mt-6 text-center lg:text-left">
          More Items
        </h2>
        <div className="flex justify-center items-center">
          <div className="border-b-4 border-customBlue border-dashed mb-4 w-full max-w-3xl"></div>
        </div>
        <div className="grid grid-cols-2  lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  
    <section>
      <div className="flex-1 mr-0 lg:mr-5 mt-20 flex-col flex justify-center">
        <h2 className="text-2xl font-bold font-poppins mb-4 mt-6 text-center lg:text-left">
          Review on Product
        </h2>
        <div className="flex justify-center items-center">
          <div className="border-b-4 border-customBlue border-dashed mb-4 w-full max-w-3xl"></div>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    </section>
  </div>
  
  );
}

export default Deal;
