import styled from 'styled-components';

const Box = styled.div`
  display: flex;
`
const Select = styled.div`
  display: flex;
  gap: 15px;
  padding: 20px 10px;
  font-size: 18px;
  flex: 1;
  position: relative;
  align-items: center;
`
const Menu = styled.ul`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  li {
    background-color: violet;
    width: 100px;
    height: 30px;
    line-height: 30px;
    padding: 5px 10px;
    cursor: pointer;
  }
`
const Search = styled.input`
  height: 23px;
  width: 200px;
  align-self: center;
`

const arrowIconStyle = {
  cursor: "pointer",
  padding: "5px",
}
const searchIconStyle = {
  alignSelf: "center",
  padding: "15px",
  cursor: "pointer",
}

export {
  Box,
  Select,
  Menu,
  Search,
  arrowIconStyle,
  searchIconStyle,
}