import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Modal,
  ModalBody,
  ModalContents,
  Title,
  Label,
  Input,
  ButtonWrapper,
  LoginButton,
  Forgot,
  iconStyle,
} from './style';

const LoginForm = ({ closeLoginForm, onClickLogin, setOpenJoinPage }) => {
  return (
    <Modal>
      <ModalBody>
        <ModalContents>
          <Title>로그인</Title>
          <Label>이메일</Label>
          <Input type="text" placeholder="example@email.com" />
          <Label>비밀번호</Label>
          <Input type="password" placeholder="********" />
          <ButtonWrapper>
            <LoginButton onClick={onClickLogin}>로그인</LoginButton>
            <LoginButton onClick={() => setOpenJoinPage(true)}>회원가입</LoginButton>
          </ButtonWrapper>
          <Forgot>Forgot Password?</Forgot>
          <FontAwesomeIcon icon={faTimes} style={iconStyle} onClick={closeLoginForm} />
        </ModalContents>
      </ModalBody>
    </Modal>
  );
};

export default LoginForm;
