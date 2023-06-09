// eslint-disable-next-line react/prop-types
const RestaurantCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { resData } = props;
  // console.log(props)
  // console.log(resData);

  const {
    cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime,

    // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  } = resData?.data;


  return (
    <div className="card border-[1.5px] border-transparent hover:border-solid hover:border-gray-400 p-4 cursor-pointer">
      <div className="res-card w-[16.2rem] min-h-[18rem] flex flex-col justify-start items-start  ">
        <img className="res-logo w-full" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="flex flex-row gap-4">
          <p>TIME : {deliveryTime}</p>
          <h4>₹{costForTwo / 100} FOR TWO</h4>
          <h4>{avgRating}</h4>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;