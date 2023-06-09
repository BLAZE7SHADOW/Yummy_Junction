// import { useEffect } from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }, [])
    return (
        <div className="inset-0 w-full flex justify-center items-center my-10 lg:mb-10">
            <img className="lg:w-1/3" src="https://i.postimg.cc/pdfdHx7V/success.jpg" alt="" />
        </div>
    )
}

export default Success


