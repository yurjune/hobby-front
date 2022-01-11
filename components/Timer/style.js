import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  margin: 10px 10px 20px 10px;
  padding: 40px 15px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 6%); /* x축 y축 blur color*/
`
const Time = styled.div`
  display: flex;
  gap: 0.7rem;
`
const Count = styled.div`
  display: flex;
  align-self: center;
  font-size: ${props => props.fontSize || "30px"};
`
const PostWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  align-self: center;
  font-size: 16px;
`
const SideWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 30px 0;
`
export {
  Wrapper,
  Count,
  Time,
  PostWrapper,
  SideWrapper,
}
