import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import {
  Picture,
  Paragraph,
  iconStyle,
} from '../PostCardBig/style';
import { Avatar } from '../Common/custom';
import { Flex, FlexC, Text } from '../Common';
import { localhost } from '../Common/global';

const PostCard = ({ data }) => {
  const router = useRouter();
  const onClickCard = () => router.push(`/social/${data.id}`);

  return (
    <>{ data &&
      <FlexC cursor="pointer" onClick={onClickCard}>
        <Picture url={localhost(data.Images[0]?.src)} />
        <FlexC p="10px 5px">
          <Flex mb="15px">
            <Avatar mr="15px" url={localhost(data.User.Image?.src)} />
            <Text self="center">{data.User?.name}</Text>
          </Flex>
          <Paragraph>{data.content}</Paragraph>
          <Flex>
            <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} />
            <Text self="center" mr="15px">{data.Likers?.length}</Text>
            <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} />
            <Text self="center" mr="15px">{data.Comments?.length}</Text>
          </Flex>
        </FlexC>
      </FlexC>
    }</>
  );
};

export default PostCard;