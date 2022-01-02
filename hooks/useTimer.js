import { useState, useEffect, useRef } from 'react';

// 타이머 없는 페이지에서도 타이머가 돌아가게 하는 함수
const useTimer = () => {
  const [now, setNow] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    setNow(JSON.parse(localStorage.getItem('time')));
    setIsStop(JSON.parse(localStorage.getItem('isStop')));
  }, []);

  useEffect(() => {
    localStorage.setItem('time', JSON.stringify(now));
  }, [now]);

  useEffect(() => {
    if (isStop) {
      clearInterval(timer.current)
    } else {
      timer.current = setInterval(() => {
        setNow(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [isStop])

};

export default useTimer;