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

const Header = ({ me }) => {
  return (
    <>
      <Wrapper>
        <Logo>로고</Logo>
        <Menu>
          <Link href="/"><MenuItem>타이머</MenuItem></Link>
          <MenuItem>랭킹</MenuItem>
          <Link href="/community"><MenuItem>커뮤니티</MenuItem></Link>
        </Menu>
        {me ? 
          <Profile>
            <ProfileItem>{me.name}</ProfileItem>
            <ProfileItem>01 : 24</ProfileItem>
            <ProfileItem>수영</ProfileItem>
          </Profile>
        : ''}
      </Wrapper>
    </>
  );
};

export default Header;