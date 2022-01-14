import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { requestToServer } from '../Common/global';
import PostBar from './PostBar';
import CommentBar from './CommentBar';
import { FlexC, Flex, Box, Text, } from '../Common';
import { Button } from '../Common/custom';
import { 
  Wrapper,
  Picture,
  Paragraph,
  ShowComment,
  MenuWrapper,
  Menu,
  iconStyle,
} from './style';
import CommentForm from './CommentForm';
import { PostTimer } from '../Timer';

const PostCardBigView = ({ props, commentBarProps }) => {
  const {
    me,
    postData,
    comment,
    handleComment,
    commentList,
    previewComments,
    isFollowing,
    isLiked,
    isOpenMenu,
    isOpenComment,
    onClickFollow,
    onClickUnfollow,
    likePost,
    unlikePost,
    submitComment,
    showComments,
    clickUser,
    clickComment,
    onClickMenu,
    editPost,
    deletePost,
  } = props;

  return (<>
    { postData &&
      <Wrapper>
        { me ?
          <>{ me.id === postData.User?.id
            ? <PostBar item={postData} clickUser={clickUser} >
                <MenuWrapper>
                  <FontAwesomeIcon size="lg" icon={faEllipsisV} style={iconStyle} onClick={onClickMenu} />
                  { isOpenMenu &&
                    <Menu top="40px" right="15px">
                      <li onClick={editPost}>수정</li>
                      <li onClick={deletePost}>삭제</li>
                    </Menu>
                  }
                </MenuWrapper>
              </PostBar>
            : <PostBar item={postData} clickUser={clickUser} >
                {isFollowing
                  ? <Button h="35px" self="center" onClick={onClickUnfollow}>언팔로우</Button>
                  : <Button h="35px" self="center" onClick={onClickFollow}>팔로우</Button>
                }
              </PostBar>
          }</>
          : <PostBar item={postData} clickUser={clickUser} />
        }
        <Picture mb="20px" url={requestToServer(postData.Images[0]?.src)} />
        <FlexC>
          <Flex mb="20px">
            <Flex flex="1">
              { me && isLiked
              ? <FontAwesomeIcon size="lg" icon={faHeartSolid} style={iconStyle} onClick={unlikePost} />
              : <FontAwesomeIcon size="lg" icon={faHeart} style={iconStyle} onClick={likePost} />
              }
              <Text self="center" mr="20px">{postData.Likers?.length}</Text>
              <FontAwesomeIcon size="lg" icon={faComment} style={iconStyle} onClick={clickComment} />
              <Text self="center" mr="20px">{postData.Comments?.length}</Text>
            </Flex>
            <PostTimer time={postData.time} fontSize="16px" />
          </Flex>
          <Paragraph mb="30px">
            <a>{postData.User?.name}</a>{postData.content}
          </Paragraph>
            { postData.Comments?.length >= 2 &&
              <ShowComment onClick={showComments}>
                { isOpenComment ? `댓글 접기` : `댓글 ${postData.Comments.length}개 모두 보기`}
              </ShowComment>
            }
          <Box mb="10px">
            { !isOpenComment && previewComments.length >=1 && previewComments.map(item =>
              <CommentBar
                key={item.createdAt}
                item={item}
                commentBarProps={commentBarProps}
              />
            )}
            { isOpenComment && commentList.map(item => 
              <CommentBar
                key={item.createdAt}
                item={item}
                commentBarProps={commentBarProps}
              />
            )}
          </Box>
          { me && <CommentForm
            me={me}
            item={postData}
            writing={comment}
            handle={handleComment}
            submit={submitComment}
          />}
        </FlexC>
      </Wrapper>
    }
  </>);
};

export default PostCardBigView;