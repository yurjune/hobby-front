import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import axios from 'axios';
import useInput from '../../hooks/useInput';
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

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const LoginForm = ({ closeLoginForm, setOpenJoinPage }) => {
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const router = useRouter();

  const onClickLogin = async () => {
    try {
      if (!email) {
        return alert('이메일을 입력해주세요');
      }
      if (!password) {
        return alert('비밀번호를 입력해주세요');
      }
      const result = await axios.post('auth/login', { email, password });
      if (result.data === 'ok') {
        alert('로그인이 완료되었습니다.');
        closeLoginForm();
        return router.reload('/');
      }
      alert(result.data);
    }
    catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal>
      <ModalBody>
        <ModalContents>
          <Title>로그인</Title>
          <Label>이메일</Label>
          <Input type="text" placeholder="example@email.com" value={email} onChange={handleEmail} />
          <Label>비밀번호</Label>
          <Input type="password" placeholder="******" value={password} onChange={handlePassword} />
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
