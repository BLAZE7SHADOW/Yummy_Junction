import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const useApiData = () => {

    const { resId } = useParams();


    const [fetchData, setFetchData] = useState(null);


    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const fData = await data.json();
            setFetchData(fData);
        }
        catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        fetchMenu();
    }, [resId])

    return fetchData;
}

export default useApiData
