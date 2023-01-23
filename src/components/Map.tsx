import {  useEffect, useState } from "react";
import { Wrapper } from '@googlemaps/react-wrapper'
import { Marker } from "./Marker";
import { MapContainer } from "./MapContainer";

interface MapProps {
  saveAddressFromGoogleMaps: (address: string) => void;
}

export function Map({ saveAddressFromGoogleMaps }: MapProps) {

  const [position, setPosition] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      })
    }
  },[])

  function updatePosition(lat: number, lng: number) {
    setPosition({
      lat,
      lng
    });
  }

  function saveAddress(address: string) {
    saveAddressFromGoogleMaps(address)
  }
  
  return (
    <Wrapper apiKey={`${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}>
      <MapContainer 
        zoom={11}
        position={position}
        updatePosition={updatePosition}
        saveAddress={saveAddress}
      >
        <Marker position={position} />
      </MapContainer>
    </Wrapper>
  );
}

