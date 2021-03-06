import React from 'react';
import { FlexC, Flex, Bold, Text } from '../Common';
import useDayjs from '../../hooks/useDayjs';
import { Avatar } from '../Common/custom';
import { requestToServer } from '../Common/global';

const PostBar = ({ children, item, clickUser }) => {
  return (
    <Flex mb="20px" pos="relative">
      <Avatar
        w="36px"
        radius="18px"
        mr="14px"
        url={requestToServer(item.User.Image?.src)}
        onClick={clickUser(item.User.id)}
      />
      <FlexC flex="1">
        <Bold
          mt="2px"
          mb="8px"
          fontSize="15px"
          cursor="pointer"
          onClick={clickUser(item.User.id)}
        >
          {item.User.name}
        </Bold>
        <Text color="#22222280" fontSize="14px">{useDayjs(item.createdAt)}</Text>
      </FlexC>
      {children}
    </Flex>
  );
};

export default PostBar;