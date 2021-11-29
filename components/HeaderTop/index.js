import React from 'react';
import Link from 'next/Link';
import {
  Wrapper,
  Menu,
  MenuItem,
} from './style'

const HeaderTop = ({ openLogInForm }) => {
  return (
    <Wrapper>
      <Menu>
        <MenuItem>고객센터</MenuItem>
        <MenuItem>마이페이지</MenuItem>
        <MenuItem onClick={openLogInForm}>로그인</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default HeaderTop;