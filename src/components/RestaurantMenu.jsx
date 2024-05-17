import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
// import { MENU_IMG_API } from "../utils/constant";
// import { initialValue, reducerFunction } from "./reducer/reducer";
import ResMenu from "./ResMenu";
import ShimmerMenu from "./ShimmerMenu";

const ResturantMenu = () => {
    const [web, setWeb] = useState(true);
    const [menuData, setMenuData] = useState(null);
    const [offers, setOffers] = useState(null);
    const { resId } = useParams();



    const fetchMenu = async () => {
        try {

            const data = await fetch(web ? import.meta.env.VITE_MENU_API + resId : import.meta.env.VITE_MOBI_MENU_API + resId);
            const fData = await data.json();
            setMenuData(fData?.data?.cards[2]?.card?.card?.info);
            // setOffers(fData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);


        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMenu();
    }, [resId])

    useEffect(() => {
        let deviceWidth = window.innerWidth;
        if (deviceWidth < 660) {
            setWeb(false);
            fetchMenu();
        }
    }, [])




    if (menuData === null) return <ShimmerMenu className="" />

    const { name, cuisines, costForTwoMessage, areaName, avgRatingString, totalRatingsString } = menuData;
    const { lastMileTravelString, deliveryTime } = menuData.sla;

    return (
        <>
            <div className="main w-full flex flex-col justify-center items-center ">
                <div className="mainBodyRestaurantMenu flex flex-col items-center  w-[51%] max-[800px]:w-full max-[800px]:px-3 ">
                    <div className="firstresNameDetails flex justify-between w-full p-2">
                        <div className="left max-[800px]:w-[70%]">
                            <h1 className="name text-lg font-bold font-open max-[800px]:w-full">{name}</h1>
                            <p>{cuisines.join(", ")}</p>

                            <p>{areaName + " " + lastMileTravelString}</p>
                        </div>
                        <div className="right max-[700px]:max-h-24 flex flex-col justify-around p-1 items-center border-[1px] border-gray-300 rounded-xl max-[800px]:w-[20%]">
                            <div className="rating font-bold text-green-700 flex justify-center items-center gap-[2px]">
                                <AiFillStar /> <span>{avgRatingString}</span>
                            </div>
                            <div className="krating font-open text-[0.65rem] font-semibold text-gray-500">
                                <p>{totalRatingsString}</p>
                            </div>
                        </div>
                    </div>
                    <div className="secondTimeAndOffers flex flex-col w-full ">
                        <div className="timeandprice w-full flex justify-start gap-5 p-3 max-[800px]:justify-around">
                            <div className="time flex items-center gap-2 font-open text-black/80 font-bold">
                                <MdOutlineTimelapse className="timeicon text-2xl" />  <span className="dtime font-[750]">{deliveryTime} MINS</span>
                            </div>
                            <div className="price flex items-center gap-2 font-open text-black/80 ">
                                <HiOutlineCurrencyRupee className="rupeeicon text-2xl font-thin" />  <span className="costmsg font-bold">{costForTwoMessage}</span>
                            </div>
                        </div>
                        {/* <div className="offers flex w-full justify-start gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden py-2 my-2 max-[700px]:my-0">
                            {
                                offers?.map((res) => (
                                    <div key={res.info.offerIds} className="singleoffer min-w-[28%] border-[2px] border-black/20  text-sm py-1 px-2 rounded-md flex flex-col justify-center items-start gap-2 max-[700px]:min-w-[50%]">
                                        <div className="offerpercentage flex justify-center items-center gap-1 lg:gap-2 font-bold text-gray-700">
                                            <h1>{res.info.header}</h1> <img className="w-5  lg:w-6" src="https://i.postimg.cc/zGpWW9vq/5970436.png" alt="" />
                                        </div>
                                        <div className="offercode flex justify-around text-xs  gap-1 font-bold text-gray-600">
                                            <div>{res.info.couponCode}</div>
                                            {res.info.description &&

                                                <p>| {res.info.description}</p>
                                            }
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div> */}
                        <div className="div pt-6 ">
                            {
                                menuData?.veg ? <div className="text-green-800 font-medium text-sm flex gap-3 justify-start items-center"><FaLeaf /><h1>PURE VEG</h1></div> : ''

                            }
                        </div>
                    </div>

                    <div className="items w-full flex flex-col gap-5">

                        <ResMenu />


                    </div>

                </div>

            </div>





        </>
    )
}

export default ResturantMenu
