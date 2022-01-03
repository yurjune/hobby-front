import { useEffect } from 'react';
import axios from 'axios';

const useLike = (me, postData, setIsLiked, mutate) => {

  useEffect(() => { // 좋아요 확인
    if (!me || !postData) return;
    const result = postData.Likers.filter(item => item.id === me.id)
    if (result.length >= 1) return setIsLiked(true);
  }, [postData]);

  const likePost = async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch(
        `/post/like?postId=${postData.id}&likerId=${me.id}`
      );
      if (result.data === 'success') setIsLiked(true);
      mutate();
    } catch(error) {
      alert(error.response.data);
    }
  };

  const unlikePost = async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch(
        `/post/unlike?postId=${postData.id}&likerId=${me.id}`
      );
      if (result.data === 'success') setIsLiked(false);
      mutate();
    } catch(error) {
      alert(error.response.data);
    }
  };

  return {
    likePost,
    unlikePost,
  }
};

export default useLike;
