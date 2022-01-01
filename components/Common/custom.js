import styled from 'styled-components';

const Button = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};
  margin-right: ${props => props.mr};
  align-self: ${(props) => props.self};
  padding: 8px 10px;
  background-color: #ffaa55;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(255, 170, 85, 0.25); /* x축 y축 blur color*/
  cursor: pointer;
  transition: 0.3s;
  &:focus {
    outline: solid;
  }
  &:hover {
    background-color: rgba(255, 170, 85, 0.9);
    box-shadow: 0 2px 4px rgba(255, 170, 85, 0.5);
  }
`
const Avatar = styled.div`
  width: ${props => props.w || "30px"};
  height: ${props => props.w || "30px"};
  border-radius: ${props => props.radius || "15px"};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  align-self: center;
  background-color: lightgray;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  cursor: pointer;
`

export {
  Button,
  Avatar,
}