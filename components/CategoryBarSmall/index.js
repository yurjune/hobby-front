import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  Select,
  Menu,
  arrowIconStyle,
} from '../CategoryBar/style';
import { dropdown } from '../CategoryBar/index';

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
    <>
      <Select>
        <div>{working}</div>
        <FontAwesomeIcon icon={faChevronDown} onClick={onClickIcon} style={arrowIconStyle} />
        {isOpened ? <Menu left="0" top="58px">
          {category.map(item => <li key={item} onClick={onClickMenuItem(item)}>{item}</li>)}
        </Menu>
        : ""}
      </Select>
    </>
  );
};

export default CategoryBar;