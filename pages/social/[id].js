import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import PostCardBig from '../../components/PostCardBig';
import useFetch from '../../hooks/useFetch';
import useInfinite from '../../hooks/useInfinite';
import { Flex } from '../../components/Common';
import { Button } from '../../components/Common/custom';

const Social = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: me, error: meError, isLoading: meIsLoading } = useFetch('/user');
  const { data, error, size, setSize, mutate } = useInfinite('/posts/detail', id);

  const loadMorePosts = () => {
    setSize(size + 1);
  };

  if (error || meError) return <div>에러 발생</div>;
  if (!router.isReady) return <div>로딩중...</div>;

  return (
    <AppLayout me={me}>
      {data && data.map(item => item.map(post => (
        <PostCardBig me={me} postData={post} mutate={mutate} />
      )))}
      <Flex maxW="650px" m="0 auto" p="10px" justify="flex-end">
        <Button onClick={loadMorePosts}>더 보기</Button>
      </Flex>
    </AppLayout>
  );
};

export default Social;