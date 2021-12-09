import styled from 'styled-components';

// default
const Box = styled.div`
  align-self: ${props => props.self};
  flex: ${props => props.flex};
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  margin-right: ${props => props.mr};
  margin-left: ${props => props.ml};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  padding: ${props => props.p};
  padding-right: ${props => props.pr};
  padding-left: ${props => props.pl};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  position: ${props => props.pos};
  font-size: ${props => props.fontSize};
  background-color: ${props => props.bg};
  color: ${props => props.color};
`
const Flex = styled(Box)`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`
const FlexC = styled(Flex)`
  flex-direction: column;
`
const Text = styled.div`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  margin: ${props => props.m};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  align-self: ${props => props.self};
`
const Bold = styled(Text)`
  font-weight: bold;
`

// custom
const Button = styled.button`
  padding: 8px 10px;
  background-color: #ffaa55;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(255, 170, 85, 0.25); /* x축 y축 blur color*/
  cursor: pointer;
  transition: 0.3s;
  &:focus {
    outline: solid;
  }
  &:hover {
    background-color: rgba(255, 170, 85, 0.9);
    box-shadow: 0 2px 4px rgba(255, 170, 85, 0.5);
  }
  margin-right: ${props => props.mr};
  align-self: ${(props) => props.align};
`

export {
  Box,
  Flex,
  FlexC,
  Text,
  Bold,
  Button,
}