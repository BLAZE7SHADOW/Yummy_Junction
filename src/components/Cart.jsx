
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { MENU_IMG_API } from "../utils/constant";
import { useRef } from "react";

const Cart = () => {
    let totalAmount = useRef(0);
    const items = useSelector(store => store?.cart?.items);

    const totalHandler = (price) => {
        totalAmount.current = Number(totalAmount.current) + Number(price);
    }


    return (
        items.length !== 0 ? (
            <div className="parent w-full flex justify-center items-center bg-black/10 pb-36 mt-5">
                <div className="childParent w-3/4 flex  justify-between">
                    <div className="left w-2/3  flex flex-col justify-center items-center ">
                        <div className="topSticky w-full sticky top-0">
                            <div className="firstresNameDetails flex justify-between w-full p-2">
                                <div className="left">
                                    <h1 className="name text-lg font-bold font-open">{items[0]?.resName}</h1>
                                    <p>{items[0]?.cuisines.join(", ")}</p>

                                    <p>{items[0]?.areaName + " " + items[0]?.deliveryDistance}</p>
                                </div>
                                <div className="res-img  w-20 items-center rounded-xl">

                                    <img src={MENU_IMG_API + items[0].image} alt="" className="rounded-xl" />

                                </div>
                            </div>
                        </div>
                        <div className="middle w-full ">
                            {
                                items.map((it) => {

                                    totalHandler(it?.price)


                                    return (
                                        <div key={it.id} className="flex items-center justify-between w-full  gap-2 my-2 ">
                                            <div className="py-1"> {it.veg === "VEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : (it.veg) === "NONVEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" /> : ""}</div>
                                            <div className="namePrice flex justify-between items-center  w-full px-4">
                                                <div className="name w-[40%]">
                                                    {it.name}
                                                </div>
                                                <div className="btn flex justify-between items-center gap-2 py-1 px-3 border-2 border-slate-500">
                                                    <button>-</button>
                                                    <div>{it.quantity}</div>
                                                    <button>+</button>
                                                </div>
                                                <div className="price w-20 ">
                                                    ₹ {it?.quantity * it?.price}
                                                    {/* {() => setTotalAmount(totalAmount + (it?.quantity * it?.price))} */}
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="mt-2 sticky bottom-0  w-full">
                            <button className="flex bg-[rgb(103,178,80)] w-full p-3 justify-between items-center text-white text-sm font-bold px-12" >
                                <div className="rate flex justify-start items-center w-2/4">
                                    TOTAL
                                </div>
                                <div className="flex justify-end items-center w-2/4"> ₹ {totalAmount.current}</div>
                            </button>
                        </div>
                    </div>
                    <div className="right p-5 w-1/3  items-center">

                        <div className="payment bg-white  w-full p-4 flex flex-col gap-2">
                            <div className="bill"> Bill Details</div>
                            <div className="price-det  px-2 flex flex-col gap-3 my-2">
                                <div className="item total flex justify-between items-center">
                                    <div className="head">
                                        Item Total
                                    </div>
                                    <div className="price w-16">
                                        ₹ {totalAmount.current}
                                    </div>
                                </div>
                                <div className="delivery flex justify-between items-center">
                                    <div className="head">
                                        Delivery Fee | 1.9 kms
                                    </div>
                                    <div className="price w-16">
                                        ₹ 40
                                    </div>
                                </div>
                            </div>
                            <div className="tax flex justify-between items-center my-2">
                                <div className="head">
                                    GST and Restaurant Charges
                                </div>
                                <div className="price w-20 px-2">
                                    ₹ 10
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 sticky bottom-0  w-full">
                            <button className="flex bg-[rgb(103,178,80)] w-full p-3 justify-between items-center text-white text-sm font-bold rounded-md" >
                                <div className="rate">PROCEED TO PAY</div>
                                <div className="w-24 p-1 ">₹ {totalAmount.current + 50}</div>
                            </button>
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


