import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons';
import {
  Wrapper,
  Count,
  Time,
} from './style';

const iconStyle = {
  cursor: "pointer",
};
const Timer = ({ hours, minutes, seconds, operateTimer }) => {
  const convertTime = (time) => {
    if (time < 10) return '0' + time;
    return time;
  };

  return (
    <Wrapper>
      <Time>
        <Count>{convertTime(hours)}</Count>
        <Count>:</Count>
        <Count>{convertTime(minutes)}</Count>
        <Count>:</Count>
        <Count>{convertTime(seconds)}</Count>
      </Time>
      <FontAwesomeIcon icon={faPlayCircle} size="3x" onClick={operateTimer('start')} style={iconStyle} />
      <FontAwesomeIcon icon={faStopCircle} size="3x" onClick={operateTimer('stop')} style={iconStyle} />
    </Wrapper>
  );
};

export default Timer;
