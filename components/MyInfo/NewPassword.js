import React from 'react';
import { useRouter } from 'next/router';
import { Flex, FlexC, Box, Text } from '../Common';
import { Button } from '../Common/custom';
import {
  Wrapper,
  Contents,
  Input,
  Hr,
  FormWrapper,
} from './style';
import useInput from '../../hooks/useInput';
import axios from 'axios'

const NewPassword = ({ me }) => {
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
    <Wrapper>
      <Text fontSize="22px" mb="10px">비밀번호 변경</Text>
      <Hr />
      <Contents w="350px">
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
        <Button w="60px" self="end" onClick={onSubmit}>수정</Button>
      </Contents>
    </Wrapper>
  </>);
};

const PasswordForm = ({ children, value, handle }) => {
  return (
    <FormWrapper>
      <Text w="120px" lineHeight="28px">{children}</Text>
      <Input type="password" value={value} onChange={handle} />
    </FormWrapper>
  )
}

export default NewPassword;