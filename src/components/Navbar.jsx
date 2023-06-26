import { useEffect, useState } from "react";
import logoo from "../IMAGES/LOGO.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PercentIcon from '@mui/icons-material/Percent';
import SupportIcon from '@mui/icons-material/Support';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [btnName, setBtnName] = useState(true);
    const [location, setLocation] = useState(null);
    // const [latitude, setLatitude] = useState({});
    // const [longitude, setLongitude] = useState({});
    const [getLoc, setGetLoc] = useState(false);







    useEffect(() => {
        getLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getLoc])

    const getLocation = async () => {

        // const success = (position) => {
        //     console.log(position);
        //     setLatitude(position.coords.latitude);
        //     setLongitude(position.coords.longitude);
        // }
        // const error = (position) => {
        //     console.log(position);
        // }
        // navigator.geolocation.getCurrentPosition(success, error);


        const END_POINT = `https://ipapi.co/json`;





        try {
            let locationData = await fetch(END_POINT);
            // let locationData = await fetch(locationData);
            let finalLocData = await locationData.json();
            setLocation(finalLocData);
            // console.log(location);

        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="parent flex justify-center w-full ">
            <div className="navbar flex flex-row justify-between items-center min-w-[1210px]" >
                <div className="left  flex flex-row justify-center items-center gap-3">
                    <Link to="/"><div className="logo-container  p-1">
                        <img className="logo w-24" src={logoo} alt="" />
                    </div></Link>
                    <div className="workplace flex flex-row gap-2 items-center justify-start font-semibold p-2 m-2">
                        <LocationOnOutlinedIcon onClick={() => setGetLoc(!getLoc)} className="location " />
                        <p> {(location !== null ? (location?.city + ", " + location?.region + ", " + location?.country_name) : " ")}</p>
                    </div>
                </div>


                <div className="nav-items flex flex-row justify-center items-center">
                    <ul className="items flex flex-row justify-center items-center gap-16 m-2 px-10">
                        <div className="search-btn flex flex-row gap-[5px] justify-center items-center cursor-pointer p-2"><SearchIcon /><div className="search">Search</div></div>
                        <div className="offer-btn flex flex-row gap-[5px] justify-center items-center cursor-pointer p-2"><PercentIcon /><div className="offers">Offers</div></div>
                        <div className="help-btn flex flex-row gap-[5px] justify-center items-center cursor-pointer p-2"><SupportIcon /><div className="help">Help</div></div>
                        <div className="loginout  flex flex-row gap-[5px] justify-center items-center cursor-pointer p-2  w-24"><PermIdentityIcon />
                            <button className="btnname  cursor-pointer " onClick={() => setBtnName(!btnName)}>{btnName ? "LOGIN" : "LOGOUT"}</button>
                        </div>
                        <div className="cart-btn flex flex-row gap-[5px] justify-center items-center cursor-pointer p-2"><ShoppingCartOutlinedIcon /><div className="cart">USER</div></div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar;