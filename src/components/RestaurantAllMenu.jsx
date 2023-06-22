// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constant";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { AiFillStar } from "react-icons/ai";
// import { MdOutlineTimelapse } from "react-icons/md";
// import { HiOutlineCurrencyRupee } from "react-icons/hi";
// import { MENU_IMG_API } from "../utils/constant";


// const ResturantAllMenu = () => {
//     const [menuData, setMenuData] = useState(null);
//     const [offers, setOffers] = useState(null);
//     const [recommendedVeg, setRecommendedVeg] = useState(null);
//     const [recommendedNonVeg, setRecommendedNonVeg] = useState(null);
//     const [showRecommended, setShowRecommended] = useState(false);
//     const [showAccordians, setShowAccordians] = useState(null);





//     const { resId } = useParams();



//     const fetchMenu = async () => {
//         try {
//             const data = await fetch(MENU_API + resId);
//             const fData = await data.json();

//             setMenuData(fData?.data?.cards[0]?.card?.card?.info);





//             setOffers(fData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);

//             setRecommendedVeg(fData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
//             setRecommendedNonVeg(fData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
//             setShowAccordians(fData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);




//         }
//         catch (err) {
//             console.log(err);
//         }

//     }


//     useEffect(() => {
//         fetchMenu();
//     }, [resId])




//     if (menuData === null) return <Shimmer />

//     const { name, cuisines, costForTwoMessage, areaName, avgRatingString, totalRatingsString } = menuData;
//     const { lastMileTravelString, deliveryTime } = menuData.sla;







//     return (
//         <>
//             <div className="main w-full flex flex-col justify-center items-center">
//                 <div className="mainBodyRestaurantMenu flex flex-col items-center  w-[50%]">
//                     <div className="firstresNameDetails flex justify-between w-full p-2">
//                         <div className="left">
//                             <h1 className="name text-lg font-bold font-open">{name}</h1>
//                             <p>{cuisines.join(", ")}</p>

//                             <p>{areaName + " " + lastMileTravelString}</p>
//                         </div>
//                         <div className="right flex flex-col justify-around p-1 items-center border-[1px] border-gray-300 rounded-xl">
//                             <div className="rating font-bold text-green-700 flex justify-center items-center gap-[2px]">
//                                 <AiFillStar /> <span>{avgRatingString}</span>
//                             </div>
//                             <div className="krating font-open text-[0.65rem] font-semibold text-gray-500">
//                                 <p>{totalRatingsString}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="secondTimeAndOffers flex flex-col w-full ">
//                         <div className="timeandprice w-full flex justify-start gap-5 p-3">
//                             <div className="time flex items-center gap-2 font-open text-black/80 font-bold">
//                                 <MdOutlineTimelapse className="timeicon text-2xl" />  <span className="dtime font-[750]">{deliveryTime} MINS</span>
//                             </div>
//                             <div className="price flex items-center gap-2 font-open text-black/80 ">
//                                 <HiOutlineCurrencyRupee className="rupeeicon text-2xl font-thin" />  <span className="costmsg font-bold">{costForTwoMessage}</span>
//                             </div>
//                         </div>
//                         <div className="offers w-full flex justify-between gap-2">
//                             {
//                                 offers?.map((res) => (
//                                     <div key={res.info.offerIds} className="singleoffer w-[25%] border-[1px] border-black">
//                                         <div className="offerpercentage">
//                                             <h1>{res.info.header}</h1>
//                                         </div>
//                                         <div className="offercode">
//                                             <p>{res.info.couponCode}</p>
//                                             <p>{res.info.description}</p>
//                                         </div>
//                                     </div>
//                                 )
//                                 )
//                             }
//                         </div>
//                     </div>

//                     <div className="items w-full flex flex-col gap-5">
//                         <div className="thirdRecommended  w-full flex flex-col gap-4 cursor-pointer" >

//                             <div className="summaryData flex justify-between w-full bg-white p-4 pt-6" onClick={() => setShowRecommended(!showRecommended)}>
//                                 <span className="summary text-xl font-open font-bold "> Recommended ({(recommendedVeg ? (recommendedVeg?.length) : (recommendedNonVeg?.length))})</span>
//                                 <span>{showRecommended ? "-" : "+"}</span>
//                             </div>
//                             {
//                                 showRecommended &&
//                                 (recommendedVeg ? (recommendedVeg) : (recommendedNonVeg))?.map((res) => (

//                                     <div key={res.card.info.id} className=" w-full p-4 flex flex-col justify-center gap-4">
//                                         <div className="parent flex justify-between items-start ">
//                                             <div className="data w-[95%]">
//                                                 <div className=" flex flex-col justify-between ">
//                                                     <div className="py-1"> {(res?.card?.info?.itemAttribute?.vegClassifier) === "VEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : (res?.card?.info?.itemAttribute?.vegClassifier) === "NONVEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" /> : ""}</div>
//                                                     <div className="font-semibold">{res?.card?.info?.name}</div>
//                                                     <div className="pricing flex w-2/3  items-center">
//                                                         {
//                                                             (res?.card?.info?.variantsV2?.variantGroups)?.map((item) => ((item.variations)?.map((innerPrice) => innerPrice)))
//                                                                 ?
//                                                                 (res?.card?.info?.variantsV2?.variantGroups)?.map((item) => ((item.variations)?.map((innerPrice) => ((
//                                                                     <div key={innerPrice.id} className="">
//                                                                         {
//                                                                             innerPrice.name === 'Half' ?
//                                                                                 <span>₹{innerPrice.price}</span> : ""
//                                                                         }
//                                                                     </div>
//                                                                 ))))) :
//                                                                 <div className="flex gap-16">
//                                                                     <span>₹ {(res?.card?.info?.price / 100)}</span>
//                                                                 </div>
//                                                         }
//                                                     </div>
//                                                 </div>
//                                                 <div className="text-[13px] text-slate-500 ">{res?.card?.info?.description}</div>
//                                             </div>
//                                             <div className="  "><img className="rounded-2xl w-32 h-28 pb-2" src={MENU_IMG_API + res?.card?.info?.imageId} /></div>


//                                         </div>
//                                     </div>

//                                 )
//                                 )
//                             }


//                             <div className="testing">
//                                 {console.log(showAccordians)}
//                                 {
//                                     showAccordians &&

//                                     showAccordians?.map((it, index) => (

//                                         (it?.card?.card?.title) &&
//                                         <div key={index} className="div">
//                                             {
//                                                 <h1>{it?.card?.card?.title}</h1>
//                                             }
//                                         </div>

//                                     ))



//                                 }
//                             </div>

//                         </div>
//                     </div>

//                 </div>

//             </div>





//         </>
//     )
// }

// export default ResturantAllMenu
