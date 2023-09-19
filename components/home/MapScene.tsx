import useMap from '@/hooks/useMap';
import Map from './Map';
import Markers from './Markers';
import { NaverMap } from '@/types/map';

// Marker 를 그려야 한다.
// Marker 는 naver.map 객체 에 그려야 한다. (전역참조)

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    console.log('로드 완료.');
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
