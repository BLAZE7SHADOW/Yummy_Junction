import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { Link } from "react-router-dom";
const Body = () => {
    const [searchText, setSearchText] = useState();
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filterListOfRestaurants, setFilterListOfRestaurants] = useState(resList);
    // let searchTxt = "KFC";




    const getData = async () => {
        try {
            const ress = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.138521&lng=75.84813&page_type=DESKTOP_WEB_LISTING");
            var pinky = await ress.json();
        }
        catch (err) {
            console.log(err);
        }
        setListOfRestaurants(pinky?.data?.cards[2]?.data?.data?.cards);
        setFilterListOfRestaurants(pinky?.data?.cards[2]?.data?.data?.cards);
    }

    function filterData(searchText, listOfRestaurants) {
        const filterData = listOfRestaurants.filter((re) => re.data.name.includes(searchText));
        return filterData;
    }


    useEffect(() => {
        getData();
    }, [])



    return (
        <div className="body border-4 border-blue-700 flex flex-col justify-center items-center gap-8">
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
                            const data = filterData(searchText, listOfRestaurants);
                            setFilterListOfRestaurants(data);
                            console.log(data);
                        }}



                    >SEARCH</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        let filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setFilterListOfRestaurants(filteredList);
                    }}>
                        FILTER
                    </button>
                </div>
            </div>

            <div className="res-container flex flex-wrap  justify-between items-start w-[82%] gap-y-20  ">
                {
                    filterListOfRestaurants?.map((restaurant) => (<Link key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id} ><RestaurantCard resData={restaurant} /></Link>))
                }
            </div>
        </div>
    )
}

export default Body;