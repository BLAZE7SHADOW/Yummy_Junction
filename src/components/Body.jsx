import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { MAIN_API, MENU_IMG_API } from "../utils/constant";



const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [carousel, setCarousel] = useState(null);
    const [filterListOfRestaurants, setFilterListOfRestaurants] = useState(null);
    // const [swiperRef, setSwiperRef] = useState(null);
    // let searchTxt = "KFC";




    const getData = async () => {
        try {
            const ress = await fetch(MAIN_API);
            var pinky = await ress.json();
            setListOfRestaurants(pinky?.data?.cards[2]?.data?.data?.cards);
            setCarousel(pinky?.data?.cards[0]?.data?.data?.cards);
            setFilterListOfRestaurants(pinky?.data?.cards[2]?.data?.data?.cards);
        }
        catch (err) {
            console.log(err);
        }
    }

    function filterData(searchText, listOfRestaurants) {
        const filterData = listOfRestaurants?.filter((re) => re?.data?.name?.toUpperCase()?.includes(searchText?.toUpperCase()));
        return filterData;
    }


    useEffect(() => {
        getData();
    }, [])



    return (
        <div className="parent w-full">
            {carousel &&
                <div className="carousel  w-full flex justify-center bg-black p-[22px] ">
                    <div className="swiper w-[82%] m-4 p-5 bg-black">

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={55}
                            slidesPerGroup={1}
                            loop={false}
                            loopFillGroupWithBlank={true}
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
                                                <img src={MENU_IMG_API + cc.data.creativeId} alt="" className="hover:scale-110 transition-all duration-[0.6s] ease-in-out z-[99999]" />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })

                            }
                        </Swiper>

                    </div>
                </div>
            }
            <div className="body  flex flex-col justify-center items-center gap-8">
                <div className="filters">
                    <div className="Search">
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="search-input p-1 m-2"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button
                            className="search-button p-1 m-2 bg-blue-400 rounded"
                            onClick={() => {

                                let data = filterData(searchText, listOfRestaurants);
                                console.log(data);
                                setFilterListOfRestaurants(data);

                            }}



                        >SEARCH</button>
                    </div>
                    <div className="filter">
                        <button className="filter-btn" onClick={() => {
                            let filteredList = listOfRestaurants?.filter(
                                (res) => res?.data?.avgRating > 4
                            );
                            setFilterListOfRestaurants(filteredList);
                        }}>
                            FILTER
                        </button>
                    </div>
                </div>

                <div className="res-container flex flex-wrap  justify-between items-start w-[81%] gap-y-20  ">
                    {
                        listOfRestaurants &&
                        filterListOfRestaurants?.map((restaurant) => (<Link key={restaurant?.data?.id} to={"/restaurants/" + restaurant?.data?.id} ><RestaurantCard resData={restaurant} /></Link>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Body;