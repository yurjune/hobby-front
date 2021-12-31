import React from 'react';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  Profile,
  ProfileItem,
} from './style';
import { Avatar } from '../PostCardBig/style';
import { Box } from '../Common';
import { localhost } from '../Common/global';

const Header = ({ me }) => {
  const router = useRouter();

  const clickMenu = (value) => () => {
    if (!me) return alert('먼저 로그인해주세요!')
    router.push(value);
  }

  return (
    <Box bg="gold">
      <Wrapper>
        <Logo>로고</Logo>
        <Menu>
          <Link href="/"><MenuItem>커뮤니티</MenuItem></Link>
          <MenuItem onClick={clickMenu('/mypage')}>마이페이지</MenuItem>
          <MenuItem onClick={clickMenu('/write')}>글쓰기</MenuItem>
        </Menu>
        {me && <> 
          <Box color="gold" w="30px" />
          <Profile>
            <Avatar url={localhost(me.Image?.src)} />
            <ProfileItem>{`${me.name} 님 환영합니다!`}</ProfileItem>
          </Profile>
        </>}
      </Wrapper>
    </Box>
  );
};

export default Header;