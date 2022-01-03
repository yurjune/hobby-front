import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import PostCardBig from '../../components/PostCardBig';
import useFetch from '../../hooks/useFetch';
import useTimer from '../../hooks/useTimer';
import useInfinite from '../../hooks/useInfinite';
import { Flex } from '../../components/Common';
import { Button } from '../../components/Common/custom';
import { limit } from '../../hooks/useInfinite';

const Social = () => {
  useTimer();

  const router = useRouter();
  const { id } = router.query;
  const { data: me, error: meError, isLoading: meIsLoading } = useFetch('/user');
  const { data, error, size, setSize, mutate } = useInfinite('/posts/detail', id);

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

  if (error || meError) return <div>에러 발생</div>;
  if (!router.isReady) return <div>로딩중...</div>;

  return (
    <AppLayout me={me}>
      {data && data.map(item => item.map(post => (
        <PostCardBig key={post.id} me={me} postData={post} mutate={mutate} />
      )))}
      {/* <Flex maxW="650px" m="0 auto" p="10px" justify="flex-end">
        <Button onClick={loadMorePosts}>더 보기</Button>
      </Flex> */}
    </AppLayout>
  );
};

export default Social;