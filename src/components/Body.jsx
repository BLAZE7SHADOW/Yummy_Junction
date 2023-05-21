import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container flex flex-wrap gap-4 m-1">
                <RestaurantCard
                    resName={"Meghana Foods"}
                    cuisine={"Pizza,Italian"}


                />
            </div>
        </div>
    )
}

export default Body;