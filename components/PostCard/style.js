import styled from 'styled-components';

const Paragraph = styled.div`
  word-break: break-all;
  margin-bottom: ${props => props.mb || "20px"};
  line-height: 1.5rem;
`

export {
  Paragraph,
}