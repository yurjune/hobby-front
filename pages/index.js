import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Timer from '../components/Timer';
import { LogInForm } from '../components/LoginForm';
import useFetch from '../hooks/useFetch';
import ContentsTable from '../components/ContentsTable';

const Home = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { data, error, isLoading } = useFetch('/user')
  
  if (error) return <div>에러 발생</div>;
  if (isLoading) return <div>로딩 중</div>;
  
  const openLogInForm = () => {
    setIsOpened(true);
    console.log(isOpened)
  };
  const closeLogInForm = () => {
    setIsOpened(false);
  };

  return (
    <>
      <AppLayout openLogInForm={openLogInForm}>
        <Timer />
        {/* {isOpened ? <LogInForm closeLogInForm={closeLogInForm} /> : ""}
        <div>{data.id}</div>
        <div>{data.email}</div> */}
        <ContentsTable />
      </AppLayout>
    </>
  );
};

export default Home;
