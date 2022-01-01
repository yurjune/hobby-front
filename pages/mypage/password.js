import React from 'react';
import SecondLayout from '../../components/AppLayout/SecondLayout';
import useFetch from '../../hooks/useFetch';
import MyInfo from '../../components/MyInfo';
import Password from '../../components/MyInfo/Password';

const MyPage = () => {
  const { data: me, error, isLoading } = useFetch('/user');

  if (error) return <div>에러 발생</div>;
  if (!me) return <div>로그인이 필요합니다!</div>

  return (
    <SecondLayout me={me}>
      <MyInfo>
        <Password me={me} />
      </MyInfo>
    </SecondLayout>
  );
};

export default MyPage;