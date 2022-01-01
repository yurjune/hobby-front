import styled from 'styled-components';
import { gray } from '../Common/color';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 180px;
  padding: 20px 15px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 6%); /* x축 y축 blur color*/
  @media screen and (min-height: 687px) {
    min-height: 600px;
  }
`
const CardItem = styled.div`
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: gold;
    transition: 0.3s;
    cursor: pointer;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`
const Contents = styled.div`
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
  Card,
  CardItem,
  Wrapper,
  Contents,
  Input,
  Hr,
  Picture,
  iconStyle,
}