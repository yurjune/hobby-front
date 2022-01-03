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
const arrowIconStyle = {
  cursor: "pointer",
  padding: "5px",
};

export {
  Wrapper,
  Select,
  Menu,
  arrowIconStyle,
}