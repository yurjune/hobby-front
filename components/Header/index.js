import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Desktop,
  Mobile,
  Logo,
  Menu,
  MenuItem,
  Profile,
  ProfileItem,
  Hamburger,
  iconStyle,
} from './style';
import { Avatar } from '../Common/custom';
import { FlexC, Box, Text } from '../Common';
import { localhost } from '../Common/global';
import SideNav from '../SideNav';

const Header = ({ me }) => {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHamburger, setIsHamburger] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 868) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false)
    }
  }, []);

  const clickMenu = (value) => () => {
    if (!me) return alert('먼저 로그인해주세요!')
    router.push(value);
  }

  const clickUser = (userId) => () => router.push(`/profile/${userId}`);

  const clickHamburger = () => {
    if (isHamburger) return setIsHamburger(false);
    setIsHamburger(true);
  }

  return (<>
    <Box bg="gold">
      <Wrapper>
        <Logo>로고</Logo>
        <Desktop>
          <Menu>
            <MenuItem onClick={() => router.push('/')}>커뮤니티</MenuItem>
            <MenuItem onClick={clickMenu(`/profile/${me?.id}`)}>내 프로필</MenuItem>
            <MenuItem onClick={clickMenu('/mypage')}>마이페이지</MenuItem>
            <MenuItem onClick={clickMenu('/write')}>글쓰기</MenuItem>
          </Menu>
          {me && <> 
            <Profile onClick={clickUser(me.id)}>
              <Avatar url={localhost(me.Image?.src)} />
              <ProfileItem>{`${me.name} 님 환영합니다!`}</ProfileItem>
            </Profile>
          </>}
        </Desktop>
        <Mobile>
          { me && <>
            <Avatar url={localhost(me.Image?.src)} onClick={clickUser(me.id)} />
            <ProfileItem onClick={clickUser(me.id)}>{me.name}</ProfileItem>
          </>}
          <Hamburger onClick={clickHamburger}>
            <div />
            <div />
            <div />
          </Hamburger>
        </Mobile>
      </Wrapper>
      { isHamburger && <SideNav me={me} clickHamburger={clickHamburger} /> }
    </Box>
  </>);
};

export default Header;