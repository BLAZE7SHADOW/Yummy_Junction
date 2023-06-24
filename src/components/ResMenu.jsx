import { useState } from "react";
import useApiData from "../utils/useApiData";
import { MENU_IMG_API } from "../utils/constant";

const ResMenu = () => {
    const [activeItem, setActiveItem] = useState(null);
    const fData = useApiData();
    const showAccordians = fData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const handleItemClick = (index) => {
        if (activeItem === index) {
            setActiveItem(null); // Collapse the clicked item if it's already active
        } else {
            setActiveItem(index); // Expand the clicked item
        }
    };
    return (
        <>
            <div className="items w-full flex flex-col gap-5 mt-4 bg-slate-100">
                <div className="thirdRecommended  w-full flex flex-col gap-4 cursor-pointer " >
                    <div className="summaryData flex flex-col justify-between w-full py-4 pt-4 gap-4" >
                        {
                            showAccordians?.map((it, index) => (
                                (it?.card?.card?.title) &&
                                <div key={index} className="div ">
                                    {<>
                                        <div className=" flex justify-between bg-white py-3 " onClick={() => handleItemClick(index)}>
                                            <span className="summary text-xl font-open font-bold  py-1" > {it?.card?.card?.title} ({(it?.card?.card?.itemCards?.length) ? (it?.card?.card?.itemCards?.length) : (it?.card?.card?.categories?.length)}) </span>
                                            <span className="pr-5 font-bolder">{activeItem ? "-" : "+"}</span>
                                        </div>
                                        {activeItem === index &&

                                            ((it?.card?.card?.itemCards)?.map((res) => (
                                                <div key={res.card.info.id} className=" w-full p-4 flex flex-col justify-center" >
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
                                                        {res?.card?.info?.imageId &&

                                                            <div className="  "><img className="rounded-2xl w-32 h-28 pb-2" src={MENU_IMG_API + res?.card?.info?.imageId} /></div>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                            ))

                                        }
                                        {
                                            (it?.card?.card?.categories)?.map((ress) => {
                                                return (<>
                                                    <div className=" flex justify-between bg-white my-2" onClick={() => handleItemClick(index)}>
                                                        <span className="summary text-base font-open font-semibold flex flex-col py-2 " > {ress?.title} ({(ress?.itemCards?.length) ? (ress?.itemCards?.length) : ""}) </span>
                                                        {/* <span className="pr-5 font-bolder">{(activeItem === index) ? "-" : "+"}</span> */}
                                                    </div>
                                                    {
                                                        activeItem === index &&
                                                        (ress.itemCards)?.map((res) => (
                                                            <div key={res.card.info.id} className=" w-full p-4 flex flex-col justify-center gap-4  my-2">
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
                                                                    {res?.card?.info?.imageId &&
                                                                        <div className="  "><img className="rounded-2xl w-32 h-28 pb-2" src={MENU_IMG_API + res?.card?.info?.imageId} /></div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                        )
                                                    }
                                                </>
                                                )
                                            }
                                            )
                                        }
                                    </>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResMenu
