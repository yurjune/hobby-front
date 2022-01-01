import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`
const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 0 10px;
  position: relative;
  font-size: 16px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
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
const SearchWrapper1 = styled.div`
  /* display: flex;
  margin-bottom: 10px;
  @media screen and (min-width: 677px) {
    display: none;
  } */
`
const SearchWrapper2 = styled.div`
  display: flex;
`
const Search = styled.input`
  height: 23px;
  width: 200px;
  align-self: center;
  @media screen and (max-width: 450px) {
    width: 160px;
  }
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
  Wrapper,
  Select,
  Menu,
  SearchWrapper1,
  SearchWrapper2,
  Search,
  arrowIconStyle,
  searchIconStyle,
}