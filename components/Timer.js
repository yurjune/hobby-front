import React, { useState, useRef, useEffect, useReducer } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 40px 0;
  font-size: 20px;
`
const Time = styled.div`
`

export const INCREASE_TIME = 'INCREASE_TIME';
export const START_TIMER = 'START_TIMER';
export const END_TIMER = 'END_TIMER';

const initialState = {
  hours: 0,
  minutes: 59,
  seconds: 50,
  start: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        start: true,
      }
    case END_TIMER:
      return {
        ...state,
        hours: 0,
        minutes: 0,
        seconds: 0,
        start: false,
      }
    case INCREASE_TIME: {
      if (state.hours >= 23 && state.minutes >= 59 && state.seconds >= 59) {
        return {
          ...state,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      if (state.minutes >= 59 && state.seconds >= 59) {
        return {
          ...state,
          hours: state.hours + 1,
          minutes: 0,
          seconds: 0,
        }
      }
      if (state.seconds >= 59) {
        return {
          ...state,
          minutes: state.minutes + 1,
          seconds: 0,
        }
      }
      return {
        ...state,
        seconds: state.seconds + 1,
      }
    }
    default:
      throw new Error();
  }
};

const Timer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timer = useRef(null);
  
  useEffect(() => {
    const tick = () => {
      dispatch({ type: INCREASE_TIME });
    }
    if (state.start === true) {
      timer.current = setInterval(tick, 1000);
    }
    return () => clearInterval(timer.current);
  }, [state.start]);
  
  const startTimer = () => {
    dispatch({ type: 'START_TIMER' });
  };
  
  const clearTimer = () => {
    clearInterval(timer.current);
    dispatch({ type: 'END_TIMER' });
  };

  const convertTime = (time) => {
    if (time < 10) return '0' + time;
    return time;
  };

  return (
    <Wrapper>
      <Time>{convertTime(state.hours)}</Time>
      <div>:</div>
      <Time>{convertTime(state.minutes)}</Time>
      <div>:</div>
      <Time>{convertTime(state.seconds)}</Time>
      <button onClick={startTimer}>시작</button>
      <button onClick={clearTimer}>중지</button>
    </Wrapper>
  );
};

export default Timer;
