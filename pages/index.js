import React, { useEffect } from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import useFetch from '../hooks/useFetch';
import useInfinite from '../hooks/useInfinite';
import { Button } from '../components/Common/custom';
import { Flex } from '../components/Common';
import SearchBar from '../components/SearchBar';
import { limit } from '../hooks/useInfinite';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
    padding: 10px;
    gap: 15px;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  padding: 10px;
  margin-bottom: 40px;
  gap: 15px;
`

const Home = () => {
  const { data: me, error: meError, isLoading: meIsLoading } = useFetch('/user');
  const { data, error, size, setSize, mutate } = useInfinite('/posts');

  const loadMorePosts = () => {
    setSize(size + 1);
  };

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

  if (meError || error) return <div>에러 발생</div>;
  console.log('data:', data);

  return (
    <AppLayout me={me}>
      <Flex p="10px" mb="20px" justify="flex-end">
        <SearchBar />
      </Flex>
      <Wrapper>
        {data && data.map(item => item.map(post => (
          <PostCard key={post.id} me={me} postData={post} mutate={mutate} />
        )))}
      </Wrapper>
      {/* <Flex p="10px" justify="flex-end">
        <Button onClick={loadMorePosts}>더 보기</Button>
      </Flex> */}
    </AppLayout>
  );
};

export default Home;