import React, { useEffect, useState } from 'react';
import {
  Card,
  Hr,
} from './style';
import { FlexC, Text } from '../Common';
import { SideTimer } from '../Timer';
import { useToday } from '../../hooks/useDayjs';

const SideCard = ({ exPost }) => {
  const [now, setNow] = useState(0);
  const [today, setToday] = useState('');
  const date = exPost?.createdAt.slice(0, 10);

  useEffect(() => {
    if (exPost) return setNow(exPost.time);
    setNow(JSON.parse(localStorage.getItem('time')));
  }, []);

  useEffect(() => {
    const theDay = useToday();
    const year = theDay.year();
    const month = theDay.month();
    const date = theDay.date();
    setToday(`${year}년 ${month + 1}월 ${date}일`);
  }, []);

  return (
    <Card>
      <Text fontSize="20px">나의 기록! 🔥</Text>
      <SideTimer time={now} />
      <Hr />
      <Text mb="16px" size="18px">{date || today}</Text>
    </Card>
  );
};

export default SideCard;