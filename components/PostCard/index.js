import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  Card,
  Picture,
  Description,
  Profile,
  ProfileImage,
  ProfileName,
  Paragraph,
  CommentBox,
  iconStyle,
} from './style';

const PostCard = ({ children, image, article, avatar }) => {
  return (
    <>
      <Card>
        <Picture image={image} />
        <Description>
          <Profile>
            <ProfileImage avatar={avatar} />
            <ProfileName><div>하이</div></ProfileName>
          </Profile>
          <Paragraph>{article}</Paragraph>
          <CommentBox>
            <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} />
            <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} />
          </CommentBox>
        </Description>
      </Card>
    </>
  );
};

export default PostCard;