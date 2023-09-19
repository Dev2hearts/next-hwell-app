// 위경도 정보를 여러 컴포넌트에서 재활용하여 관리하는 Hook
// 함수를 한번만 만들고 재 랜더링이 되더라도 새로 생성하지 않음.
// 성능 최적화 : 개발단계는 적용 X => 테스트 중에 고려
import { useCallback } from 'react';
// 위경도 정보를 전역 state 로 보관한다.
// SWR 활용하여 위경도 데이터를 전역에 보관(담아준다)한다.
// mutate : SWR 에 저장한다.
import { Info } from '@/types/info';
import useSWR, { mutate } from 'swr';
// SWR 의 KET 는 문자열 : 문자열의 장소에 전역데이터를 보관한다.
export const INFO_KEY = '/infos';
const useInfo = () => {
  // 초기 위경도 데이터를 전달받아 SWR 키 인 INFO_KEY 에 보관한다.
  // infos 매개변수는 [위도,경도] 로 된 배열 !
  const initializeInfos = useCallback((infos: Array<Info>) => {
    mutate(INFO_KEY, infos);
  }, []);

  return { initializeInfos };
};
export default useInfo;
