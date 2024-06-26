
const FeaturedItem = () => {
    return (
      <div className="relative w-full  sm:w-full max-w-600px overflow-hidden rounded-lg">
        <div className="absolute top-2 left-2 bg-slate-200 text-white font-poppins px-3 py-1 rounded">Rent</div>
        <img src= "/images/Grou.png" alt="Featured Item" className="w-592px h-734px rounded-lg" />
        <div className="absolute bottom-14 left-5 text-white">
        <img src= "/images/use.png" alt="Featured Item" className="w-592px h-734px z-[10] rounded-lg" />
          <a href="#" className="inline-block font-poppins text-white px-4 py-2 mt-2 ml-12 rounded">Check it out &gt;&gt;&gt;</a>
        </div>
      </div>
    );
  };
  
  export default FeaturedItem;
  