import React from 'react';
import { Flex, FlexC, Box, Text, Bold } from '../Common';
import {
  Wrapper,
  Input,
} from './style';
import useInput from '../../hooks/useInput';

const MyProfile = ({ me }) => {
  const [id, handleId] = useInput('');
  const [nick, handleNick] = useInput('');

  return (<>
    { me &&
      <FlexC flex="3">
      <Wrapper>
      <Text fontSize="22px">개인정보 변경</Text>
      <Text>아이디: {me.email}</Text>
      <Form value={nick} handle={handleNick}>닉네임:</Form>
      </Wrapper>
      </FlexC>
    }
  </>);
};

const Form = ({ children, value, handle }) => {
  return (
    <Flex gap="10px">
      <Text lineHeight="22px">{children}</Text>
      <Input type="text" value={value} onChange={handle} />
    </Flex>
  )
}

export default MyProfile;
