import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SecondLayout from '../../components/AppLayout/SecondLayout';
import useFetch from '../../hooks/useFetch';
import PostCard from '../../components/PostCard';
import MyProfile from '../../components/MyProfile';
import useTimer from '../../hooks/useTimer';

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
    padding: 10px;
    gap: 15px;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  padding: 10px;
  margin-bottom: 80px;
  gap: 15px;
`

const Profile = () => {
  useTimer();

  const router = useRouter();
  const { id } = router.query;
  const { data: me, error, isLoading } = useFetch('/user');
  const { data: user, error: userError, isLoading: userIsLoading } = useFetch(
    `/user/person?userId=${id}`
  );
  const { data: posts, error: postsError, isLoading: postsIsLoading } = useFetch(
    `/posts/profile?userId=${id}`
  );

  if (error || userError || postsError) return <div>에러 발생</div>;
  if (userIsLoading || postsIsLoading) return <div>로딩 중...</div>;

  return (
    <SecondLayout me={me}>
      <MyProfile me={me} user={user} />
      <Wrapper>
        {posts.map(post => (<PostCard key={post.id} data={post} />))}
      </Wrapper>
    </SecondLayout>
  );
};

export default Profile;