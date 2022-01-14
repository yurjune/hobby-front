import React from 'react';
import { Comment } from './style';
import { Flex } from '../Common';
import { Button, Avatar } from '../Common/custom';
import { requestToServer } from '../Common/global';

const CommentForm = React.memo(({ me, item, writing, submit, handle }) => {
  console.log('CommentForm rendered');
  return (<>
    { me &&
      <Flex mb="20px" flex="1">
        <Avatar
          w="36px"
          radius="18px"
          mr="10px"
          url={requestToServer(me.Image?.src)}
        />
        <Comment placeholder="댓글을 남겨주세요" value={writing} onChange={handle} />
        <Button h="35px" self="center" onClick={submit(item)}>게시</Button>
      </Flex>
    }
  </>);
});

export default CommentForm;