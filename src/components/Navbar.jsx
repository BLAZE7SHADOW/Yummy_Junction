import { useEffect, useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PercentIcon from '@mui/icons-material/Percent';
import SupportIcon from '@mui/icons-material/Support';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from '@mui/material/Badge';
import { logoutHandler, updateLoginDetails } from "../utils/store/slices/loginSlice";
import { useDispatch } from "react-redux";





const Navbar = () => {

    const [location, setLocation] = useState(null);
    const items = useSelector(store => store?.cart?.items)
    const loginToken = useSelector(store => store?.login?.loginToken)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getLocation = async () => {
        const END_POINT = `https://ipapi.co/json`;
        try {
            let locationData = await fetch(END_POINT);
            let finalLocData = await locationData.json();
            setLocation(finalLocData);
        }
        catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('user'))
        dispatch(updateLoginDetails(userDetails));
        getLocation();
    }, [])


    return (
        <div className="parent flex justify-center w-full ">
            <div className="navbar flex  justify-center items-center w-full  max-[800px]:justify-between" >
                <div className="left  flex  justify-center items-center  lg:gap-3 max-[1000px]:w-[60%] max-[660px]:w-full">
                    <Link to="/" className="flex justify-center items-center pl-5"><div className="logo-container  lg:p-1 max-[1000px]:w-full ">
                        <img className="pt-4 py-2 logo w-40 h-16 lg:w-52 lg:h-20" src="https://i.postimg.cc/qqtBMBMZ/YUMMY-JUCTION-LOGO.png" alt="" />
                    </div></Link>
                    <div className="workplace flex  gap-2 items-center justify-start font-semibold p-2 m-2 max-[1000px]:w-[40%]">
                        <LocationOnOutlinedIcon className="location " />
                        <p className="text-xs lg:text-lg"> {(location !== null ? (location?.city + ", " + location?.region + ", " + location?.country_name) : " ")}</p>
                    </div>
                </div>




                <div className="nav-items flex  justify-center items-center pr-6 max-[660px]:hidden">
                    <ul className="items flex  justify-center items-center gap-16 m-2 px-10">
                        <div className="search-btn flex  gap-[5px] justify-center items-center cursor-pointer p-2 max-[1000px]:hidden  "><SearchIcon /><div className="search">Search</div></div>
                        <div className="offer-btn flex  gap-[5px] justify-center items-center cursor-pointer p-2  max-[1000px]:hidden "><PercentIcon /><div className="offers">Offers</div></div>
                        <div className="help-btn flex  gap-[5px] justify-center items-center cursor-pointer p-2  max-[1000px]:hidden  "><SupportIcon /><div className="help" onClick={() => navigate('/aboutme')} > ABOUT ME</div></div>
                        <div className="loginout  flex  gap-[5px] justify-center items-center cursor-pointer p-2  w-24"><PermIdentityIcon />
                            {
                                loginToken ?
                                    <button className="btnname  cursor-pointer " onClick={() => dispatch(logoutHandler())}> LOGOUT </button>
                                    :
                                    <button className="btnname  cursor-pointer " onClick={() => navigate('/login')}> LOGIN </button>
                            }

                        </div>
                        <Link to="/cart"><div className="cart-btn flex  gap-[5px] justify-center items-center cursor-pointer p-2 ">
                            <Badge badgeContent={items.length} color="primary">
                                <ShoppingCartOutlinedIcon />

                            </Badge><div className="cart">CART</div>
                        </div></Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Navbar;