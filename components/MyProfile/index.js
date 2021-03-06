import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Text,
  Bold,
} from './style';
import { Flex, FlexC, Box } from '../Common';
import { Button, Avatar } from '../Common/custom';
import { requestToServer } from '../Common/global';
import useFollow from '../../hooks/useFollow';

const MyProfile = ({ me, user, mutate }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const {
    onClickFollow,
    onClickUnfollow,
  } = useFollow(me, user.id, mutate);

  useEffect(() => { // 팔로우 확인
    if (!user || !me) return;
    const result = user.Followers.filter(item => item.id === me.id);
    if (result.length >= 1) {
      setIsFollowing(true)
    } else {
      setIsFollowing(false);
    }
  }, [user, me]);

  return (
    <Wrapper>
      <FlexC mr="50px">
        <Avatar
          w="100px"
          h="100px"
          radius="50px"
          url={requestToServer(user.Image?.src)}
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
        { me && <>
          { me.id !== user.id && <>
            {isFollowing
              ? <Button onClick={onClickUnfollow}>언팔로우</Button>
              : <Button onClick={onClickFollow}>팔로우</Button>
            }
          </>}
        </>}
      </FlexC>
    </Wrapper>
  );
};

export default MyProfile;