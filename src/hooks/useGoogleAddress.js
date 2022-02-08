import { useState, useEffect } from 'react';
import axios from 'axios';

const getCoordinates = async (api) => {
  const response = await axios(api);
  console.log('7. respuesta de api',response);
  return response
}

const useGoogleAddress = (address, city, province, country) => {
  debugger;
  const [map, setMap] = useState({});
  // const [loadedMap, setLoadedMap] = useState({
  //   isLoaded: false,
  //   loading: false,
  //   error: false,
  // });

  console.log('4. objeto mapa antes del llamado',map);
  console.log('5. direccion antes de api',address);
  console.log('pocess.env',process.env.GOOGLE_MAPS_API_KEY);
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  console.log('antes del efecto');
  // setLoadedMap({isLoaded: false, loading: true, error: false});
  useEffect( async () => {
    console.log('dentro del efecto');
    const res = await getCoordinates(API);
    setMap(res.data.results[0].geometry.location);
    // setLoadedMap({...loadedMap,  isLoaded: true, loading: false, error: false});
  }, []);
  console.log('6. objeto mapa',map);
  return {
    map
    
  };
}
  

export default useGoogleAddress;
