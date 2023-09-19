import useMap from '@/hooks/useMap';
import Map from './Map';
import Markers from './Markers';
import { NaverMap } from '@/types/map';

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
