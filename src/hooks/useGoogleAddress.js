import { useState, useEffect } from 'react';
import axios from 'axios';

const getCoordinates = async (api) => {
  const response = await axios(api);
  return response
}

const useGoogleAddress = (address, city, province, country) => {
  const [map, setMap] = useState({});
  // const [loadedMap, setLoadedMap] = useState({
  //   isLoaded: false,
  //   loading: false,
  //   error: false,
  // });

  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address,province}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  // setLoadedMap({isLoaded: false, loading: true, error: false});
  useEffect( async () => {
    const res = await getCoordinates(API);
    setMap(res.data.results[0].geometry.location);
    // setLoadedMap({...loadedMap,  isLoaded: true, loading: false, error: false});
  }, []);
  return {
    map
    
  };
}
  

export default useGoogleAddress;
