import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 3.3;
  margin: 10px 10px 30px 10px;
  padding: 30px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 6%); /* x축 y축 blur color*/
`
const Text = styled.div`
  text-align: center;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`
const Bold = styled.div`
  text-align: center;
  font-weight: 700;
`

export {
  Wrapper,
  Text,
  Bold,
}