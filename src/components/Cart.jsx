import { AiFillStar } from "react-icons/ai"
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const Cart = () => {

    const items = useSelector(store => store?.cart?.items);



    console.log(items);
    return (
        items.length !== 0 ? (
            <div className="parent w-full flex justify-center items-start bg-black/10 m-10">
                <div className="childParent w-3/4 flex flex-col justify-between bg-yellow-200">
                    <div className="left w-2/3 bg-pink-200 flex flex-col justify-center items-center">
                        <div className="topSticky w-full">
                            <div className="firstresNameDetails flex justify-between w-full p-2 bg-red-500">
                                <div className="left">
                                    <h1 className="name text-lg font-bold font-open">{items[0]?.resName}</h1>
                                    <p>{items[0]?.cuisines.join(", ")}</p>

                                    <p>{items[0]?.areaName + " " + items[0]?.deliveryDistance}</p>
                                </div>
                                <div className="res-img right flex flex-col justify-around p-1 items-center border-[1px] border-gray-300 rounded-xl">
                                    <div className="rating font-bold text-green-700 flex justify-center items-center gap-[2px]">
                                        <AiFillStar /><span>4.0</span>
                                    </div>
                                    <div className="krating font-open text-[0.65rem] font-semibold text-gray-500">
                                        <p>10K+ ratings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle bg-yellow-300 w-full mt-5 py-4">
                            {
                                items.map((it) => {
                                    return (
                                        <div key={it.id} className="flex items-center justify-between w-full bg-red-300 gap-2 my-2 py-5">
                                            <div className="py-1"> {it.veg === "VEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : (it.veg) === "NONVEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" /> : ""}</div>
                                            <div className="namePrice flex justify-between items-center bg-blue-300 w-full px-4">
                                                <div className="name">
                                                    {it.name}
                                                </div>
                                                <div className="btn flex justify-between items-center gap-2 py-1 px-3 border-2 border-slate-500">
                                                    <button>-</button>
                                                    <div>{it.quantity}</div>
                                                    <button>+</button>
                                                </div>
                                                <div className="price">
                                                    ₹ {it.quantity * it.price}
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="bottomSticky">

                        </div>
                    </div>
                    <div className="right p-10 w-1/3 bg-green-300 flex flex-col justify-center items-center">
                        <div className="delivery">

                        </div>
                        <div className="payment">

                        </div>
                    </div>
                </div>
            </div>
        )
            :
            (
                <div className="shimmer">
                    <Shimmer />
                </div>
            )
    )
}

export default Cart;


