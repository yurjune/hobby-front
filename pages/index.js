import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Timer } from '../components/Timer';
import useFetch from '../hooks/useFetch';
import ContentsTable from '../components/ContentsTable';

const Home = () => {
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;
  // if (isLoading) return <div>로딩 중</div>;

  // const webSocket = new WebSocket("ws://localhost:3060");
  // webSocket.onOpen = function () {
  //   console.log('서버와 웹소켓 연결 성공');
  // };
  // webSocket.onmessage = function (event) {
  //   console.log(event.data);
  //   webSocket.send(JSON.stringify({
  //     hours,
  //   }));
  // };

  const operateTimer = (message) => () => {
    if (message === 'start') {
      setIsStop(false);
    } else {
      setIsStop(true);
    }
  }

  return (
    <>
      <AppLayout me={me}>
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          operateTimer={operateTimer}
        />
        <ContentsTable />
      </AppLayout>
    </>
  );
};

export default Home;
