import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid, faEllipsisV }  from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput';
import useFollow from '../../hooks/useFollow';
import useLike from '../../hooks/useLike';
import PostBar from './PostBar';
import CommentBar from './CommentBar';
import { FlexC, Flex, Box, Text, } from '../Common';
import { Button } from '../Common/custom';
import { 
  Wrapper,
  Picture,
  Paragraph,
  ShowComment,
  MenuWrapper,
  iconStyle,
} from './style';
import { localhost, selectionSort } from '../Common/global';
import CommentForm from './CommentForm';
import { Menu } from '../CategoryMenu';
import { PostTimer } from '../Timer';

const PostCardBig = ({ me, postData, mutate }) => {
  const router = useRouter();
  const [comment, handleComment, setComment] = useInput('');
  const [reply, handleReply, setReply] = useInput('');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [replyTargetId, setReplyTargetId] = useState('');

  const [commentList, setCommentList] = useState([]);
  const [previewComments, setPreviewComments] = useState([]);

  const {
    onClickFollow,
    onClickUnfollow,
  } = useFollow(me, postData?.UserId);

  const {
    likePost,
    unlikePost,
  } = useLike(me, postData, setIsLiked, mutate);

  useEffect(() => { // 댓글을 댓글과 답글로 분류
    if (!postData) return;
    const replyIdList = [];
    postData.Comments.map(comment => comment.Son.map(son => replyIdList.push(son.id)));

    const comments = [];
    postData.Comments.forEach(item => { // 답글 제외
      if (!replyIdList.includes(item.id)) comments.push(item);
    });
    const sortedComments = selectionSort(comments); // 댓글 id순서대로 정렬
    sortedComments.map(item => { // 답글 id순서대로 정렬
      item.Son = selectionSort(item.Son);
    });
    setCommentList(sortedComments);
  }, [postData]);

  useEffect(() => {
    if (!postData) return;
    if (commentList.length >= 1) {
      const temp = [];
      temp.push(commentList[commentList.length - 1])
      return setPreviewComments(temp);
    }
  }, [postData, commentList]);

  useEffect(() => { // 팔로우 확인
    if (!me || !postData) return;
    const result = postData.User.Followers.filter(item => item.id === me.id)
    if (result.length >= 1) return setIsFollowing(true);
  }, [postData]);

  const submitComment = () => async () => {
    try {
      await axios.post(`/comment`, {
        userId: me.id,
        postId: postData.id,
        content: comment,
      });
      alert('댓글이 등록되었습니다!');
      setComment('');
      mutate();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const submitReply = (target) => async () => {
    try {
      await axios.post(`/comment/reply`, {
        userId: me.id,
        postId: postData.id,
        content: reply,
        commentId: target.id,
      });
      alert('대댓글이 등록되었습니다!');
      setReply('');
      mutate();
    } catch (error) {
      alert(error.response.data);
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

  const clickComment = () => {
    if (!me) alert('먼저 로그인해주세요');
  };

  const onClickMenu = () => {
    if (isOpenMenu === false) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  };
  
  const clickUser = (userId) => () => router.push(`/profile/${userId}`);
  
  const editPost = () => router.push(`/edit/${postData.id}`);

  const deletePost = async () => {
    try {
      const isDelete = confirm('정말 삭제하시겠습니까?');
      if (isDelete) {
        const result = await axios.delete(`/post?postId=${postData.id}`);
        alert(result.data);
        router.push('/');
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (<>
    { postData &&
      <Wrapper>
        { me ?
          <>{ me.id === postData.User?.id
            ? <PostBar item={postData} clickUser={clickUser} >
                <MenuWrapper>
                  <FontAwesomeIcon size="lg" icon={faEllipsisV} style={iconStyle} onClick={onClickMenu} />
                  { isOpenMenu &&
                    <Menu top="40px" right="15px">
                      <li onClick={editPost}>수정</li>
                      <li onClick={deletePost}>삭제</li>
                    </Menu>
                  }
                </MenuWrapper>
              </PostBar>
            : <PostBar item={postData} clickUser={clickUser} >
                {isFollowing
                  ? <Button h="35px" self="center" onClick={onClickUnfollow}>언팔로우</Button>
                  : <Button h="35px" self="center" onClick={onClickFollow}>팔로우</Button>
                }
              </PostBar>
          }</>
          : <PostBar item={postData} clickUser={clickUser} />
        }
        <Picture mb="20px" url={localhost(postData.Images[0]?.src)} />
        <FlexC>
          <Flex mb="20px">
            <Flex flex="1">
              { me && isLiked
              ? <FontAwesomeIcon size="lg" icon={faHeartSolid} style={iconStyle} onClick={unlikePost} />
              : <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} onClick={likePost} />
              }
              <Text self="center" mr="20px">{postData.Likers?.length}</Text>
              <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} onClick={clickComment} />
              <Text self="center" mr="20px">{postData.Comments?.length}</Text>
            </Flex>
            <PostTimer time={postData.time} fontSize="18px" />
          </Flex>
          <Paragraph mb="30px">
            <a>{postData.User?.name}</a>{postData.content}
          </Paragraph>
            { postData.Comments?.length >= 2 &&
              <ShowComment onClick={showComments}>
                { isOpenComment ? `댓글 접기` : `댓글 ${postData.Comments.length}개 모두 보기`}
              </ShowComment>
            }
          <Box mb="10px">
            { !isOpenComment && previewComments.length >=1 && previewComments.map(item =>
              <CommentBar
                key={item.createdAt}
                item={item}
                me={me}
                replyTargetId={replyTargetId}
                openReplyForm={openReplyForm}
                reply={reply}
                handleReply={handleReply}
                submitReply={submitReply}
                clickUser={clickUser}
              />
            )}
            { isOpenComment && commentList.map(item => 
              <CommentBar
                key={item.createdAt}
                item={item}
                me={me}
                replyTargetId={replyTargetId}
                openReplyForm={openReplyForm}
                reply={reply}
                handleReply={handleReply}
                submitReply={submitReply}
                clickUser={clickUser}
              />
            )}
          </Box>
          { me && <CommentForm
            me={me}
            item={postData}
            writing={comment}
            handle={handleComment}
            submit={submitComment}
          />}
        </FlexC>
      </Wrapper>
    }
  </>);
};

export default PostCardBig;