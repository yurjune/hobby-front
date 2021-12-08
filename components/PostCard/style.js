import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const Picture = styled.div`
  border-radius: 15px;
  height: 0px;
  padding-bottom: 100%;
  background-color: gold;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  cursor: pointer;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  border-radius: 15px;
  cursor: pointer;
`
const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  background-color: lightgray;
`
const Name = styled.div`
  display: flex;
  div {
    align-self: center;
  }
`
const Paragraph = styled.div`
  word-break: break-all;
  margin-bottom: 15px;
`

const iconStyle = {
  "marginRight": "10px", 
};

export {
  Card,
  Picture,
  Description,
  Avatar,
  Name,
  Paragraph,
  iconStyle,
}