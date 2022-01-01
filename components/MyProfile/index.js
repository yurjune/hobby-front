import React from 'react';
import {
  Wrapper,
  Text,
  Bold,
} from './style';
import { Flex, FlexC, Box } from '../Common';
import { Button, Avatar } from '../Common/custom';
import { localhost } from '../Common/global';

const MyProfile = ({ user }) => {
  console.log(user)
  return (
    <Wrapper>
      <Flex>
        <FlexC mr="30px">
          <Avatar
            w="100px"
            h="100px"
            radius="50px"
            url={localhost(user.Image?.src)}
            mb="20px"
          />
          <Text fontSize="18px" lineHeight="34px">{user.name}</Text>
        </FlexC>
        <FlexC>
          <Flex mb="20px">
            <FlexC
              h="80px"
              p="10px"
              justify="space-between"
            >
              <Text>게시글:</Text>
              <Text>팔로워:</Text>
              <Text>팔로잉:</Text>
            </FlexC>
            <FlexC
              h="80px"
              p="10px"
              justify="space-between"
            >
              <Bold>{user.Posts?.length}</Bold>
              <Bold>{user.Followers?.length}</Bold>
              <Bold>{user.Followings?.length}</Bold>
            </FlexC>
          </Flex>
        </FlexC>

      </Flex>
    </Wrapper>
  );
};

export default MyProfile;