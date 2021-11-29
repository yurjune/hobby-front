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
  LogInButton,
  Forgot,
  iconStyle,
} from './style';

const LogInForm = ({ closeLogInForm }) => {
  return (
    <Modal>
      <ModalBody>
        <ModalContents>
          <Title>로그인</Title>
          <Label htmlFor="user-email">이메일</Label>
          <Input type="text" id="user-email" placeholder="example@email.com" />
          <Label htmlFor="user-password">비밀번호</Label>
          <Input type="password" id="user-password" placeholder="********" />
          <ButtonWrapper>
            <LogInButton>로그인</LogInButton>
            <LogInButton>회원가입</LogInButton>
          </ButtonWrapper>
          <Forgot>Forgot Password?</Forgot>
          <FontAwesomeIcon icon={faTimes} style={iconStyle} onClick={closeLogInForm} />
        </ModalContents>
      </ModalBody>
    </Modal>
  );
};

export default LogInForm;
