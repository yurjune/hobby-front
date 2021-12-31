import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  height: 600px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 12%); /* x축 y축 blur color*/
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

export {
  Card,
  CardItem,
}