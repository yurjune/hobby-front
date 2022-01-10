import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { Flex } from '../../components/Common';
import SearchBar from '../../components/SearchBar';
import useFetch from '../../hooks/useFetch';
import useInfinite from '../../hooks/useInfinite';
import { limit } from '../../hooks/useInfinite';
import { Wrapper } from '../index';
import { isLoadMorePosts } from '../components/Common/global';

const Hashtag = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { data: me, error: meError, isLoading: meIsLoading } = useFetch('/user');
  
  const { data, error, size, setSize, mutate } = useInfinite('/posts/hashtag', null, null, tag);

  const loadMorePosts = () => setSize(size + 1);

  useEffect(() => {
    if (!data) return;
    const onScroll = () => {
      if (isLoadMorePosts() && data[data.length - 1].length >= limit) loadMorePosts();
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [data]);

  if (error || meError) return <div>에러 발생</div>;
  if (!router.isReady) return <div>로딩중...</div>;

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
    </AppLayout>
  );
};

export default Hashtag;