import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import useInfo from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

interface IProps {
  infos: Array<Info>;
}
export default function Home({ infos }: IProps) {
  const { initializeInfos } = useInfo();

  useEffect(() => {
    console.log(infos);
    initializeInfos(infos);
  }, [infos, initializeInfos]);
  return (
    <>
      <NextSeo
        title="건강검진센터 위치"
        description="건강검진센터 위치서비스입니다."
      />
      <Header />
      <MapScene />
    </>
  );
}
export async function getStaticProps() {
  const infos = (await import('@/public/info.json')).default;
  return {
    props: { infos },
  };
}
