import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Wrapper,
  Menu,
  MenuItem,
} from './style';

import axios from 'axios';

const HeaderTop = ({ me, openLoginForm }) => {
  const router = useRouter();
  const onClickLogout = async () => {
    const result = await axios.get('/auth/logout');
    if (result.data === 'ok') {
      alert('로그아웃 되었습니다');
      const time = JSON.parse(localStorage.getItem('time'));
      await axios.patch('/user/time', {
        userId: me.id,
        time,
      });
      localStorage.removeItem('time');
      localStorage.setItem('isStop', JSON.stringify(true));
      return router.push('/');
    }
  };

  return (
    <Wrapper>
      <Menu>
        {me ? <>
          <Link href="#"><MenuItem>고객센터</MenuItem></Link>
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