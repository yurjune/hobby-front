import React from 'react';
import AppLayout from '../components/AppLayout';
import DividedPage from '../components/DividedPage';
import useFetch from '../hooks/useFetch';

const Write = () => {
  const { data: me, error, isLoading } = useFetch('/user');
  
  if (error) return <div>에러 발생</div>;

  return (
    <AppLayout me={me}>
      <DividedPage me={me} />
    </AppLayout>
  );
};

export default Write;