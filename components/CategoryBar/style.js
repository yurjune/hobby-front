import styled from 'styled-components';

const Select = styled.div`
  display: flex;
  padding: 20px 10px;
  flex: 1;
  position: relative;
  align-items: center;
  font-size: 18px;
`
const Menu = styled.ul`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  border: 1px solid gold;
  border-radius: 5px;
  li {
    background-color: gold;
    cursor: pointer;
    padding: 10px 15px;
  }
  li:hover {
    background-color: crimson;
    transition: 0.3s;
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
  Select,
  Menu,
  Search,
  arrowIconStyle,
  searchIconStyle,
}