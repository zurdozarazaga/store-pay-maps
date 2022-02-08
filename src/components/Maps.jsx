import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  console.log('9. location en maps',data);
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: data.map.lat,
     lng: data.map.lng
  }


  return (
    <>
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    {/* { defaultCenter && 
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>,
      console.log('maps loaded')
      
    }
    {
    !defaultCenter.lat && <h1>Loading...</h1>
  } */}
  </>
  );
  
}

export default Map;