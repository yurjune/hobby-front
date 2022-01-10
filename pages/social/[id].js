import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import PostCardBig from '../../components/PostCardBig';
import useFetch from '../../hooks/useFetch';
import useTimer from '../../hooks/useTimer';
import useInfinite from '../../hooks/useInfinite';
import { limit } from '../../hooks/useInfinite';
import { isLoadMorePosts } from '../../components/Common/global';

const Social = () => {
  useTimer();

  const router = useRouter();
  const { id } = router.query;
  const { data: me, error: meError, isLoading: meIsLoading } = useFetch('/user');
  const { data, error, size, setSize, mutate } = useInfinite('/posts/detail', id);

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
      {data && data.map(item => item.map(post => (
        <PostCardBig key={post.id} me={me} postData={post} mutate={mutate} />
      )))}
    </AppLayout>
  );
};

export default Social;