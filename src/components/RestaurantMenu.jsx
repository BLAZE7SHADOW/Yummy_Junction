import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
// import { initialValue, reducerFunction } from "./reducer/reducer";

const ResturantMenu = () => {
    const [menuData, setMenuData] = useState(null);
    const [offers, setOffers] = useState(null);
    const [recommendedVeg, setRecommendedVeg] = useState(null);
    const [recommendedNonVeg, setRecommendedNonVeg] = useState(null);
    const [showRecommended, setShowRecommended] = useState(false);

    // const [state, dispatch] = useReducer(initialValue, reducerFunction);


    const { resId } = useParams();



    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const fData = await data.json();

            setMenuData(fData?.data?.cards[0]?.card?.card?.info);

            // dispatch({ type: "MENU_DATA", payload: fData?.data?.cards[0]?.card?.card?.info })




            setOffers(fData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);

            setRecommendedVeg(fData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            setRecommendedNonVeg(fData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);





        }
        catch (err) {
            console.log(err);
        }

    }

    // console.log(menuData);

    useEffect(() => {
        fetchMenu();
    }, [resId])




    if (menuData === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, areaName, avgRatingString, totalRatingsString } = menuData;
    const { lastMileTravelString, deliveryTime } = menuData.sla;







    return (
        <>
            <div className="main w-full flex flex-col justify-center items-center">
                <div className="mainBodyRestaurantMenu flex flex-col items-center bg-red-300 w-[50%]">
                    <div className="firstresNameDetails flex justify-between w-full p-2">
                        <div className="left">
                            <h1 className="name text-lg font-bold font-open">{name}</h1>
                            <p>{cuisines.join(", ")}</p>

                            <p>{areaName + " " + lastMileTravelString}</p>
                        </div>
                        <div className="right flex flex-col justify-around p-1 items-center border-[1px] border-gray-300 rounded-xl">
                            <div className="rating font-bold text-green-700 flex justify-center items-center gap-[2px]">
                                <AiFillStar /> <span>{avgRatingString}</span>
                            </div>
                            <div className="krating font-open text-[0.65rem] font-semibold text-gray-500">
                                <p>{totalRatingsString}</p>
                            </div>
                        </div>
                    </div>
                    <div className="secondTimeAndOffers flex flex-col bg-yellow-300 w-full ">
                        <div className="timeandprice w-full flex justify-start gap-5 p-3">
                            <div className="time flex items-center gap-2 font-open text-black/80 font-bold">
                                <MdOutlineTimelapse className="timeicon text-2xl" />  <span className="dtime font-[750]">{deliveryTime} MINS</span>
                            </div>
                            <div className="price flex items-center gap-2 font-open text-black/80 ">
                                <HiOutlineCurrencyRupee className="rupeeicon text-2xl font-thin" />  <span className="costmsg font-bold">{costForTwoMessage}</span>
                            </div>
                        </div>
                        <div className="offers w-full flex justify-between gap-2">
                            {
                                offers?.map((res) => (
                                    <div key={res.info.offerIds} className="singleoffer w-[25%] border-[1px] border-black">
                                        <div className="offerpercentage">
                                            <h1>{res.info.header}</h1>
                                        </div>
                                        <div className="offercode">
                                            <p>{res.info.couponCode}</p>
                                            <p>{res.info.description}</p>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>

                    <div className="items w-full flex flex-col gap-5 bg-orange-400">
                        <div className="thirdRecommended bg-pink-500 w-full flex flex-col gap-5 cursor-pointer" >

                            <div className="summaryData flex justify-between p-4 pt-6" onClick={() => setShowRecommended(!showRecommended)}>
                                <span className="summary text-xl font-open font-bold"> Recommended ({(recommendedVeg ? (recommendedVeg?.length) : (recommendedNonVeg?.length))})</span>
                                <span>{showRecommended ? "-" : "+"}</span>
                            </div>
                            {
                                showRecommended &&
                                (recommendedVeg ? (recommendedVeg) : (recommendedNonVeg))?.map((res) => (

                                    <div key={res.card.info.id} className=" w-full bg-green-400">
                                        <div className="d">
                                            <div className="name"> {(res?.card?.info?.itemAttribute?.vegClassifier) === "VEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : (res?.card?.info?.itemAttribute?.vegClassifier) === "NONVEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" /> : ""}</div>
                                            <div className="name">{res?.card?.info?.name}</div>
                                            <div className="pricing flex w-2/3  items-center">
                                                {
                                                    (res?.card?.info?.variantsV2?.variantGroups)?.map((item) => ((item.variations)?.map((innerPrice) => innerPrice)))
                                                        ?
                                                        (res?.card?.info?.variantsV2?.variantGroups)?.map((item) => ((item.variations)?.map((innerPrice) => ((
                                                            <div key={innerPrice.id} className="">
                                                                {
                                                                    innerPrice.name === 'Half' ?
                                                                        <span>₹{innerPrice.price}</span> : ""
                                                                }
                                                            </div>
                                                        ))))) :
                                                        <div className="flex gap-16">
                                                            <span>₹ {(res?.card?.info?.price / 100)}</span>
                                                        </div>
                                                }
                                            </div>
                                            {/* {(res?.card?.info?.variantsV2?.pricingModels)?.map((item) => ((


                                                <div key={item.id} className="flex gap-16">
                                                    <span>p{item.price}</span>

                                                </div>

                                            )))} */}



                                            <div className="name">{res?.card?.info?.description}</div>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>





        </>
    )
}

export default ResturantMenu
