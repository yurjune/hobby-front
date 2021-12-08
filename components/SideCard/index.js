import React from 'react';
import {
  Box,
  Text,
  Description,
} from './style';
import { SmallTimer } from '../Timer';

const SideCard = () => {
  return (
    <Box>
      <Text>나의 기록! 🔥</Text>
      <SmallTimer hours={10} minutes={10} seconds={10} />
      <hr />
      <Description>
        <div>일시: 2021/12/25</div>
        <div>카테고리: 수영</div>
      </Description>
    </Box>
  );
};

export default SideCard;