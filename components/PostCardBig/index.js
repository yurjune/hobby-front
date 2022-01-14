import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput';
import useFollow from '../../hooks/useFollow';
import useLike from '../../hooks/useLike';
import { selectionSort } from '../Common/global';
import PostCardBigView from './PostCardBigView';

const PostCardBig = ({ me, postData, mutate }) => {
  console.log('Index rendered');
  const [comment, handleComment, setComment] = useInput('');
  const [commentList, setCommentList] = useState([]);
  const [previewComments, setPreviewComments] = useState([]);
  
  const [reply, handleReply, setReply] = useInput('');
  const [replyTargetId, setReplyTargetId] = useState('');
  
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isOpenReplyBar, setIsOpenReplyBar] = useState(false);

  const router = useRouter();

  const {
    onClickFollow,
    onClickUnfollow,
  } = useFollow(me, postData?.UserId, mutate);

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
    if (!me || !postData || !postData.User) return;
    const result = postData.User.Followers.filter(item => item.id === me.id);
    if (result.length >= 1) {
      setIsFollowing(true)
    } else {
      setIsFollowing(false);
    }
  }, [postData]);

  const submitComment = () => async () => {
    try {
      await axios.post(`/comment`, {
        userId: me.id,
        postId: postData.id,
        content: comment,
      });
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
      setReply('');
      mutate();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const showComments = () => {
    if (!isOpenComment) return setIsOpenComment(true);
    setIsOpenComment(false);
  };

  const showReplies = () => {
    if (isOpenReplyBar) return setIsOpenReplyBar(false);
    setIsOpenReplyBar(true);
  };

  const openReplyForm = (value) => () => {
    if (value === replyTargetId) return setReplyTargetId('');
    setReplyTargetId(value);
  };

  const onClickMenu = () => {
    if (!isOpenMenu) return setIsOpenMenu(true);
    setIsOpenMenu(false);
  };

  const clickComment = () => {
    if (!me) alert('먼저 로그인해주세요');
  };
  const clickUser = (userId) => () => router.push(`/profile/${userId}`);
  
  const editPost = () => router.push(`/edit/${postData.id}`);

  const deletePost = async () => {
    try {
      const isDelete = confirm('정말 삭제하시겠습니까?');
      if (isDelete) {
        await axios.delete(`/post?postId=${postData.id}`);
        router.push('/');
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  const deleteComment = (target) => async () => {
    try {
      const isDelete = confirm('정말로 삭제하시겠습니까?');
      if (!isDelete) return;
      await axios.delete(`/comment?commentId=${target.id}`);
      mutate();
    } catch (error) {
      if (error.response?.data) return alert(error.response.data);
      console.error(error);
    }
  };

  const props = {
    me,
    postData,
    comment,
    handleComment,
    commentList,
    previewComments,
    isFollowing,
    isLiked,
    isOpenMenu,
    isOpenComment,
    onClickFollow,
    onClickUnfollow,
    likePost,
    unlikePost,
    submitComment,
    showComments,
    clickUser,
    clickComment,
    onClickMenu,
    editPost,
    deletePost,
  }

  const commentBarProps = {
    me,
    reply,
    handleReply,
    replyTargetId,
    isOpenReplyBar,
    openReplyForm,
    submitReply,
    showReplies,
    clickUser,
    deleteComment,
  }

  return (
    <PostCardBigView props={props} commentBarProps={commentBarProps}/>
  );
};

export default PostCardBig;