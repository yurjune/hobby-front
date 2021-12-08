import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex: 1;
  hr {
    width: 100%;
    background-color: lightgray;
    border: none;
    height: 1px;
    margin-bottom: 20px;
  }
`
const Text = styled.div`
  font-size: 20px;
`
const Description = styled.div`
  font-size: 18px;
  div {
    margin-bottom: 16px;
  }
`

export {
  Box,
  Text,
  Description,
}