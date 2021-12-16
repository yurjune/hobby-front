import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faStopCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import {
  Wrapper,
  SmallWrapper,
  Count,
  Time,
} from './style';

const iconStyle = {
  cursor: "pointer",
};

const convertTime = (time) => {
  if (time < 10) return '0' + time;
  return time;
};

export const Timer = ({ me, hours, minutes, seconds, isStop, operateTimer }) => {
  return (
    <Wrapper>
      { me ?
        <Time>
          <Count>{convertTime(hours)}</Count>
          <Count>:</Count>
          <Count>{convertTime(minutes)}</Count>
          <Count>:</Count>
          <Count>{convertTime(seconds)}</Count>
        </Time>
        : <Time><Count>00 : 00 : 00</Count></Time>
      }
      { isStop
        ? <FontAwesomeIcon icon={faPlayCircle} size="3x" style={iconStyle} onClick={operateTimer} />
        : <FontAwesomeIcon icon={faPauseCircle} size="3x" style={iconStyle} onClick={operateTimer} />
      }
      <FontAwesomeIcon icon={faStopCircle} size="3x" style={iconStyle} />
    </Wrapper>
  );
};

export const SmallTimer = ({ hours, minutes, seconds }) => {
  return (
    <SmallWrapper>
      <Time>
        <Count>{convertTime(hours)}</Count>
        <Count>:</Count>
        <Count>{convertTime(minutes)}</Count>
        <Count>:</Count>
        <Count>{convertTime(seconds)}</Count>
      </Time>
    </SmallWrapper>
  );
};
