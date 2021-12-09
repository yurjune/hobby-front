import styled from 'styled-components';

const Picture = styled.div`
  border-radius: 15px;
  height: 0px;
  padding-bottom: 100%;
  background-color: gold;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  margin-bottom: ${props => props.mb};
`
const Avatar = styled.div`
  width: ${props => props.w || "30px"};
  height: ${props => props.w || "30px"};
  margin-right: ${props => props.mr};
  border-radius: ${props => props.radius || "15px"};
  background-color: lightgray;
  align-self: center;
`
const Paragraph = styled.div`
  word-break: break-all;
  margin-bottom: 20px;
`

const iconStyle = {
  "marginRight": "15px", 
};

export {
  Picture,
  Avatar,
  Paragraph,
  iconStyle,
}