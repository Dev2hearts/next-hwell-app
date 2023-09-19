import { Cordinates } from './info';

export type NaverMap = naver.maps.Map;
export type Marker = {
  cordinates: Cordinates;
  map: NaverMap;
};
