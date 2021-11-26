import React from 'react';
import styled from 'styled-components';
import Link from 'next/Link';

const Wrapper = styled.div`
  display: flex;
  maxWidth: 1300px;
  height: 40px;
  align-items: center;
  margin: 0 auto;
  position: relative;
`
const Logo = styled.div`
  font-size: 20px;
  color: orange;
`
const Menu = styled.div`
  display: flex;
  gap: 2em;
  padding: 0 2em;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 300px;
  background-color: orange;
`
const MenuItem = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  &:visited {
    color: red;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.25rem;
    background-color: white;
    // transform: scaleX(0);
    // transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
  }
`
const Profile = styled.div`
  display: flex;
  gap: 2em;
  padding: 0 2em;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: orange;
`
const ProfileItem = styled.div`
`

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