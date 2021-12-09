import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput';
import PostBar from './PostBar';
import CommenterBar from './CommenterBar';
import { FlexC, Flex, Bold, Text, Button } from '../Common';
import { 
  Avatar,
  Paragraph,
  Picture,
  Comment,
  ShowComment,
  iconStyle,
} from './style';
import { localhost } from '../PostCard';

const PostCardBig = ({ me, data }) => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [comment, handleComment] = useInput('');
  const [preComments, setPreComments] = useState([]);
  const [moreComments, setMoreComments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (data?.Comments.length >= 3) {
      const a = data.Comments.slice(0, 2);
      setPreComments(a);
      const b = data.Comments.slice(2, data.Comments.length);
      setMoreComments(b);
    } else if (data?.Comments.length >= 1) {
      const a = data.Comments.slice(0, data.Comments.length);
      setPreComments(a);
    }
    return;
  }, [data]);

  const submitComment = async () => {
    const result = await axios.post(`/post/${data.id}/comment`, {
      userId: me.id,
      postId: data.id,
      content: comment,
    });
    alert('댓글이 등록되었습니다!');
  };
  const onClickShowComment = () => {
    if (isOpenComment === false) {
      return setIsOpenComment(true);
    }
    setIsOpenComment(false);
  }
  const onClickUserName = (userId) => () => router.push(``);

  return (
    <FlexC maxW="650px" m="0 auto" p="10px">
      <PostBar item={data}>
        <Button h="35px" self="center">팔로우</Button>
      </PostBar>
      <Picture mb="10px" url={localhost(data?.Images[0].src)} />
      <FlexC p="5px">
        <Flex mb="20px">
          <FontAwesomeIcon size="2x" icon={faHeart} style={iconStyle} />
          <FontAwesomeIcon size="2x" icon={faComment} style={iconStyle} />
        </Flex>
        <Paragraph mb="30px">
          <a>{data?.User.name}</a>{data?.content}
        </Paragraph>
        {data?.Comments?.length >= 3 &&
          <>{isOpenComment
            ? <ShowComment onClick={onClickShowComment}>댓글 접기</ShowComment>
            : <ShowComment onClick={onClickShowComment}>댓글 {data?.Comments.length}개 모두보기</ShowComment>
          }</>}
        { preComments && preComments.map(item => <CommenterBar key={item.createdAt} item={item} />)}
        { moreComments && isOpenComment && moreComments.map(item => <CommenterBar key={item.createdAt} item={item} />)}
        { me &&
        <Flex mb="20px">
          <Avatar w="36px" radius="18px" mr="10px" />
          <Comment placeholder="댓글을 남겨주세요" value={comment} onChange={handleComment} />
          <Button h="35px" self="center" onClick={submitComment}>게시</Button>
        </Flex>}
      </FlexC>
    </FlexC>
  );
};

export default PostCardBig;