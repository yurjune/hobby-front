import axios from 'axios';

const useLike = (me, postId, setIsLiked) => {

  const likePost = async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch(
        `/post/like?postId=${postId}&likerId=${me.id}`
      );
      if (result.data === 'success') setIsLiked(true);
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
