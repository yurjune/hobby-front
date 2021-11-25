import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import Timer from '../components/Timer';

const Home = () => {
  return (
    <>
      <AppLayout>
        <Timer />
      </AppLayout>
    </>
  );
};

export default Home;