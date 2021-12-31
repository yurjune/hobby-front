import React, { useEffect, useState } from 'react';
import {
  Hr,
  Wrapper,
} from './style';
import { FlexC, Text } from '../Common';
import { SmallTimer } from '../Timer';

const SideCard = ({ exPost }) => {
  const [now, setNow] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const date = exPost?.createdAt.slice(0, 10);
  const category = exPost?.category;

  useEffect(() => {
    setNow(JSON.parse(localStorage.getItem('time')));
  }, []);

  useEffect(() => {
    calculateTime(now);
  }, [now]);

  const calculateTime = (value) => {
    let hours = parseInt(value / 3600)
    let minutes = parseInt(value / 60) - (60 * hours);
    let seconds = value - (3600 * hours) - (60 * minutes);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <Wrapper>
      <Text fontSize="20px">나의 기록! 🔥</Text>
      <SmallTimer hours={hours} minutes={minutes} seconds={seconds} />
      <Hr />
      <Text mb="16px" size="18px">{date || '오늘의 날짜'}</Text>
      <Text mb="16px" size="18px">{`카테고리: ${category || '없음'}`}</Text>
    </Wrapper>
  );
};

export default SideCard;