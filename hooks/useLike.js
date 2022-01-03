import axios from 'axios';

const useLike = (me, postId, setIsLiked, mutate) => {

  const likePost = async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch(
        `/post/like?postId=${postId}&likerId=${me.id}`
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
        `/post/unlike?postId=${postId}&likerId=${me.id}`
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
