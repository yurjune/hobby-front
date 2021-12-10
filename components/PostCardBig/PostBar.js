import React from 'react';
import { FlexC, Flex, Bold, Text, Button } from '../Common';
import { Avatar } from './style';
import useDayjs from '../../hooks/useDayjs';

const PostBar = ({ children, item }) => {
  return (
    <Flex mb="20px" key={item?.createdAt}>
      <Avatar w="36px" radius="18px" mr="10px" />
      <FlexC flex="1">
        <Bold mt="4px" mb="8px" cursor="pointer">{item?.User.name}</Bold>
        <Text color="#22222280" fontSize="14px">{useDayjs(item?.createdAt)}</Text>
      </FlexC>
      {children}
    </Flex>
  );
};

export default PostBar;