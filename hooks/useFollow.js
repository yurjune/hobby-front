import axios from 'axios';
import { useCallback } from 'react';

const useFollow = (me, userId, mutate) => {
  const onClickFollow = useCallback(async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      await axios.patch('/user/follow', {
        followerId: me.id,
        followingId: userId,
      });
      mutate();
    } catch (error) {
      alert(error.response.data);
    }
  }, [me, userId, mutate]);

  const onClickUnfollow = useCallback(async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      await axios.delete(
        `/user/follow?followingId=${userId}&followerId=${me.id}`
      );
      mutate();
    } catch (error) {
      alert(error.response.data);
    }
  }, [me, userId, mutate]);

  return {
    onClickFollow,
    onClickUnfollow,
  }
};

export default useFollow;
