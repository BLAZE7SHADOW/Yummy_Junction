import { useEffect, useState } from "react";

const useLocation = () => {
    const [location, setLocation] = useState(null);

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
        getLocation();
    }, [])

    return location;
}

export default useLocation
