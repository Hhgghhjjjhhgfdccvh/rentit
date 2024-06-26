import { FaShareAlt, FaHeart } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className={` p-4 text-center transition-transform transform hover:scale-105 ${!item.available ? 'opacity-50' : ''} h-54 md:h-100`}>
      <div className="flex flex-col md:flex-row items-center md:items-start text-slate-400">
        

        <img src={item.image} alt={item.title} className="w-full md:w-1/2 h-40 md:h-52 rounded-lg" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-2">
        <div className=" flex justify-center  font-semibold font-poppins rounded-lg">
          <button className="flex py-2 text-xl  gap-x-2 font-poppins rounded text-customBlue">
            Check it
            <FaAngleDoubleRight size="20px" color='#005D76' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;