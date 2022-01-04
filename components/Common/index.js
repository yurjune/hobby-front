import styled from 'styled-components';

const Box = styled.div`
  flex: ${props => props.flex};
  align-self: ${props => props.self};
  width: ${props => props.w};
  max-width: ${props => props.maxW};
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
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  background-color: ${props => props.bg};
  float: ${props => props.float};
  align: ${props => props.align};
  cursor: ${props => props.cursor};
`
const Flex = styled(Box)`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  gap: ${props => props.gap};
`
const FlexC = styled(Flex)`
  flex-direction: column;
`
const Text = styled(Box)`
  text-align: ${props => props.textAlign};
  line-height: ${props => props.lineHeight};
`
const Bold = styled(Text)`
  font-weight: bold;
`
const Pointer = styled(Text)`
  cursor: pointer;
`

export {
  Box,
  Flex,
  FlexC,
  Text,
  Bold,
  Pointer,
}