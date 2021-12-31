import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 12%); /* x축 y축 blur color*/
`
const Hr = styled.hr`
  width: 100%;
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-bottom: 20px;
`

export {
  Wrapper,
  Hr,
}