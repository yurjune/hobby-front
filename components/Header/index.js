import React, { useState, useEffect } from 'react';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  Profile,
  ProfileItem,
  iconStyle,
} from './style';
import { Avatar } from '../Common/custom';
import { Flex, Box, Text } from '../Common';
import { localhost } from '../Common/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ me }) => {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(true);

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

  return (
    <Box bg="gold">
      <Wrapper>
        <Logo>로고</Logo>
        {isDesktop ? (<>
          <Menu>
            <Link href="/"><MenuItem>커뮤니티</MenuItem></Link>
            <MenuItem onClick={clickMenu(`/profile/${me?.id}`)}>내 프로필</MenuItem>
            <MenuItem onClick={clickMenu('/mypage')}>마이페이지</MenuItem>
            <MenuItem onClick={clickMenu('/write')}>글쓰기</MenuItem>
          </Menu>
          {me && <> 
            <Box color="gold" w="30px" />
            <Profile onClick={clickUser(me.id)}>
              <Avatar url={localhost(me.Image?.src)} />
              <ProfileItem>{`${me.name} 님 환영합니다!`}</ProfileItem>
            </Profile>
          </>}
        </>)
        : (<>
          { me && <>
            <Avatar mr="15px" url={localhost(me.Image?.src)} onClick={clickUser(me.id)} />
            <Text mr="30px" cursor="pointer" onClick={clickUser(me.id)}>{me.name}</Text>
            <FontAwesomeIcon size="lg" icon={faBars} style={iconStyle} />
          </>
          }
        </>)
      }
      </Wrapper>
    </Box>
  );
};

export default Header;