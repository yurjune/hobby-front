import React from 'react';
import SecondLayout from '../components/AppLayout/SecondLayout';
import WritingPage from '../components/WritingPage';
import useFetch from '../hooks/useFetch';

const Write = () => {
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;

  return (
    <SecondLayout me={me}>
      <WritingPage me={me} />
    </SecondLayout>
  );
};

export default Write;