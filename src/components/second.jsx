// pages/index.js
import Head from "next/head";
import FeaturedItem from "./featureItem";
import ItemCard from "./itemCard";

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
  {
    id: 6,
    title: "Kodak Mini Shot 3 Retro - Yellow, Bluetooth",
    price: "₹74,998.00/mo",
    image: "/images/Rec1.png",
    available: false,
  },
];

export default function Second() {
  return (
    <div className="flex flex-col w-full items-center p-8">
  <Head>
    <title>Rental Items</title>
  </Head>
  <main className="flex w-full flex-col lg:flex-row">
    <div className="flex-1 flex justify-center mb-8 lg:mb-0">
      <FeaturedItem />
    </div>
    <div className="flex-1 mr-0 lg:mr-5 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-lg lg:text-xl font-bold font-poppins mb-4 text-center lg:text-left">
        Hot items are on rent for you
      </h2>
      <div className="flex justify-center items-center">
        <div className="border-b-4 border-customBlue border-dashed mb-4 w-full max-w-3xl"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </main>
</div>

  );
}
