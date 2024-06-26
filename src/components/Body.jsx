import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import ShimmerBody from "./ShimmerBody";
import { BiSearchAlt } from "react-icons/bi"
import axios from 'axios';

const Body = () => {
    const [noOfItems, setNoOfItems] = useState(4);
    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [carousel, setCarousel] = useState(null);
    const [filterListOfRestaurants, setFilterListOfRestaurants] = useState(null);


    const getData = async () => {
        try {
            const apiUrl = import.meta.env.VITE_MAIN_API;
            if (!apiUrl) {
                throw new Error('VITE_MAIN_API is not defined');
            }
            const response = await axios.get(apiUrl);
            const pinky = response.data;

            setListOfRestaurants(pinky?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setCarousel(pinky?.data?.cards[0]?.data?.data?.cards);
            setFilterListOfRestaurants(pinky?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            console.log(err);
        }
    };






    function filterData(searchText, listOfRestaurants) {
        const filterData = listOfRestaurants?.filter((re) => re?.info?.name?.toUpperCase()?.includes(searchText?.toUpperCase()));
        return filterData;
    }


    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        let deviceWidth = window.innerWidth;
        if (deviceWidth < 660 && deviceWidth > 300) {
            setNoOfItems(2);
        }
    }, [])



    return (
        listOfRestaurants ? (

            <div className="parent w-full lg:mb-5">
                {/* {carousel &&
                    <div className="carousel  w-full flex justify-center bg-black p-[22px] ">
                        <div className="swiper w-[82%] m-4 p-5 bg-black max-[760px]:w-full max-[760px]:m-0  ">

                            <Swiper
                                slidesPerView={noOfItems}
                                spaceBetween={55}
                                slidesPerGroup={1}
                                loop={false}

                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >


                                {
                                    carousel &&
                                    carousel?.map((cc) => {
                                        return (
                                            <SwiperSlide key={cc?.data?.bannerId} className="py-10">
                                                <div className="">
                                                    <img src={import.meta.env.VITE_MENU_IMG_API + cc.data.creativeId} alt="" className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999]" />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })

                                }
                            </Swiper>

                        </div>
                    </div>
                } */}
                <div className="body w-full flex flex-col justify-center items-center gap-8">
                    <div className="filters w-[80%] flex justify-center items-center mt-4 gap-20 pr-5 p-2 max-[760px]:flex-col max-[760px]:w-full max-[760px]:gap-4 max-[760px]:pr-2 ">
                        <div className="Search w-[30%]  flex justify-center  sm:hover:bg-black/10 ">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                className="search-input p-1 m-2 bg-black/10"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <button
                                className="search-button flex justify-center items-center gap-2 p-2 px-3 m-2 bg-green-300 rounded text-sm text-gray-800 font-semibold"
                                onClick={() => {

                                    let data = filterData(searchText, listOfRestaurants);
                                    setFilterListOfRestaurants(data);

                                }}



                            ><BiSearchAlt className="text-xl" />SEARCH</button>
                        </div>
                        <div className="filter w-[60%] flex justify-between items-center gap-3 rounded-lg  max-[760px]:w-full max-[760px]:bg-gray-200 max-[760px]:font-bold px-1">
                            <button className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px] " onClick={() => {
                                let sortedList = [...listOfRestaurants];
                                sortedList.sort((a, b) => a.info.deliveryTime - b.info.deliveryTime);
                                setFilterListOfRestaurants(sortedList);

                            }}>
                                Delivery Time
                            </button>
                            <button className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px] " onClick={() => {
                                let sortedList = [...listOfRestaurants];
                                sortedList.sort((a, b) => b.info.avgRating - a.info.avgRating);
                                setFilterListOfRestaurants(sortedList);

                            }}>
                                Rating
                            </button>
                            <button className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px] " onClick={() => {
                                let sortedList = [...listOfRestaurants];
                                sortedList.sort((a, b) => a.info.costForTwo - b.info.costForTwo);
                                setFilterListOfRestaurants(sortedList);
                            }}>
                                Cost : Low To High
                            </button>
                            <button className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10 max-[760px]:text-sm max-[560px]:text-[10px] " onClick={() => {
                                let sortedList = [...listOfRestaurants];
                                sortedList.sort((a, b) => b.info.costForTwo - a.info.costForTwo);
                                setFilterListOfRestaurants(sortedList);
                            }}>
                                Cost : High To Low
                            </button>

                        </div>

                    </div>

                    <div className="res-container flex flex-wrap justify-between items-start w-[81%] gap-y-20 max-[800px]:gap-y-0 max-[730px]:w-full max-[660px]:justify-center">
                        {
                            listOfRestaurants &&
                            filterListOfRestaurants?.map((restaurant) => (<Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id} ><RestaurantCard resData={restaurant?.info} /></Link>))
                        }

                    </div>
                </div>
            </div>
        )

            :
            (
                <div className="shimmer flex justify-center w-full">
                    <ShimmerBody />
                </div>
            )

    )
}

export default Body;