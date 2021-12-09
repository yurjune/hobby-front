import React from 'react';
import { FlexC, Flex, Bold, Text, Button } from '../Common';
import { Avatar } from './style';

const CommenterBar = ({ children, item }) => {
  return (
    <Flex mb="20px" key={item?.createdAt}>
      <Avatar w="36px" radius="18px" mr="10px" />
      <FlexC flex="1">
        <Flex mt="4px" mb="8px" fontSize="14px">
          <Bold mr="10px" cursor="pointer">{item?.UserId}</Bold>
          <Text>{item?.content}</Text>
        </Flex>
        <Text color="#22222280" fontSize="13px">{item?.createdAt}</Text>
      </FlexC>
      {children}
    </Flex>
  );
};

export default CommenterBar;