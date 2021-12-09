import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  Picture,
  Description,
  Avatar,
  Name,
  Paragraph,
  iconStyle,
} from './style';
import { Flex, FlexC } from '../Common';

const PostCard = ({ data, avatar }) => {
  return (
    <>
      <FlexC>
        <Picture url={`http://localhost:3060/${data?.Images[0].src}`} />
        <Description>
          <Flex mb="15px">
            <Avatar avatar={avatar} mr="15px" />
            <Name><div>{data.User.name}</div></Name>
          </Flex>
          <Paragraph>{data.content}</Paragraph>
          <Flex>
            <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} />
            <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} />
          </Flex>
        </Description>
      </FlexC>
    </>
  );
};

export default PostCard;