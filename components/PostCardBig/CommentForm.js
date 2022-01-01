import React from 'react';
import { Comment } from './style';
import { Flex } from '../Common';
import { Button, Avatar } from '../Common/custom';
import { localhost } from '../Common/global';

const CommentForm = ({ me, item, writing, submit, handle }) => {

  return (
    <Flex mb="20px" flex="1">
      <Avatar
        w="36px"
        radius="18px"
        mr="10px"
        url={localhost(me.Image?.src)}
      />
      <Comment placeholder="댓글을 남겨주세요" value={writing} onChange={handle} />
      <Button h="35px" self="center" onClick={submit(item)}>게시</Button>
    </Flex>
  );
};

export default CommentForm;