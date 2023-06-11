

import { AiFillStar } from "react-icons/ai";



const RestaurantCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { resData } = props;


  const {
    cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime,

    // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  } = resData?.data;

  const rateColor = avgRating >= 4 ? "bg-green-500" : "bg-orange-500";

  return (
    <div className="card border-[1.5px] border-transparent hover:border-solid hover:border-black/10 hover:shadow-lg p-4 cursor-pointer">
      <div className="res-card w-[16.2rem] min-h-[18rem] flex flex-col justify-start items-start gap-3 ">
        <img className="res-logo w-full" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
        <div className="name-details  flex flex-col justify-between items-start gap-1">
          <h3 className="resname  font-semibold ">{name}</h3>
          <h6 className="cuisines text-slate-600 text-[0.79rem] line-clamp-2">{cuisines.join(", ")}</h6>
        </div>

        <div className="flex flex-row gap-4 justify-between items-center w-full">
          <div className={`rating ${rateColor} px-[0.3rem] py-[0rem] flex flex-row items-center gap-1 font-open text-xs font-semibold text-white`}>
            <AiFillStar className='staricon ' /><span className="number text-[0.8rem]">{avgRating}</span>
          </div>
          <div className="deliveryTime font-open text-xs font-semibold text-gray-500">
            {deliveryTime} MINS
          </div>
          <div className="costOfTwo font-open text-xs  font-semibold text-gray-500">
            ₹{costForTwo / 100} FOR TWO
          </div>


        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;