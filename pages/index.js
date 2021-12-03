import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Timer from '../components/Timer';
import { LogInForm } from '../components/LoginForm';
import useFetch from '../hooks/useFetch';
import ContentsTable from '../components/ContentsTable';

const Home = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [hours, setHours] = useState(31);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const { data, error, isLoading } = useFetch('/user');
  
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
    webSocket.send(JSON.stringify({
      hours,
    }));
  };

  const operateTimer = (message) => () => {
    if (message === 'start') {
      setIsStop(false);
    } else {
      setIsStop(true);
    }
    console.log(isStop)
  }

  return (
    <>
      <AppLayout openLogInForm={openLogInForm}>
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          operateTimer={operateTimer}
        />
        {isOpened ? <LogInForm closeLogInForm={closeLogInForm} /> : ""}
        <div>{data.id}</div>
        <div>{data.email}</div>
        <ContentsTable />
      </AppLayout>
    </>
  );
};

export default Home;
