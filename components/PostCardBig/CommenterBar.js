import React from 'react';
import { FlexC, Flex, Box, Bold, Text, Button } from '../Common';
import { Avatar } from './style';
import useDayjs from '../../hooks/useDayjs';
import CommentForm from './CommentForm';

const CommenterBar = ({ children, item, writing, submit, handle, openRecommentForm, recommentTargetId }) => {
  return (
    <>
      <Flex mb="20px" key={item?.createdAt}>
        <Avatar w="36px" radius="18px" mr="10px" />
        <FlexC flex="1">
          <Flex mt="4px" mb="8px" fontSize="14px">
            <Bold mr="10px" cursor="pointer">{item?.User.name}</Bold>
            <Text>{item?.content}</Text>
          </Flex>
          <Flex color="#22222280" fontSize="13px" cursor="pointer">
            <Text mr="15px">{useDayjs(item?.createdAt)}</Text>
            {/* <Text onClick={openRecommentForm(item?.id)}>답글 쓰기</Text> */}
            {/* <Text>답글 쓰기</Text> */}
          </Flex>
        </FlexC>
        {children}
      </Flex>
      { item?.id === recommentTargetId &&
        <Flex>
          <Box w="46px" />
          <CommentForm
            item={item}
            writing={writing}
            handle={handle}
            submit={submit}
          />
        </Flex>
      }
    </>
  );
};

export default CommenterBar;