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
  iconStyle,
} from './style';
import { Button } from '../Common/custom';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const JoinForm = ({ closeLoginForm }) => {
  const [email, handleEmail] = useInput('');
  const [name, handleName] = useInput('');
  const [password, handlePassword] = useInput('');
  const [passwordCheck, handlePasswordCheck] = useInput('');
  const router = useRouter();

  const onClickJoin = async () => {
    if (!email) {
      return alert('이메일을 입력해주세요');
    }
    if (!name) {
      return alert('닉네임을 입력해주세요');
    }
    if (!password) {
      return alert('비밀번호를 입력해주세요');
    }
    if (password !== passwordCheck) {
      return alert('비밀번호가 서로 다릅니다');
    }
    const result = await axios.post('auth/join', { email, name, password });
    if (result.data === 'ok') {
      alert('가입이 완료되었습니다.');
      closeLoginForm();
      return router.push('/');
    }
    alert(result.data);
  };
  return (
    <Modal>
      <ModalBody height="600px">
        <ModalContents>
          <Title>회원가입</Title>
          <Label>이메일</Label>
          <Input type="text" placeholder="example@email.com" value={email} onChange={handleEmail} />
          <Label>닉네임</Label>
          <Input type="text" value={name} onChange={handleName} />
          <Label>비밀번호</Label>
          <Input type="password" placeholder="******" value={password} onChange={handlePassword} />
          <Label>비밀번호 확인</Label>
          <Input type="password" placeholder="******" value={passwordCheck} onChange={handlePasswordCheck} />
          <Button onClick={onClickJoin}>가입하기</Button>
          <FontAwesomeIcon icon={faTimes} style={iconStyle} onClick={closeLoginForm} />
        </ModalContents>
      </ModalBody>
    </Modal>
  );
};

export default JoinForm;