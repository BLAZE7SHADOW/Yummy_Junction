/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/store/slices/cartSlice";


const MenuOptionModel = ({ setMenuModel, variantData, fData }) => {

    const [radioPrice, setRadioPrice] = useState(0);
    const [info, setInfo] = useState(null);
    const [total, setTotal] = useState((variantData?.price) ? (variantData?.price / 100) : 0);

    const setTotalInfo = (variation, amount) => {
        setInfo(variation)
        setRadioPrice(amount)

    }

    const totalExtraAddPriceHandler = (condition, initialPrice) => {
        if (isNaN(initialPrice))
            return
        condition ?
            <h1>{setTotal(total + (initialPrice ?? 0))} </h1>
            :
            <h1>{setTotal(total - (initialPrice ?? 0))} </h1>
    }

    const dispatch = useDispatch();


    const addVariantHandler = () => {
        if (variantData?.variantsV2?.variantGroups) {
            dispatch(addItems({
                resName: fData?.data?.cards[0]?.card?.card?.info?.name,
                cuisines: fData?.data?.cards[0]?.card?.card?.info?.cuisines,
                areaName: fData?.data?.cards[0]?.card?.card?.info?.areaName,
                deliveryDistance: fData?.data?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString,
                image: fData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId,
                veg: info?.isVeg === 1 ? "VEG" : "NONVEG",
                name: variantData?.name,
                price: (total + radioPrice).toFixed(2),
                quantity: 1,
                id: info?.id,
            }));
        }
        else if (variantData?.variants?.variantGroups) {
            dispatch(addItems({
                resName: fData?.data?.cards[0]?.card?.card?.info?.name,
                cuisines: fData?.data?.cards[0]?.card?.card?.info?.cuisines,
                areaName: fData?.data?.cards[0]?.card?.card?.info?.areaName,
                deliveryDistance: fData?.data?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString,
                image: fData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId,
                veg: info?.isVeg === 1 ? "VEG" : "NONVEG",
                name: variantData?.name,
                price: total + radioPrice,
                quantity: 1,
                id: info?.id,
            }));
        }
        else if (variantData?.addons) {
            dispatch(addItems({
                resName: fData?.data?.cards[0]?.card?.card?.info?.name,
                cuisines: fData?.data?.cards[0]?.card?.card?.info?.cuisines,
                areaName: fData?.data?.cards[0]?.card?.card?.info?.areaName,
                deliveryDistance: fData?.data?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString,
                image: fData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId,
                veg: info?.isVeg === 1 ? "VEG" : "NONVEG",
                name: variantData?.name,
                price: total + radioPrice,
                quantity: 1,
                id: info?.id,
            }));
        }

        setMenuModel(false);

    }


    useEffect(() => {
        totalExtraAddPriceHandler();
    }, [])


    return (
        <div className="model-main fixed inset-0 bg-black/10 flex justify-center items-center z-50">
            <div className="modelcard bg-slate-50 p-8 flex flex-col justify-between min-w-0 md:min-w-[40%] overflow-auto max-h-[90vh] absolute m-2 ">
                <div className="closebtn sticky -top-2 z-10 flex justify-end">
                    <button className=" bg-black/20 rounded-full p-2" onClick={() => setMenuModel(false)}>close</button>
                </div>

                <div className="heading  flex justify-start items-center gap-2 py-5" >
                    <div className="py-1"> {(variantData?.itemAttribute?.vegClassifier) === "VEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : (variantData?.itemAttribute?.vegClassifier) === "NONVEG" ? <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" /> : ""}</div>
                    <div className="font-medium text-2xl"> Customize “{variantData?.name}”</div>
                </div>
                <div className="variation  flex flex-col ">

                    {
                        (variantData?.variantsV2?.variantGroups) &&

                        variantData?.variantsV2?.variantGroups?.map((re) => {
                            return (

                                <div key={re.groupId} className="">
                                    <div className="font-semibold text-2xl py-2">{re?.name}</div>
                                    {
                                        ((re?.variations)?.map((data) => {
                                            return (
                                                <div key={data?.id}>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="py-3 pr-2"> {(data?.isVeg) === 1 ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</div>
                                                        <label className="optionData flex  py-3 gap-4 w-full" onClick={() => setTotalInfo(
                                                            data, data?.price ? (data?.price) : 0
                                                        )}>
                                                            <input type="radio" value={data?.price} name="variation" />
                                                            <div>{data?.name}</div>
                                                            <div>₹{data?.price}</div>
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        }))
                                    }
                                </div>
                            )
                        })
                    }
                    {
                        (variantData?.variants?.variantGroups) &&

                        variantData?.variants?.variantGroups?.map((re) => {
                            return (

                                <div key={re.groupId} className="">
                                    <div className="font-semibold text-2xl py-2">{re?.name}</div>
                                    {
                                        ((re?.variations)?.map((data) => {
                                            return (
                                                <div key={data?.id}>
                                                    <div className="flex  items-center">
                                                        <div className="py-3 pr-2"> {(data?.isVeg) === 1 ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</div>
                                                        <label className="optionData flex  py-3 gap-4 w-full " onClick={() => setTotalInfo(
                                                            data, data?.price ? (data?.price / 100) : 0
                                                        )}>
                                                            <input type="radio" value={data?.price} name="choiceForPreparation" />
                                                            <div>{data?.name}</div>
                                                            {
                                                                (data?.price) ? <div>₹{data?.price / 100}</div> : <div></div>

                                                            }
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        }))

                                    }


                                </div>
                            )
                        })
                    }
                    {
                        (variantData?.addons) &&

                        variantData?.addons?.map((re) => {
                            return (

                                <div key={re.groupId}>
                                    <div className="font-semibold text-2xl py-2">{re?.name ?? re.groupName}</div>
                                    {
                                        ((re?.choices)?.map((data) => {
                                            return (
                                                <div key={data?.id}>

                                                    <div className="flex  items-center">
                                                        <div className="py-3 pr-2"> {(data?.isVeg) === 1 ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</div>
                                                        <label className="optionData flex py-3 gap-2 md:gap-4 w-5/6 md:w-full justify-between " >

                                                            <input type="checkbox" value={data?.price} name="addons" onChange={(e) => totalExtraAddPriceHandler(e.target.checked, data?.price / 100)} />
                                                            <div>{data?.name}</div>
                                                            {

                                                                (data?.price) ? <div>₹{data?.price / 100}</div> : <div></div>

                                                            }
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        }))

                                    }


                                </div>
                            )
                        })


                    }



                </div>
                <div className="button my-2 sticky -bottom-7  w-full">
                    <button className="flex bg-[rgb(103,178,80)] w-full p-3 justify-between items-center text-white text-sm font-bold" onClick={() => addVariantHandler()}>
                        <div className="rate">
                            <span className="px-2">Total</span>
                            {/* {console.log("gggg")}
                            {console.log(total)}
                            {console.log("hhhh")}
                            {console.log(radioPrice)} */}
                            <span className="">Rs {total ? (total + radioPrice)?.toFixed(2) : radioPrice}</span>
                        </div>
                        <div>ADD ITEM</div>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default MenuOptionModel
