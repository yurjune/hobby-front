import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import {
  Picture,
  Avatar,
  Paragraph,
  iconStyle,
} from '../PostCardBig/style';
import { Flex, FlexC, Text } from '../Common';

export const localhost = (value) => {
  return `http://localhost:3060/${value}`;
};

const PostCard = ({ data }) => {
  const router = useRouter();
  const onClickCard = () => router.push(`/social/${data.id}`);

  return (
    <>{ data &&
      <FlexC cursor="pointer" onClick={onClickCard}>
        <Picture url={localhost(data.Images[0]?.src)} />
        <FlexC p="10px 5px">
          <Flex mb="15px">
            <Avatar mr="15px" />
            <Text self="center">{data.User?.name}</Text>
          </Flex>
          <Paragraph>{data.content}</Paragraph>
          <Flex>
            <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} />
            <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} />
          </Flex>
        </FlexC>
      </FlexC>
    }</>
  );
};

export default PostCard;