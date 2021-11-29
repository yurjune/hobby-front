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

  const webSocket = new WebSocket("ws://localhost:3060");
  webSocket.onOpen = function () {
    console.log('서버와 웹소켓 연결 성공');
  };
  webSocket.onmessage = function (event) {
    console.log(event.data);
    webSocket.send('클라이언트에서 서버로 답장');
  };

  return (
    <>
      <AppLayout openLogInForm={openLogInForm}>
        <Timer />
        {isOpened ? <LogInForm closeLogInForm={closeLogInForm} /> : ""}
        <div>{data.id}</div>
        <div>{data.email}</div>
        <ContentsTable />
      </AppLayout>
    </>
  );
};

export default Home;
