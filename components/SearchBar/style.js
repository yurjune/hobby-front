import styled from 'styled-components';

const Search = styled.input`
  height: 23px;
  width: 200px;
  align-self: center;
  @media screen and (max-width: 450px) {
    width: 160px;
  }
`
const searchIconStyle = {
  alignSelf: "center",
  padding: "10px",
  cursor: "pointer",
};

export {
  Search,
  searchIconStyle,
}