import { FaShareAlt, FaHeart } from "react-icons/fa";

const ItemCard = ({ item }) => {
  return (
    <div className={`bg-white border border-gray-300 rounded-lg p-4 text-center shadow transition-transform transform hover:scale-105 ${!item.available ? 'opacity-50' : ''} h-96 md:h-100`}>
      <div className="flex flex-col md:flex-row items-center md:items-start text-slate-400">
        <div className="flex flex-col-reverse gap-y-4 md:gap-y-2 md:mr-4">
          <FaShareAlt />
          <FaHeart/>
        </div>

        <img src={item.image} alt={item.title} className="w-full md:w-1/2 h-40 md:h-52 rounded-lg" />
      </div>

      <h3 className="mt-2 text-[14px] font-poppins-semibold">{item.title}</h3>
      <div className="flex flex-col md:flex-row md:items-center mt-2">
        <p className="text-customBlue">{item.price}</p>
        <div className="max-w-14 max-h-6 mt-2 md:mt-0 md:ml-6 flex justify-center bg-gray-400 font-poppins rounded-lg">
          <button className=" py-2 font-poppins rounded text-white">
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

