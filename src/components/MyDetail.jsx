
import { useNavigate } from "react-router-dom";
const MyDetail = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full text-xs lg:text-xl font-semibold bg-orange-200 flex justify-center items-center gap-1 hover:bg-black/60 hover:text-white" onClick={() => navigate("/aboutme")}>
            <div className="details">Made With </div>
            <img className="w-8 p-1 lg:w-10" src="https://i.postimg.cc/52rzsznP/210545.png" alt="" />
            <div> by SHIVAM GOVIND RAO</div>
        </div>
    )
}

export default MyDetail
