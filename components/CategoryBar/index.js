import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Select,
  Menu,
} from './style';

const dropdown = [
  '수영',
  '피아노',
  '러닝',
  'LOL',
]
const CategoryBar = ({ data = '수영' }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [working, setWorking] = useState(data);
  const category = dropdown.filter(value => value !== working);

  const onClickIcon = () => {
    if (isOpened === false) {
      return setIsOpened(true);
    }
    setIsOpened(false);
  };
  const onClickMenuItem = (item) => () => {
    setWorking(item);
    setIsOpened(false);
  }
  return (
    <Box>
      <Select>
        <div>{working}</div>
        <FontAwesomeIcon icon={faChevronDown} onClick={onClickIcon} />
      </Select>
      {isOpened ? <Menu>
        {category.map(item => <li key={item} onClick={onClickMenuItem(item)}>{item}</li>)}
      </Menu>
      : ""}
    </Box>
  );
};

export default CategoryBar;