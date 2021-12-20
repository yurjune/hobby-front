import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Hr,
} from './style';
import { FlexC, Text } from '../Common';
import { SmallTimer } from '../Timer';

const SideCard = ({ exPost }) => {
  const router = useRouter();

  const date = exPost?.createdAt.slice(0, 10);
  const category = exPost?.category;

  return (
    <FlexC p="15px" flex="1">
      <Text size="20px">나의 기록! 🔥</Text>
      <SmallTimer hours={10} minutes={10} seconds={10} />
      <Hr />
      <Text mb="16px" size="18px">{date || 11}</Text>
      <Text mb="16px" size="18px">{`카테고리: ${category || 'ㅎㅎ'}`}</Text>
    </FlexC>
  );
};

export default SideCard;