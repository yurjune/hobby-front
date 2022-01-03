import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SecondLayout from '../../components/AppLayout/SecondLayout';
import useFetch from '../../hooks/useFetch';
import PostCard from '../../components/PostCard';
import MyProfile from '../../components/MyProfile';
import useTimer from '../../hooks/useTimer';
import useInfinite from '../../hooks/useInfinite';
import { limit } from '../../hooks/useInfinite';

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
  const { data: me, error:meError, isLoading: meIsLoading } = useFetch('/user');
  const { data: user, error: userError, isLoading: userIsLoading, mutate: userMutate } = useFetch(
    `/user/person?userId=${id}`
  );
  const { data, error, size, setSize, mutate } = useInfinite('/posts/profile', null, id);

  const loadMorePosts = () => setSize(size + 1);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (data[data.length - 1].length >= limit) loadMorePosts();
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [data]);

  if (meError || userError || error) return <div>에러 발생</div>;
  if (userIsLoading) return <div>로딩 중...</div>;

  return (
    <SecondLayout me={me}>
      <MyProfile me={me} user={user} mutate={userMutate} />
      <Wrapper>
        {data && data.map(item => item.map(post => (
          <PostCard key={post.id} me={me} postData={post} mutate={mutate} />
        )))}
      </Wrapper>
    </SecondLayout>
  );
};

export default Profile;