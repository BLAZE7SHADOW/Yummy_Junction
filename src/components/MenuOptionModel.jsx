/* eslint-disable react/prop-types */





// eslint-disable-next-line react/prop-types
const MenuOptionModel = ({ setMenuModel, variantData }) => {

    // console.log(variantData);
    return (
        <div className="model-main fixed inset-0 bg-black/50 flex justify-center items-center z-10">
            <div className="modelcard bg-slate-50 p-8 flex flex-col justify-between min-w-[40%]">
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
                                                    <div className="flex  items-center">
                                                        <div className="py-3 pr-2"> {(data?.isVeg) === 1 ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</div>
                                                        <div className="optionData flex  py-3 gap-4">
                                                            <input type="radio" value="Male" name="gender" />
                                                            <div>{data?.name}</div>
                                                            <div>₹{data?.price}</div>
                                                        </div>
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
                                                        <div className="optionData flex  py-3 gap-4">
                                                            <input type="radio" value="Male" name="gender" />
                                                            <div>{data?.name}</div>
                                                            {
                                                                (data?.price) ? <div>₹{data?.price / 100}</div> : <div></div>

                                                            }
                                                        </div>
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
                                    <div className="font-semibold text-2xl py-2">{re?.name}{re.groupName}</div>
                                    {
                                        ((re?.choices)?.map((data) => {
                                            return (
                                                <div key={data?.id}>

                                                    <div className="flex  items-center">
                                                        <div className="py-3 pr-2"> {(data?.isVeg) === 1 ? <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol" /> : <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol" />}</div>
                                                        <div className="optionData flex  py-3 gap-4">
                                                            <input type="radio" value="Male" name="gender" />
                                                            <div>{data?.name}</div>
                                                            {
                                                                (data?.price) ? <div>₹{data?.price / 100}</div> : <div></div>

                                                            }
                                                        </div>
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
                <div className="button my-2">
                    <button className="flex bg-[rgb(103,178,80)] w-full p-3 justify-between items-center text-white text-sm font-bold">
                        <div className="rate flex">
                            <div>Total</div>
                            <div>Rs 95</div>
                        </div>
                        <div>ADD ITEM</div>
                    </button>
                </div>
                <button onClick={() => setMenuModel(false)}>close</button>
            </div>
        </div>
    )
}

export default MenuOptionModel
