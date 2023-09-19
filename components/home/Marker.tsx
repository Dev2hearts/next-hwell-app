import { Marker } from '@/types/map';
import React, { useEffect } from 'react';

const Marker = ({ cordinates, map }: Marker) => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(...cordinates),
        map: map,
      });
      return () => {
        marker?.setMap(null);
      };
    }
  }, [map]);
  return null;
};

export default Marker;
