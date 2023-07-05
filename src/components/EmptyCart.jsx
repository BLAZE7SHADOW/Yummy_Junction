import img from "../IMAGES/Cart.jpg"

const EmptyCart = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 absolute">
            <div className="img w-[33%]">
                <img src={img} alt="" className="" />
            </div>
            <div className="rest flex flex-col justify-center items-center relative bottom-14 p-2">
                <div className="head flex flex-col justify-between items-center">
                    <div className="heading font-semibold text-xl pt-2">
                        Your cart is empty
                    </div>
                    <div className="disc p-2 pb-4">
                        You can go to home page to view more restaurants
                    </div>

                </div>


                <button className="bg-green-500 rounded-lg p-2 text-xl font-semibold px-4">SEE RESTAURANTS NEAR YOU</button>
            </div>

        </div>
    )
}

export default EmptyCart
