import styled from 'styled-components';

const Box = styled.div`
  position: relative;
`
const Select = styled.div`
  display: flex;
  gap: 15px;
  padding: 20px 10px;
  font-size: 18px;
`
const Menu = styled.ul`
  background-color: lightgray;
  position: absolute;
  left: 10px;
  li {
    background-color: skyblue;
    width: 100px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
  }
`

export {
  Box,
  Select,
  Menu,
}