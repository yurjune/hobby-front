import React from 'react';
import Link from 'next/Link';
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

  return (
    <Box bg="gold">
      <Wrapper>
        <Logo>로고</Logo>
        <Menu>
          <Link href="/"><MenuItem>커뮤니티</MenuItem></Link>
          <Link href="/mypage"><MenuItem>마이페이지</MenuItem></Link>
          <Link href="/write"><MenuItem>글쓰기</MenuItem></Link>
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