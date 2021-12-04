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

const LogInForm = ({ closeLogInForm, onClickLogIn, setOpenJoinPage }) => {
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
            <LogInButton onClick={onClickLogIn}>로그인</LogInButton>
            <LogInButton onClick={() => setOpenJoinPage(true)}>회원가입</LogInButton>
          </ButtonWrapper>
          <Forgot>Forgot Password?</Forgot>
          <FontAwesomeIcon icon={faTimes} style={iconStyle} onClick={closeLogInForm} />
        </ModalContents>
      </ModalBody>
    </Modal>
  );
};

export default LogInForm;
