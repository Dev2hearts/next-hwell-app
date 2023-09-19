import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import useInfo from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { useEffect } from 'react';

interface IProps {
  infos: Array<Info>;
}
export default function Home({ infos }: IProps) {
  // 위경도에 대한 정보(json파일) 및 naver 의 map 객체를 전역으로 참조해서 관리 한다 !
  // SWR 상태관리 ()
  const { initializeInfos } = useInfo();

  // 최초 mount 가 되면 즉, html 이 출력이 되면
  // props 를 출력을 해본다.
  useEffect(() => {
    console.log(infos);
    initializeInfos(infos);
    // 새로운 정보가 들어온다면 다시 랜더링 해주기 위해서
  }, [infos, initializeInfos]);
  return (
    <>
      <Header />
      <MapScene />
    </>
  );
}
// pre-rendering 하여서 SSG 생성
export async function getStaticProps() {
  // public 에 있는 info.json 파일 가져 오기
  // props로 전달
  const infos = (await import('@/public/info.json')).default;
  return {
    props: { infos },
    // 일정한 시간이 지나면 데이터를 다시가져와서 pre-rendering 한다.
    // revalidate: 3600
  };
}
