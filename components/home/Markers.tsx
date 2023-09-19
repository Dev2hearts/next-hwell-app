import { INFO_KEY } from '@/hooks/useInfo';
import { MAP_KEY } from '@/hooks/useMap';
import { Info } from '@/types/info';
import { NaverMap } from '@/types/map';
import React from 'react';
import useSWR from 'swr';
import Marker from './Marker';

const Markers = () => {
  const { data: infos } = useSWR<Array<Info>>(INFO_KEY);
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  if (!map || !infos) return null;
  return (
    <>
      {infos.map((item,idx) => {
        return <Marker key={idx} map={map} cordinates={item.cordinates}/>;
      })}
    </>
  );
};

export default Markers;
