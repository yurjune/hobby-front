import React from 'react';
import Head from 'next/head';
import SecondLayout from '../../components/AppLayout/SecondLayout';
import useFetch from '../../hooks/useFetch';
import MyInfo from '../../components/MyInfo';
import InfoForm from '../../components/MyInfo/InfoForm';
import useTimer from '../../hooks/useTimer';

const MyPage = () => {
  useTimer();

  const { data: me, error, isLoading } = useFetch('/user');

  if (error) return <div>에러 발생</div>;
  if (!me) return <div>로그인이 필요합니다!</div>

  return (<>
    <Head>
      <title>마이페이지</title>
    </Head>
    <SecondLayout me={me}>
      <MyInfo>
        <InfoForm me={me} />
      </MyInfo>
    </SecondLayout>
  </>);
};

export default MyPage;