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
import { Box } from '../Common';
import { Avatar } from '../PostCard/style';

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
        {me ? <> 
          <Box color="gold" w="30px" />
          <Profile>
            <Avatar />
            <ProfileItem>{me.name}</ProfileItem>
            <ProfileItem>01 : 24</ProfileItem>
            <ProfileItem>수영</ProfileItem>
          </Profile>
          </>
        : ''}
      </Wrapper>
    </>
  );
};

export default Header;