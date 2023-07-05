import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { MENU_API, MOBI_MENU_API } from "../utils/constant";

const useApiData = () => {
    const [web, setWeb] = useState(true);
    const { resId } = useParams();


    const [fetchData, setFetchData] = useState(null);


    const fetchMenu = async () => {
        try {
            const data = await fetch(web ? MENU_API + resId : MOBI_MENU_API + resId);
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

    useEffect(() => {
        let deviceWidth = window.innerWidth;
        if (deviceWidth < 660) {
            setWeb(false);
            fetchMenu();
        }
    }, [])


    return fetchData;
}

export default useApiData
