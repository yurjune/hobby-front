import React from 'react';
import {
  Hr,
} from './style';
import { FlexC, Text } from '../Common';
import { SmallTimer } from '../Timer';

const SideCard = ({ exPost }) => {
  return (
    <FlexC p="15px" flex="1">
      <Text size="20px">나의 기록! 🔥</Text>
      <SmallTimer hours={10} minutes={10} seconds={10} />
      <Hr />
      <Text mb="16px" size="18px">일시: 2021/12/25</Text>
      <Text mb="16px" size="18px">카테고리: 수영</Text>
    </FlexC>
  );
};

export default SideCard;