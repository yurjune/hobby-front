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
  margin-bottom: 40px;
  gap: 15px;
`

const Community = () => {
  const [category, setCategory] = useState([]);
  const [postList, setPostList] = useState([]);
  const { data: me, error, isLoading } = useFetch('/user');
  const { data: postsData, error: postsError, isLoading: postsIsLoading } = useFetch('/posts');

  useEffect(() => {
    if (category.length !== 0) {
      const result = postsData?.filter(item => category.includes(item.category));
      setPostList(result);
    } else {
      setPostList(postsData);
    }
  }, [postsData, category]);

  // useEffect(() => {

  // }, []);

  // useEffect(() => {
  //   function onScroll() {
  //     // console.log(
  //     //   window.scrollY, // 문서가 얼마나 스크롤됬는지
  //     //   document.documentElement.clientHeight, // 화면에 보이는 높이
  //     //   document.documentElement.scrollHeight, // 요소의 전체 높이
  //     // );
  //   }
  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);

  if (error) return <div>에러 발생</div>;
  if (postsError) return <div>에러 발생</div>;
  if (postsIsLoading) return <div>로딩 중...</div>;

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