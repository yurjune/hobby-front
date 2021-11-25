import React from 'react';
import styled from 'styled-components';
import Link from 'next/Link';

const Wrapper = styled.div`
  display: flex;
  width: 1300px;
  height: 40px;
  margin: 0 auto;
  position: relative;
  font-size: 14px;
  align-items: center;
`
const Menu = styled.div`
  display: flex;
  position: absolute;
  gap: 1rem;
  padding: 0 1rem;
  right: 0;
`
const MenuItem = styled.a`
`

const MiniHeader = () => {
  return (
    <Wrapper>
      <Menu>
        <MenuItem>고객센터</MenuItem>
        <MenuItem>마이페이지</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default MiniHeader;