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

const JoinForm = ({ onClickJoin, closeLoginForm }) => {
  return (
    <Modal>
      <ModalBody>
        <ModalContents>
          <Title>회원가입</Title>
          <Label>이메일</Label>
          <Input type="text" placeholder="example@email.com" />
          <Label>비밀번호</Label>
          <Input type="password" placeholder="********" />
          <Label>비밀번호 확인</Label>
          <Input type="password" placeholder="********" />
          <LoginButton onClick={onClickJoin}>가입하기</LoginButton>
          <FontAwesomeIcon icon={faTimes} style={iconStyle} onClick={closeLoginForm} />
        </ModalContents>
      </ModalBody>
    </Modal>
  );
};

export default JoinForm;