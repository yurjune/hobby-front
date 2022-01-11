import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid }  from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import {
  Picture,
  Paragraph,
  iconStyle,
} from '../PostCardBig/style';
import { Avatar } from '../Common/custom';
import { Flex, FlexC, Text } from '../Common';
import { requestToServer } from '../Common/global';
import { PostTimer } from '../Timer';
import useLike from '../../hooks/useLike';

const PostCard = ({ me, postData, mutate }) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  const onClickCard = () => router.push(`/social/${postData.id}`);
  const onClickUser = () => router.push(`/profile/${postData.UserId}`);

  const {
    likePost,
    unlikePost,
  } = useLike(me, postData, setIsLiked, mutate);

  return (
    <>{ postData &&
      <FlexC cursor="pointer" mb="20px">
        <Picture url={postData.Images && requestToServer(postData.Images[0]?.src)} onClick={onClickCard} />
        <FlexC p="10px 5px">
          <Flex mb="15px" onClick={onClickUser}>
            <Avatar mr="15px" url={requestToServer(postData.User?.Image?.src)} />
            <Text self="center" flex="1">{postData.User?.name}</Text>
            <PostTimer time={postData.time} />
          </Flex>
          <Paragraph onClick={onClickCard}>{postData.content}</Paragraph>
        </FlexC>
        <Flex p="0 5px" mb="10px">
          { isLiked
          ? <FontAwesomeIcon size="lg" icon={faHeartSolid} style={iconStyle} onClick={unlikePost} />
          : <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} onClick={likePost} />
          }
          <Text self="center" mr="15px">{postData.Likers?.length}</Text>
          <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} onClick={onClickCard} />
          <Text self="center" mr="15px">{postData.Comments?.length}</Text>
        </Flex>
      </FlexC>
    }</>
  );
};

export default PostCard;