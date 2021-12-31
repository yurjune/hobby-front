import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 30px;
  padding: 40px 15px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 6%); /* x축 y축 blur color*/
`
const SmallWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 30px 0;
`
const Time = styled.div`
  display: flex;
  gap: 1rem;
`
const Count = styled.div`
  display: flex;
  align-self: center;
  font-size: 30px;
`
export {
  Wrapper,
  SmallWrapper,
  Count,
  Time
}