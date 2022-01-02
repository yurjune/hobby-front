import React, { useEffect, useState } from 'react';
import {
  Card,
  Hr,
} from './style';
import { FlexC, Text } from '../Common';
import { SideTimer } from '../Timer';

const SideCard = ({ exPost }) => {
  const [now, setNow] = useState(0);
  const date = exPost?.createdAt.slice(0, 10);
  const category = exPost?.category;

  useEffect(() => {
    if (exPost) return setNow(exPost.time);
    setNow(JSON.parse(localStorage.getItem('time')));
  }, []);

  return (
    <Card>
      <Text fontSize="20px">나의 기록! 🔥</Text>
      <SideTimer time={now} />
      <Hr />
      <Text mb="16px" size="18px">{date || '오늘의 날짜'}</Text>
      <Text mb="16px" size="18px">{`카테고리: ${category || '없음'}`}</Text>
    </Card>
  );
};

export default SideCard;