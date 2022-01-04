import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FlexC, Flex } from '../Common';
import {
  Modal,
  ModalBody,
  MenuItem,
  Hr,
  iconStyle,
} from './style';

const SideNav = ({ me, clickHamburger }) => {
  const router = useRouter();

  const clickMenu = (value) => () => {
    if (!me) return alert('먼저 로그인해주세요!')
    router.push(value);
  }

  return (
    <Modal>
      <ModalBody>
        <Flex justify="flex-end" p="20px 20px 0 0">
          <FontAwesomeIcon size="lg" icon={faTimes} style={iconStyle} onClick={clickHamburger} />
        </Flex>
        <FlexC p="20px">
          <Hr />
          <MenuItem onClick={() => router.push('/')}>커뮤니티</MenuItem>
          <Hr />
          <MenuItem onClick={clickMenu(`/profile/${me?.id}`)}>내 프로필</MenuItem>
          <Hr />
          <MenuItem onClick={clickMenu('/mypage')}>마이페이지</MenuItem>
          <Hr />
          <MenuItem onClick={clickMenu('/write')}>글쓰기</MenuItem>
          <Hr />
        </FlexC>
      </ModalBody>
    </Modal>
  );
};

export default SideNav;