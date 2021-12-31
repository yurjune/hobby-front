import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faStopCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import {
  Wrapper,
  SmallWrapper,
  Count,
  Time,
} from './style';

const iconStyle = {
  cursor: "pointer",
};

const convertTime = (time) => {
  if (time < 10) return '0' + time;
  return time;
};

export const Timer = ({ me }) => {
  const [now, setNow] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const timer = useRef(null);
  
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
    return () => clearInterval(timer.current);
  }, [isStop])

  const calculateTime = (value) => {
    let hours = parseInt(value / 3600)
    let minutes = parseInt(value / 60) - (60 * hours);
    let seconds = value - (3600 * hours) - (60 * minutes);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const operateTimer = () => {
    if (!me) return alert('먼저 로그인해 주세요');
    if (isStop) return setIsStop(false);
    return setIsStop(true);
  }

  const stopTimer = () => {
    const answer = confirm('정말로 초기화하시겠습니까?');
    if (answer) {
      localStorage.removeItem('time');
      setNow(0);
      setIsStop(true);
    }
  }

  return (
    <Wrapper>
      { me ?
        <Time>
          <Count>{convertTime(hours)}</Count>
          <Count>:</Count>
          <Count>{convertTime(minutes)}</Count>
          <Count>:</Count>
          <Count>{convertTime(seconds)}</Count>
        </Time>
        : <Time><Count>00 : 00 : 00</Count></Time>
      }
      { isStop
        ? <FontAwesomeIcon icon={faPlayCircle} size="3x" style={iconStyle} onClick={operateTimer} />
        : <FontAwesomeIcon icon={faPauseCircle} size="3x" style={iconStyle} onClick={operateTimer} />
      }
      <FontAwesomeIcon icon={faStopCircle} size="3x" style={iconStyle} onClick={stopTimer} />
    </Wrapper>
  );
};

export const SmallTimer = ({ hours, minutes, seconds }) => {
  return (
    <SmallWrapper>
      <Time>
        <Count>{convertTime(hours)}</Count>
        <Count>:</Count>
        <Count>{convertTime(minutes)}</Count>
        <Count>:</Count>
        <Count>{convertTime(seconds)}</Count>
      </Time>
    </SmallWrapper>
  );
};
