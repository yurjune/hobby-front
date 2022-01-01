import styled from 'styled-components';
import { headerWidth } from '../AppLayout/style';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 150px;
  max-width: ${headerWidth};
  margin: 60px auto 0 auto;
`

export {
  Wrapper,
}