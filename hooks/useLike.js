import { useEffect, useCallback } from 'react';
import axios from 'axios';

const useLike = (me, postData, setIsLiked, mutate) => {

  useEffect(() => { // 좋아요 확인
    if (!me || !postData || !postData.Likers) return;
    const result = postData.Likers.filter(item => item.id === me.id)
    if (result.length >= 1) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [postData]);

  const likePost = useCallback(async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch(
        `/post/like?postId=${postData.id}&likerId=${me.id}`
      );
      if (result.data === 'success') mutate();
    } catch(error) {
      alert(error.response.data);
    }
  }, [me, postData]);

  const unlikePost = useCallback(async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch(
        `/post/unlike?postId=${postData.id}&likerId=${me.id}`
      );
      if (result.data === 'success') mutate();
    } catch(error) {
      alert(error.response.data);
    }
  }, [me, postData]);

  return {
    likePost,
    unlikePost,
  }
};

export default useLike;
