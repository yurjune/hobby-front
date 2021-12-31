import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SecondLayout from '../../components/AppLayout/SecondLayout';
import DividedPage from '../../components/DividedPage';
import useFetch from '../../hooks/useFetch';

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: me, error, isLoading } = useFetch('/user');

  const { data: exPost, error: exPostError, isLoading: exPostIsLoading } = useFetch(
    `/post/editpost?postId=${id}`
  );
    
  if (error) return <div>에러 발생</div>;
  if (exPostError) return <div>에러 발생</div>;
  if (exPostIsLoading) return <div>로딩 중...</div>;

  if (!me) return <div>로그인 요망</div>;
  if (exPost.UserId !== me?.id) return <div>당신은 작성자가 아닙니다</div>;

  return (
    <SecondLayout me={me}>
      <DividedPage me={me} exPost={exPost} />
    </SecondLayout>
  );
};

export default Edit;