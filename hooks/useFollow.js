import axios from 'axios';

const useFollow = (me, userId, mutate) => {

  const onClickFollow = async () => {
    try {
      if (!me) return alert('먼저 로그인해주세요');
      const result = await axios.patch('/user/follow', {
        followerId: me.id,
        followingId: userId,
      });
      alert(`${result.data.name}님을 팔로우하였습니다`);
      mutate();
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
      mutate();
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
