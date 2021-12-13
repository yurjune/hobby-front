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
  Paragraph,
  Picture,
  ShowComment,
  iconStyle,
} from './style';
import { localhost } from '../PostCard';
import CommentForm from './CommentForm';
import next from 'next';

const PostCardBig = ({ me, postData }) => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [recommentTargetId, setRecommentTargetId] = useState('');
  const [comment, handleComment, setComment] = useInput('');
  const [recomment, handleRecomment, setRecomment] = useInput('');
  const [preComments, setPreComments] = useState([]);
  const [moreComments, setMoreComments] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!postData) return;
    if (postData.Comments.length >= 3) {
      const a = postData.Comments.slice(0, 2);
      setPreComments(a);
      const b = postData.Comments.slice(2, postData.Comments.length);
      setMoreComments(b);
    } else if (postData.Comments.length >= 1) {
      const a = postData.Comments.slice(0, postData.Comments.length);
      setPreComments(a);
    }
    return;
  }, [postData]);

  useEffect(() => {
    if (!postData || !me) return;
    const result = postData.User.Followers.filter(item => item.id === me.id)
    if (result.length >= 1) return setIsFollowing(true);
  }, [postData]);

  const submitComment = (target) => async () => {
    try {
    const result = await axios.post(`/post/comment`, {
      userId: me.id,
      postId: postData.id,
      content: comment,
    });
    alert('댓글이 등록되었습니다!');
    setComment('');
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  const submitRecomment = (target) => async () => {
    try {
    const result = await axios.post(`/post/recomment`, {
      userId: me.id,
      postId: postData.id,
      content: recomment,
      commentId: target.id,
    });
    alert('대댓글이 등록되었습니다!');
    setRecomment('');
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  const showComments = () => {
    if (isOpenComment === false) {
      setIsOpenComment(true);
    } else {
      setIsOpenComment(false);
    }
  }

  const openRecommentForm = (value) => () => {
    // if (value === undefined) return;
    console.log(recommentTargetId)
    if (value === recommentTargetId) {
      setRecommentTargetId('')
    } else {
      setRecommentTargetId(value);
    }
  };

  const onClickFollow = async () => {
    if (!me) return alert('먼저 로그인해주세요');
    const result = await axios.patch('/user/follow', {
      followerId: me.id,
      followingId: postData.User.id,
    });
    alert(`${result.data.name}님을 팔로우하였습니다`);
    router.reload();
  };

  const onClickUnfollow = async () => {
    if (!me) return alert('먼저 로그인해주세요');
    const result = await axios.delete(
      `/user/follow?followingId=${postData.User.id}&followerId=${me.id}`
    );
    alert(`${result.data.name}님을 언팔로우하였습니다`);
    router.reload();
  };

  const onClickUserName = (userId) => () => router.push(``);
  console.log(postData);

  return (
    <>{ postData &&
      <FlexC maxW="650px" m="0 auto" p="10px">
        { me && me.id !== postData.User.id ?
          <PostBar item={postData}>
            {isFollowing
            ? <Button h="35px" self="center" onClick={onClickUnfollow}>언팔로우</Button>
            : <Button h="35px" self="center" onClick={onClickFollow}>팔로우</Button>
            }
          </PostBar>
          : <PostBar item={postData} />
        }
        <Picture mb="10px" url={localhost(postData?.Images[0].src)} />
        <FlexC p="5px">
          <Flex mb="20px">
            <FontAwesomeIcon size="2x" icon={faHeart} style={iconStyle} />
            <FontAwesomeIcon size="2x" icon={faComment} style={iconStyle} />
          </Flex>
          <Paragraph mb="30px">
            <a>{postData?.User.name}</a>{postData?.content}
          </Paragraph>
          {postData.Comments.length >= 3 &&
            <>{isOpenComment
              ? <ShowComment onClick={showComments}>댓글 접기</ShowComment>
              : <ShowComment onClick={showComments}>댓글 {postData?.Comments.length}개 모두보기</ShowComment>
            }</>}
          { preComments && preComments.map(item => (
            <CommenterBar
              key={item.createdAt}
              item={item}
              writing={recomment}
              handle={handleRecomment}
              submit={submitRecomment}
              openRecommentForm={openRecommentForm}
              recommentTargetId={recommentTargetId}
            />))}
          { moreComments && isOpenComment && moreComments.map(item => <CommenterBar key={item.createdAt} item={item} />)}
          { me && <CommentForm
            item={postData}
            writing={comment}
            handle={handleComment}
            submit={submitComment}
          />}
        </FlexC>
      </FlexC>
    }</>
  );
};

export default PostCardBig;