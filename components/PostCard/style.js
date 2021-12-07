import styled from 'styled-components';

const gap = '15px';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Picture = styled.div`
  border-radius: 15px;
  height: 0px;
  padding-bottom: 100%;
  background-color: gold;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const Description = styled.div`
  border-radius: 15px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`
const Profile = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${gap};
`
const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  background-color: lightgray;
`
const ProfileName = styled.div`
  height: 30px;
  font-size: 16px;
  display: flex;
  div {
    align-self: center;
  }
`
const Paragraph = styled.div`
  word-break: break-all;
  margin-bottom: ${gap};
`
const CommentBox = styled.div`
  display: flex;
`
const iconStyle = {
  "marginRight": "10px", 
};
export {
  Card,
  Picture,
  Description,
  Profile,
  ProfileImage,
  ProfileName,
  Paragraph,
  CommentBox,
  iconStyle,
}