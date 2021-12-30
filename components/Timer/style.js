import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 40px 0 60px 0;
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