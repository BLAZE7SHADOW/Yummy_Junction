// import img from "../IMAGES/cart.jpg"
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 h-[80%] absolute lg:h-full">
            <div className="img w-[33%] max-[700px]:w-[60%]">
                <img src="https://i.postimg.cc/NFFrr6jc/cart.jpg" alt="" className="max-[700px]:w-full" />
            </div>
            <div className="rest flex flex-col justify-center items-center bottom-14 p-2 max-[660px]:mt-5 lg:relative">
                <div className="head flex flex-col justify-between items-center">
                    <div className="heading font-semibold text-xl pt-2">
                        Your cart is empty
                    </div>
                    <div className="disc p-2 pb-4">
                        You can go to home page to view more restaurants
                    </div>

                </div>


                <button className="bg-green-500 rounded-lg p-2 text-xl font-semibold px-4" onClick={() => navigate('/')}>SEE RESTAURANTS NEAR YOU</button>
            </div>

        </div>
    )
}

export default EmptyCart
