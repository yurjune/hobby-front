import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';

const Title = styled.div`
  color: skyblue;
  font-size: 40px;
`

const Home = () => {
  return (
    <>
      <AppLayout>
        <Title>프로젝트 시작</Title>
      </AppLayout>
    </>
  );
};

export default Home;