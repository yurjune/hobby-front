import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import CategoryBar from '../components/CategoryBar';

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
    padding: 10px;
    gap: 15px;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  padding: 10px;
  gap: 15px;
`
const article = 'The next generation of the web’s favorite icon library + toolkit is now available as a Beta release! Try out the Free version. Subscribe to Font Awesome Pro to get even more!'

const Community = () => {
  return (
    <AppLayout>
      <CategoryBar />
      <Wrapper>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
        <PostCard article={article}></PostCard>
      </Wrapper>
    </AppLayout>
  );
};

export default Community;