import React from 'react';
import { useRouter } from 'next/router';
import { Flex, FlexC, Box, Text, Button, } from '../Common';
import {
  Wrapper,
  Input,
  Hr,
  Picture,
  iconStyle,
} from './style';
import useInput from '../../hooks/useInput';
import axios from 'axios'

const Password = ({ me }) => {
  const router = useRouter();
  const [oldPassword, handleOldPassword] = useInput('');
  const [password, handlePassword] = useInput('');
  const [passwordCheck, handlePasswordCheck] = useInput('');

  const onSubmit = async () => {
    if (!oldPassword || !password || !passwordCheck) {
      return alert('비밀번호를 입력해 주세요!');
    }
    if (oldPassword === password) {
      return alert('새로운 비밀번호를 입력해 주세요!');
    }
    if (password !== passwordCheck) {
      return alert('비밀번호와 비밀번호 확인이 다릅니다!');
    }
    const result = await axios.post('/user/password', {
      userId: me.id,
      oldPassword,
      password,
    });
    alert(result.data);
    router.reload();
  };

  return (<>
    <FlexC flex="3" p="5px 20px">
      <Text fontSize="22px" mb="10px">비밀번호 변경</Text>
      <Hr />
      <Wrapper>
        <PasswordForm
          value={oldPassword}
          handle={handleOldPassword}
          textWidth="120px"
        >
          이전 비밀번호 :
        </PasswordForm>
        <PasswordForm
          value={password}
          handle={handlePassword}
          textWidth="120px"
        >
          새 비밀번호 :
        </PasswordForm>
        <PasswordForm
          value={passwordCheck}
          handle={handlePasswordCheck}
          textWidth="120px"
        >
          비밀번호 확인 :
        </PasswordForm>
        <Button w="60px" onClick={onSubmit}>수정</Button>
      </Wrapper>
    </FlexC>
  </>);
};

const PasswordForm = ({ children, value, handle }) => {
  return (
    <Flex gap="10px">
      <Text w="120px" lineHeight="28px">{children}</Text>
      <Input type="password" value={value} onChange={handle} />
    </Flex>
  )
}

export default Password;