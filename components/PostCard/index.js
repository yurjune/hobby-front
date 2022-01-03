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
import { PostTimer } from '../Timer';
import useLike from '../../hooks/useLike';

const PostCard = ({ data }) => {
  const router = useRouter();
  const onClickCard = () => router.push(`/social/${data.id}`);

  return (
    <>{ data &&
      <FlexC cursor="pointer" mb="20px">
        <Picture url={data.Images && localhost(data.Images[0]?.src)} onClick={onClickCard} />
        <FlexC p="10px 5px" onClick={onClickCard}>
          <Flex mb="15px">
            <Avatar mr="15px" url={localhost(data.User?.Image?.src)} />
            <Text self="center" flex="1">{data.User?.name}</Text>
            <PostTimer time={data.time} />
          </Flex>
          <Paragraph>{data.content}</Paragraph>
        </FlexC>
        <Flex p="0 5px" mb="10px">
          <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} />
          <Text self="center" mr="15px">{data.Likers?.length}</Text>
          <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} />
          <Text self="center" mr="15px">{data.Comments?.length}</Text>
        </Flex>
      </FlexC>
    }</>
  );
};

export default PostCard;