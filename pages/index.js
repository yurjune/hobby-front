import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import CategoryBar from '../components/CategoryBar';
import useFetch from '../hooks/useFetch';

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
  margin-bottom: 80px;
  gap: 15px;
`

const Community = () => {
  const [category, setCategory] = useState([]);
  const [postList, setPostList] = useState([]);
  const { data: me, error, isLoading } = useFetch('/user');
  const { data: postData, error: postError, isLoading: postIsLoading } = useFetch('/posts');

  useEffect(() => {
    if (category.length !== 0) {
      const result = postData?.filter(item => category.includes(item.category));
      setPostList(result);
    } else {
      setPostList(postData);
    }
  }, [postData, category]);

  if (error) return <div>에러 발생</div>;
  if (postError) return <div>에러 발생</div>;
  if (postIsLoading) return <div>로딩 중...</div>;

  const addCategory = (value) => {
    if (category.includes(value)) return;
    const result = category.concat(value);
    setCategory(result);
  }

  const removeCategory = (value) => () => {
    const result = category.filter(item => item !== value);
    setCategory(result);
  }

  return (
    <AppLayout me={me}>
      <CategoryBar
        category={category}
        addCategory={addCategory}
        removeCategory={removeCategory}
      />
      <Wrapper>
        {postList?.map(item => (
          <PostCard key={item.id} data={item} />
        ))}
      </Wrapper>
    </AppLayout>
  );
};

export default Community;