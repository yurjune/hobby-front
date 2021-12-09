import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FlexC, Flex, Bold, Text, Button } from '../Common';
import { 
  Avatar,
  Paragraph,
  Picture,
  iconStyle
} from '../PostCard/style';
import { localhost } from '../PostCard';

const PostCardBig = ({ data }) => {
  return (
    <FlexC maxW="650px" m="0 auto" p="10px">
      <Flex mb="20px">
        <Avatar w="46px" h="46px" radius="23px" mr="15px" />
        <FlexC flex="1">
          <Bold mt="4px" mb="8px">{data?.User.id}</Bold>
          <Text color="#22222280" size="14px">{data?.createdAt}</Text>
        </FlexC>
        <Button h="35px" self="center">팔로우</Button>
      </Flex>
      <Picture mb="10px" url={localhost(data?.Images[0].src)} />
      <FlexC p="5px">
        <Flex mb="15px">
          <FontAwesomeIcon size="2x" icon={faComment} style={iconStyle} />
          <FontAwesomeIcon size="2x" icon={faHeart} style={iconStyle} />
        </Flex>
        <Text size="14px" mb="30px">좋아요 10개</Text>
        <Paragraph>{data?.content}</Paragraph>
      </FlexC>
    </FlexC>
  );
};

export default PostCardBig;