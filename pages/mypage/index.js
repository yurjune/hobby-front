import React from 'react';
import { Divide } from '../../components/DividedPage/style';
import SecondLayout from '../../components/AppLayout/SecondLayout';
import SideMenu from '../../components/SideMenu';
import useFetch from '../../hooks/useFetch';
import MyProfile from '../../components/MyProfile';

const MyPage = () => {
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;
  if (!me) return <div>로그인이 필요합니다!</div>
  console.log(me);
  return (
    <SecondLayout me={me}>
      <Divide>
        <SideMenu />
        <MyProfile me={me} />
      </Divide>
    </SecondLayout>
  );
};

export default MyPage;