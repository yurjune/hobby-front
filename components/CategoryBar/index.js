import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Select,
  Menu,
  Search,
  arrowIconStyle,
  searchIconStyle,
} from './style';
import { Flex, Box } from '../Common';
import { Button } from '../Common/custom';

export const dropdown = [
  '수영',
  '피아노',
  '러닝',
  'LOL'
]

const CategoryBar = ({ category, addCategory, removeCategory }) => {
  const [isOpened, setIsOpened] = useState(false);

  const onClickIcon = () => {
    if (isOpened === false) {
      return setIsOpened(true);
    }
    setIsOpened(false);
  };

  const onClickMenuItem = (item) => () => {
    setIsOpened(false);
    addCategory(item);
  };

  return (
    <>
      <Flex>
        <Select>
          <Box mr="15px">카테고리</Box>
          <FontAwesomeIcon icon={faChevronDown} onClick={onClickIcon} style={arrowIconStyle} />
          {isOpened ?
            <Menu left="10px" top="60px">
              {dropdown.map((item, idx) => <li key={item+idx} onClick={onClickMenuItem(item)}>{item}</li>)}
            </Menu>
          : ""}
        </Select>
        <Search />
        <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
      </Flex>
      <Flex p="10px">
        {category.map(item => <Button key={item} mr="10px" onClick={removeCategory(item)}>{item}</Button>)}
      </Flex>
    </>
  );
};

export default CategoryBar;