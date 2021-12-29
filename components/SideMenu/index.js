import React from 'react';
import { Flex, FlexC, Box } from '../Common';
import {
  Card,
} from './style';

const Menu = [
  '개인정보 변경',
  '작성 글',
];

const SideMenu = () => {
  return (
    <FlexC flex="1">
      <Card>
        {Menu.map(item => <FlexC key={item}>{item}</FlexC>)}
      </Card>
    </FlexC>
  );
};

export default SideMenu;