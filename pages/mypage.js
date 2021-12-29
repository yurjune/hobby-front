import React from 'react';
import { Divide } from '../components/DividedPage/style';
import AppLayout from '../components/AppLayout';
import SideMenu from '../components/SideMenu';
import useFetch from '../hooks/useFetch';
import MyProfile from '../components/MyProfile';

const MyPage = () => {
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;

  return (
    <AppLayout me={me}>
      <Divide>
        <SideMenu />
        <MyProfile me={me} />
      </Divide>
    </AppLayout>
  );
};

export default MyPage;