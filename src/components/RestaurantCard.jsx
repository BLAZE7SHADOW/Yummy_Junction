// eslint-disable-next-line react/prop-types
const RestaurantCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { resName, cuisine } = props;
  // console.log(props)
  return (
    <div className="res-card w-[16rem] h-[18rem] border-4 border-red-300 p-2 hover:border-red-700 cursor-pointer">
      <img className="res-logo w-full" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ju1mcy62crozjge5jpmu" alt="" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <div className="flex flex-row gap-4">
        <p>RATING</p>
        <p>51 MINS</p>
        <p>RS199 FOR TWO</p>
      </div>
    </div>
  )
}

export default RestaurantCard;