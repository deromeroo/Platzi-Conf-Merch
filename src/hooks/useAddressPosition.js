import { useEffect, useState } from "react";
import axios from "axios";

const useAddressPosition = address => {
    const [map, setMap] = useState({
        latitude: '',
        longitude: ''
    });

    const api = `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=ab081d485fe644dc85127e7abdad0783&limit=1`

    useEffect( () => {
		async function fetchData() {
			const response = await axios(api);
            const {lat, lon} = await response.data.features[0].properties;
			setMap({
                latitude: lat,
                longitude: lon
            });
		};

		fetchData();
	}, []);

    return map;
};

export default useAddressPosition;