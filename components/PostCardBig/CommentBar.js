import React, { useState } from 'react';
import axios from 'axios';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FlexC, Flex, Box, Bold, Text, Pointer } from '../Common';
import { Avatar, iconStyle } from './style';
import useDayjs from '../../hooks/useDayjs';
import CommentForm from './CommentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const editComment = () => async() => {
  try {
  } catch (error) {
    alert(error.response.data);
  }
};

const deleteComment = (target) => async () => {
  try {
    const isDelete = confirm('정말로 삭제하시겠습니까?');
    if (!isDelete) return;
    const result = await axios.delete(`/comment?commentId=${target.id}`);
    alert(result.data);
  } catch (error) {
    alert(error.response.data);
  }
};

const CommentBar = ({ me, item, replyTargetId, openReplyForm, reply, handleReply, submitReply }) => {
  const [isOpenReplyBar, setIsOpenReplyBar] = useState(false);

  const showReplies = () => {
    if (isOpenReplyBar) {
      setIsOpenReplyBar(false);
    } else {
      setIsOpenReplyBar(true);
    }
  };

  return (<>
    <CommentBody me={me} item={item}>
      { me && <Pointer onClick={openReplyForm(item.id)}>답글 쓰기</Pointer> }
    </CommentBody>
    { item.Son && item.Son.length >= 1 &&
      <Pointer
        onClick={showReplies}
        ml="46px"
        mb="20px"
        color="#22222280"
        fontSize="13px"
      >
        { isOpenReplyBar ? `---- 답글 접기` : `---- 답글 ${item.Son.length}개 모두 보기` }
      </Pointer>
    }
    { item.id === replyTargetId &&
      <Flex>
        <Box w="46px" />
        <CommentForm
          item={item}
          writing={reply}
          handle={handleReply}
          submit={submitReply}
        />
      </Flex>
    }
    { isOpenReplyBar && item.Son.length >= 1 && item.Son.map(son =>
      <Flex key={son.createdAt} flex="1">
        <Box w="46px" />
        <CommentBody me={me} item={son} />
      </Flex>
    )}
  </>)
};

const CommentBody = ({ children, me, item }) => {
  return (
    <Flex mb="20px" key={item.createdAt} flex="1">
      <Avatar w="36px" radius="18px" mr="10px" />
      <FlexC flex="1">
        <Flex mt="4px" mb="8px" fontSize="14px">
          <Pointer mr="10px" weight="bold">{item.User?.name}</Pointer>
          <Text>{item.content}</Text>
          { me && item.User?.id === me.id &&
            <Flex flex="1" justify="flex-end">
              <FontAwesomeIcon icon={faEdit} size="sm" style={iconStyle} onClick={editComment(item)} />
              <FontAwesomeIcon icon={faTimes} size="sm" style={iconStyle} onClick={deleteComment(item)} />
            </Flex>
          }
        </Flex>
        <Flex color="#22222280" fontSize="13px">
          <Text mr="15px">{useDayjs(item.createdAt)}</Text>
          {children}
        </Flex>
      </FlexC>
    </Flex>
  )
};

export default CommentBar;