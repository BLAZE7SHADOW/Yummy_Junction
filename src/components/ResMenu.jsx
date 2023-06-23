
import { useState } from "react";
import useApiData from "../utils/useApiData";
// import Shimmer from "./Shimmer";
// import { AiFillStar } from "react-icons/ai";
// import { MdOutlineTimelapse } from "react-icons/md";
// import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MENU_IMG_API } from "../utils/constant";

const ResMenu = () => {


    const fData = useApiData();
    // console.log(fData);


    // const [menuData, setMenuData] = useState(null);
    // const [offers, setOffers] = useState(null);
    // const [recommendedVeg, setRecommendedVeg] = useState(null);
    // const [recommendedNonVeg, setRecommendedNonVeg] = useState(null);
    const [showRecommended, setShowRecommended] = useState(false);
    // const [showAccordians, setShowAccordians] = useState(null);

    // const menuData = fData?.data?.cards[0]?.card?.card?.info;
    // const offers = fData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    // const recommendedVeg = fData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    // const recommendedNonVeg = fData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const showAccordians = fData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;




    return (
        <>



            <div className="items w-full flex flex-col gap-5">
                <div className="thirdRecommended  w-full flex flex-col gap-4 cursor-pointer" >

                    <div className="summaryData flex flex-col justify-between w-full bg-yellow-300 p-4 pt-6" >
                        {
                            showAccordians?.map((it, index) => (
                                (it?.card?.card?.title) &&
                                <div key={index} className="div bg-green-400 m-4 ">
                                    {
                                        <>
                                            <div className=" flex flex-col gap-10 bg-red-500">

                                                <span className="summary text-xl font-open font-bold bg-blue-400" onClick={() => setShowRecommended(!showRecommended)}> {it?.card?.card?.title} {(it?.card?.card?.itemCards?.length) ? (it?.card?.card?.itemCards?.length) : ""} </span>

                                            </div>
                                            {
                                                showRecommended &&
                                                ((it?.card?.card?.itemCards) ? (it?.card?.card?.itemCards)?.map((res) => (

                                                    <div key={res.card.info.id} className=" w-full p-4 flex flex-col justify-center gap-4">
                                                        <div className="parent flex justify-between items-start ">
                                                            <div className="data w-[95%]">
                                                                <div className=" flex flex-col justify-between ">
                                                                    <div className="py-1"> {(res?.card?.info?.itemAttribute?.vegClassifier) === "VEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : (res?.card?.info?.itemAttribute?.vegClassifier) === "NONVEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" /> : ""}</div>
                                                                    <div className="font-semibold">{res?.card?.info?.name}</div>
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
                                                                </div>
                                                                <div className="text-[13px] text-slate-500 ">{res?.card?.info?.description}</div>
                                                            </div>
                                                            <div className="  "><img className="rounded-2xl w-32 h-28 pb-2" src={MENU_IMG_API + res?.card?.info?.imageId} /></div>


                                                        </div>
                                                    </div>

                                                )
                                                ) : (it?.card?.card?.categories)?.map((ress) => (





                                                    (ress?.itemCards)?.map((res) => (

                                                        <div key={res.card.info.id} className=" w-full p-4 flex flex-col justify-center gap-4">
                                                            <div className="parent flex justify-between items-start ">
                                                                <div className="data w-[95%]">
                                                                    <div className=" flex flex-col justify-between ">
                                                                        <div className="py-1"> {(res?.card?.info?.itemAttribute?.vegClassifier) === "VEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : (res?.card?.info?.itemAttribute?.vegClassifier) === "NONVEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" /> : ""}</div>
                                                                        <div className="font-semibold">{res?.card?.info?.name}</div>
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
                                                                    </div>
                                                                    <div className="text-[13px] text-slate-500 ">{res?.card?.info?.description}</div>
                                                                </div>
                                                                <div className="  "><img className="rounded-2xl w-32 h-28 pb-2" src={MENU_IMG_API + res?.card?.info?.imageId} /></div>


                                                            </div>
                                                        </div>

                                                    ))

                                                )

                                                ))

                                            }

                                        </>

                                    }
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div >
        </>
    )
}

export default ResMenu
