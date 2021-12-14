import React from 'react';
import { FlexC, Flex, Box, Bold, Text } from '../Common';
import { Avatar } from './style';
import useDayjs from '../../hooks/useDayjs';

const ReplyBar = ({ item }) => {
  return (
    <Flex>
      <Box w="46px" />
      <Flex mb="20px" key={item.createdAt}>
        <Avatar w="36px" radius="18px" mr="10px" />
        <FlexC flex="1">
          <Flex mt="4px" mb="8px" fontSize="14px">
            <Bold mr="10px" cursor="pointer">{item.User?.name}</Bold>
            <Text>{item.content}</Text>
          </Flex>
          <Flex color="#22222280" fontSize="13px">
            <Text mr="15px">{useDayjs(item.createdAt)}</Text>
          </Flex>
        </FlexC>
      </Flex>
    </Flex>
  );
};

export default ReplyBar;