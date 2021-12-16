import React, { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Timer } from '../components/Timer';
import useFetch from '../hooks/useFetch';
import ContentsTable from '../components/ContentsTable';
import { io } from "socket.io-client";

const Home = () => {
  const [now, setNow] = useState(0);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;
  // if (isLoading) return <div>로딩 중</div>;

  const ENDPOINT = 'http://localhost:3060/time';

  useEffect(() => {
    const socket = io(ENDPOINT, {
      // cors: { origin: 'http://localhost:3060', credentials: true },
    });

    if (!isConnected) {
      socket.on("connect", () => {
        console.log('connected');
      });
      setIsConnected(true);
    }

    socket.on("disconnect", () => {
      console.log('disconnected');
      setIsConnected(false);
    });

    console.log(isStop);
    if (!isStop) {
      socket.emit('start');
      socket.on('running', (data) => {
        console.log(data);
        setNow(parseInt(data.time, 10));
      });
    } else {
      socket.emit('stop');
    }
  }, [isConnected, isStop]);

  useEffect(() => {
    calculateTime(now);
  }, [now])

  const operateTimer = () => {
    if (!me) return alert('먼저 로그인해 주세요');
    if (isStop) return setIsStop(false);
    return setIsStop(true);
  }

  const calculateTime = (value) => {
    let hours = parseInt(value / 3600)
    let minutes = parseInt(value / 60) - (60 * hours);
    let seconds = value - (3600 * hours) - (60 * minutes);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <>
      <AppLayout me={me}>
        <Timer
          me={me}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isStop={isStop}
          operateTimer={operateTimer}
        />
        <ContentsTable />
      </AppLayout>
    </>
  );
};

export default Home;
