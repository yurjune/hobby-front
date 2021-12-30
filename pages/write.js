import React from 'react';
import SecondLayout from '../components/AppLayout/SecondLayout';
import DividedPage from '../components/DividedPage';
import useFetch from '../hooks/useFetch';

const Write = () => {
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;

  return (
    <SecondLayout me={me}>
      <DividedPage me={me} />
    </SecondLayout>
  );
};

export default Write;