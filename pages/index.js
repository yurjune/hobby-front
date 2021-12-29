import React, { useEffect, useState, useRef } from 'react';
import AppLayout from '../components/AppLayout';
import { Timer } from '../components/Timer';
import useFetch from '../hooks/useFetch';
import ContentsTable from '../components/ContentsTable';

const Home = () => {
  const [now, setNow] = useState(0);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const timer = useRef(null);
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;
  // if (isLoading) return <div>로딩 중</div>;
  
  useEffect(() => {
    setNow(JSON.parse(localStorage.getItem('time')));
  }, []);
  
  useEffect(() => {
    localStorage.setItem('time', JSON.stringify(now));
    calculateTime(JSON.parse(localStorage.getItem('time')));
  }, [now]);

  useEffect(() => {
    if (isStop) {
      clearInterval(timer.current)
    } else {
      timer.current = setInterval(() => {
        setNow(prev => prev + 1);
      }, 1000);
    }
  }, [isStop])

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
