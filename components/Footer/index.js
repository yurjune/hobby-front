import React from 'react';
import {
  Wrapper,
} from './style';
import { FlexC, Flex, Text } from '../Common';
import { softgray } from '../Common/color';
import { Hr } from '../WritingPage/style';

const Footer = () => {
  return (
    <Wrapper>
      <Hr />
      <Flex p="10px">
        <Text mr="20px">회사소개</Text>
        <Text mr="20px">채용방침</Text>
        <Text mr="20px">인재모집</Text>
      </Flex>
    </Wrapper>
  );
};

export default Footer;