import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  margin: ${props => props.m};
  padding: ${props => props.p};
`

export {
  Flex,
}