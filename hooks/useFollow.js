import axios from 'axios';
import { useRouter } from 'next/router';

const useFollow = (me, userId) => {
  const router = useRouter();

  const onClickFollow = async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch('/user/follow', {
        followerId: me.id,
        followingId: userId,
      });
      alert(`${result.data.name}님을 팔로우하였습니다`);
      router.reload();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const onClickUnfollow = async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.delete(
        `/user/follow?followingId=${userId}&followerId=${me.id}`
      );
      alert(`${result.data.name}님을 언팔로우하였습니다`);
      router.reload();
    } catch (error) {
      alert(error.response.data);
    }
  };

  return {
    onClickFollow,
    onClickUnfollow,
  }
};

export default useFollow;
