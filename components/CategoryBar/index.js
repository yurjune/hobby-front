import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Select,
  Menu,
  Search,
  arrowIconStyle,
  searchIconStyle,
} from './style';

export const dropdown = [
  '수영',
  '피아노',
  '러닝',
  'LOL'
]

const CategoryBarSecond = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onClickIcon = () => {
    if (isOpened === false) {
      return setIsOpened(true);
    }
    setIsOpened(false);
  };
  const onClickMenuItem = (item) => () => {
    setIsOpened(false);
  }
  return (
    <Box>
      <Select>
        <div>카테고리</div>
        <FontAwesomeIcon icon={faChevronDown} onClick={onClickIcon} style={arrowIconStyle} />
        {isOpened ? <Menu left="10px" top="60px">
          {dropdown.map(item => <li key={item} onClick={onClickMenuItem(item)}>{item}</li>)}
        </Menu>
      : ""}
      </Select>
      <Search />
      <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
    </Box>
  );
};

export default CategoryBarSecond;