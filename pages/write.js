import React from 'react';
import Head from 'next/head';
import SecondLayout from '../components/AppLayout/SecondLayout';
import WritingPage from '../components/WritingPage';
import useFetch from '../hooks/useFetch';

const Write = () => {
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;

  return (<>
    <Head>
      <title>글쓰기</title>
    </Head>
    <SecondLayout me={me}>
      <WritingPage me={me} />
    </SecondLayout>
  </>);
};

export default Write;