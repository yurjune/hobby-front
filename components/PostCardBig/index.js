import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput';
import PostBar from './PostBar';
import CommenterBar from './CommenterBar';
import { FlexC, Flex, Box, Button } from '../Common';
import { 
  Paragraph,
  Picture,
  ShowComment,
  iconStyle,
} from './style';
import { localhost } from '../PostCard';
import CommentForm from './CommentForm';

const PostCardBig = ({ me, postData }) => {
  const [comment, handleComment, setComment] = useInput('');
  const [reply, handleReply, setReply] = useInput('');
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [replyTargetId, setReplyTargetId] = useState('');

  const [commentList, setCommentList] = useState([]);
  const [previewComments, setPreviewComments] = useState([]);
  const router = useRouter();

  useEffect(() => { // 댓글을 댓글과 답글로 분류
    if (!postData) return;
    const replyIdList = [];
    postData.Comments.map(comment => comment.Son.map(son => replyIdList.push(son.id)));

    const comment = [];
    postData.Comments.forEach(item => {
      if (!replyIdList.includes(item.id)) {
        comment.push(item);
      }
    });
    setCommentList(comment);
  }, [postData]);

  useEffect(() => {
    if (!postData) return;
    if (commentList.length >= 1) {
      const temp = [];
      temp.push(commentList[commentList.length - 1])
      return setPreviewComments(temp);
    }
  }, [postData, commentList]);

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
    }
  };

  const submitReply = (target) => async () => {
    try {
      const result = await axios.post(`/post/reply`, {
        userId: me.id,
        postId: postData.id,
        content: reply,
        commentId: target.id,
      });
      alert('대댓글이 등록되었습니다!');
      setReply('');
    } catch (error) {
      console.log(error);
    }
  };

  const openReplyForm = (value) => () => {
    if (value === replyTargetId) {
      setReplyTargetId('')
    } else {
      setReplyTargetId(value);
    }
  };

  const showComments = () => {
    if (isOpenComment === false) {
      setIsOpenComment(true);
    } else {
      setIsOpenComment(false);
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
  // console.log(postData);

  return (<>
    { postData &&
      <FlexC maxW="650px" m="0 auto" p="10px">
        { me && me.id !== postData.User?.id ?
          <PostBar item={postData}>
            {isFollowing
              ? <Button h="35px" self="center" onClick={onClickUnfollow}>언팔로우</Button>
              : <Button h="35px" self="center" onClick={onClickFollow}>팔로우</Button>
            }
          </PostBar>
          : <PostBar item={postData} />
        }
        <Picture mb="10px" url={localhost(postData.Images[0]?.src)} />
        <FlexC p="5px">
          <Flex mb="20px">
            <FontAwesomeIcon size="2x" icon={faHeart} style={iconStyle} />
            <FontAwesomeIcon size="2x" icon={faComment} style={iconStyle} />
          </Flex>
          <Paragraph mb="30px">
            <a>{postData.User?.name}</a>{postData.content}
          </Paragraph>
          { postData.Comments.length >= 2 &&
            <ShowComment onClick={showComments}>
              { isOpenComment ? `댓글 접기` : `댓글 ${postData.Comments.length}개 모두 보기`}
            </ShowComment>
          }
          { !isOpenComment && previewComments.length >=1 && previewComments.map(item =>
            <CommenterBar
              key={item.createdAt}
              item={item}
              me={me}
              replyTargetId={replyTargetId}
              openReplyForm={openReplyForm}
              reply={reply}
              handleReply={handleReply}
              submitReply={submitReply}
            />
          )}
          { isOpenComment && commentList.map(item => 
            <CommenterBar
              key={item.createdAt}
              item={item}
              me={me}
              replyTargetId={replyTargetId}
              openReplyForm={openReplyForm}
              reply={reply}
              handleReply={handleReply}
              submitReply={submitReply}
            />
          )}
          { me && <CommentForm
            item={postData}
            writing={comment}
            handle={handleComment}
            submit={submitComment}
          />}
        </FlexC>
      </FlexC>
    }
  </>);
};

export default PostCardBig;