import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/Link';
import {
  Wrapper,
  Menu,
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
        {me ? <>
          <Link href="#"><MenuItem>고객센터</MenuItem></Link>
          <Link href="#"><MenuItem>마이페이지</MenuItem></Link>
          <MenuItem onClick={onClickLogout}>로그아웃</MenuItem>
        </>
        : <>
          <MenuItem href="#">고객센터</MenuItem>
          <MenuItem onClick={openLoginForm}>로그인</MenuItem>
        </>}
      </Menu>
    </Wrapper>
  );
};

export default HeaderTop;