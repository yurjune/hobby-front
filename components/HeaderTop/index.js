import React from 'react';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Menu,
  MenuLink,
  MenuItem,
} from './style';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const HeaderTop = ({ me, openLoginForm }) => {
  const router = useRouter();
  const onClickLogout = async () => {
    const result = await axios.get('/auth/logout');
    if (result.data === 'ok') {
      alert('로그아웃 되었습니다');
      return router.reload('/');
    }
  };

  return (
    <Wrapper>
      <Menu>
        {me ?
        <>
          <MenuLink href="#">고객센터</MenuLink>
          <MenuLink href="#">마이페이지</MenuLink>
          <MenuItem onClick={onClickLogout}>로그아웃</MenuItem>
        </>
        : 
        <>
          <MenuLink href="#">고객센터</MenuLink>
          <MenuItem onClick={openLoginForm}>로그인</MenuItem>
        </>
        }
      </Menu>
    </Wrapper>
  );
};

export default HeaderTop;