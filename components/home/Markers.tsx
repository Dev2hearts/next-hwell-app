import { INFO_KEY } from '@/hooks/useInfo';
import { MAP_KEY } from '@/hooks/useMap';
import { Info } from '@/types/info';
import { NaverMap } from '@/types/map';
import React from 'react';
import useSWR from 'swr';
import Marker from './Marker';

const Markers = () => {
  // 전역 상태 정보(위경도)를 활용한다.
  const { data: infos } = useSWR<Array<Info>>(INFO_KEY);
  //   전역 상태 정보 네이버 map 객체 정보 활용
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  //   infos 와 map 이 모두 있어야 출력한다.
  if (!map || !infos) return null;
  // 여기서 위 조건을 통과하면 marker들을 출력한다.
  return (
    <>
      {infos.map((item,idx) => {
        // Marker 는 네이버지도, 위경도 정보를 받는다.
        return <Marker key={idx} map={map} cordinates={item.cordinates}/>;
      })}
    </>
  );
};

export default Markers;
