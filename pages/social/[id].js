import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import PostCardBig from '../../components/PostCardBig';
import useFetch from '../../hooks/useFetch';

const Social = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: me, error, isLoading } = useFetch('/user');
  const { data: postData, postError, postIsLoading } = useFetch(`/post?id=${id}`);
  
  if (error) return <div>에러 발생</div>;
  if (postError) return <div>에러 발생</div>;
  if (postIsLoading) return <div>로딩 중...</div>;

  return (
    <AppLayout me={me}>
      <PostCardBig me={me} data={postData} />
    </AppLayout>
  );
};

export default Social;