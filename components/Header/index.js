import React from 'react';
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
          <MenuItem href="/">타이머</MenuItem>
          <MenuItem href="/">랭킹</MenuItem>
          <MenuItem href="/community">커뮤니티</MenuItem>
        </Menu>
        <Profile>
          {me ? 
            <>
              <ProfileItem>{me.name}</ProfileItem>
              <ProfileItem>01 : 24</ProfileItem>
              <ProfileItem>수영</ProfileItem>
            </>
            : ''
          }
        </Profile>
      </Wrapper>
    </>
  );
};

export default Header;