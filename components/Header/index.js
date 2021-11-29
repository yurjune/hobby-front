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

const Header = () => {
  return (
    <>
      <Wrapper>
        <Logo>로고</Logo>
        <Menu>
          <Link href="#"><MenuItem>타이머</MenuItem></Link>
          <Link href="#"><MenuItem>랭킹</MenuItem></Link>
          <Link href="#"><MenuItem>커뮤니티</MenuItem></Link>
        </Menu>
        <Profile>
          <ProfileItem>허니</ProfileItem>
          <ProfileItem>01 : 24</ProfileItem>
          <ProfileItem>수영</ProfileItem>
        </Profile>
      </Wrapper>
    </>
  );
};

export default Header;