import styled from 'styled-components';
import { gray } from '../Common/color';

const Wrapper = styled.div`
  display: flex;
  width: 370px;
  flex-direction: column;
  gap: 30px;
`
const Input = styled.input`
  padding: 4px 8px;
  height: 20px;
  border: 1px solid ${gray};
  &:focus {
    outline: none;
  }
`
const Hr = styled.hr`
  width: 100%;
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-bottom: 30px;
`
const Picture = styled.div`
  background-color: lightgray;
  border-radius: 15px;
  width: 100px;
  height: 0px;
  padding-bottom: 100px;
  margin-bottom: 10px;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  background-color: ${props => props.color};
`
const iconStyle = {
  cursor: "pointer",
  color: "white",
  position: "absolute",
  left: "40%",
  top: "40%",
};

export {
  Wrapper,
  Input,
  Hr,
  Picture,
  iconStyle,
}