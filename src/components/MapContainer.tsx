import React, { useRef, useState, useEffect, useCallback } from 'react'

interface MapContainerProps extends google.maps.MapOptions {
  onClick?: (e: google.maps.MapMouseEvent) => void;
  updatePosition: (lat: number, lng: number) => void;
  children: React.ReactNode;
  position: google.maps.LatLngLiteral;
  saveAddress: (address: string) => void;
}

export function MapContainer({ zoom, position, children, updatePosition, saveAddress }: MapContainerProps) {

  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const onClick = useCallback(async (event: google.maps.MapMouseEvent) => {
    try {

      const geocoder = new google.maps.Geocoder();

      const { lat, lng } = event.latLng!.toJSON()

      const response = await geocoder.geocode({ location: { lat, lng } })

      if (response.results[0]) {
        map?.setZoom(18);

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
        });

        saveAddress(response.results[0].formatted_address);

        marker.setMap(null)

        updatePosition(lat, lng);
      } else {
        window.alert("No results found");
      }
    } catch (error) {
      throw new Error("Geocoder failed due to: " + error);
    }

  }, [map, updatePosition, saveAddress])

  useEffect(() => {
    if (map) {
      google.maps.event.clearListeners(map, 'click')

      map.addListener("click", onClick);
    }
  }, [map, onClick]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: position,
        zoom,
        mapTypeId: 'roadmap'
      }));
    }
  }, [map, position]);


  return (
    <>
      <div ref={ref} style={{ height: '100vh', width: '100vw' }} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  )
}
