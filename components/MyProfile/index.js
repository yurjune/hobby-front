import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Flex, FlexC, Box, Text, Button, } from '../Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {
  Wrapper,
  Input,
  Hr,
  Picture,
  iconStyle,
} from './style';
import useInput from '../../hooks/useInput';
import { localhost } from '../Common/global';

const MyProfile = ({ me }) => {
  console.log(me);

  const router = useRouter();
  const [email, handleEmail] = useInput(me.email);
  const [name, handleName] = useInput(me.name);
  const [profileImage, setProfileImage] = useState(me.Image?.src);
  const imageRef = useRef(null);

  const changeProfile = () => {
    imageRef.current.click();
  };

  const onChangeImage = async (e) => {
    const formData = new FormData();
    // console.log('e.target.files:', e.target.files);
    formData.append('profile', e.target.files[0]);
    const result = await axios.post('/user/image', formData);
    // console.log('result.data:', result.data);
    setProfileImage(result.data);
  };

  const onSubmit = async () => {
    const result = await axios.post('/user/profile', {
      userId: me.id,
      profileImage,
      name,
    });
    if (result.data === 'ok') {
      alert('수정이 완료되었습니다');
    } else {
      alert('수정에 실패하였습니다');
    }
    router.reload();
  };

  return (<>
    <FlexC flex="3" p="5px 20px">
      <Text fontSize="22px" mb="10px">개인정보 변경</Text>
      <Hr />
    <Wrapper>
      <FlexC mb="20px">
        <Picture url={`${localhost(profileImage)}`}>
          <FontAwesomeIcon icon={faPlus} size="lg" style={iconStyle} onClick={changeProfile} />
        </Picture>
        <Button w="100px" onClick={changeProfile}>사진 추가</Button>
        <input type="file" ref={imageRef} onChange={onChangeImage} hidden />
      </FlexC>
      <DisabledForm value={email}>이메일 :</DisabledForm>
      <Form value={name} handle={handleName}>닉네임 :</Form>
      <Button w="60px" onClick={onSubmit}>수정</Button>
    </Wrapper>
    </FlexC>
  </>);
};

const Form = ({ children, value, handle }) => {
  return (
    <Flex gap="10px">
      <Text w="60px" lineHeight="28px">{children}</Text>
      <Input type="text" value={value} onChange={handle} />
    </Flex>
  )
}

const DisabledForm = ({ children, value, handle }) => {
  return (
    <Flex gap="10px">
      <Text w="60px" lineHeight="28px">{children}</Text>
      <Input type="text" value={value} onChange={handle} disabled />
    </Flex>
  )
}

export default MyProfile;
