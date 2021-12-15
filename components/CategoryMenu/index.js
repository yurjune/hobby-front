import React from 'react';
import styled from 'styled-components';

export const Menu = styled.ul`
  position: absolute;
  left: ${props => props.left};
  right: ${props => props.right};
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

const CategoryMenu = ({ menu, t, r, l, b }) => {
  return (
    <Menu top={t} right={r} left={l} bottom={b}>
      {menu.map(item => <li key={item}>{item}</li>)}
    </Menu>
  );
};

export default CategoryMenu;