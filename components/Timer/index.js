import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons';
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

export const Timer = ({ hours, minutes, seconds, operateTimer }) => {
  return (
    <Wrapper>
      <Time>
        <Count>{convertTime(hours)}</Count>
        <Count>:</Count>
        <Count>{convertTime(minutes)}</Count>
        <Count>:</Count>
        <Count>{convertTime(seconds)}</Count>
      </Time>
      <FontAwesomeIcon icon={faPlayCircle} size="3x" style={iconStyle} />
      <FontAwesomeIcon icon={faStopCircle} size="3x" style={iconStyle} />
    </Wrapper>
  );
};

export const SmallTimer = ({ hours, minutes, seconds, operateTimer }) => {
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
