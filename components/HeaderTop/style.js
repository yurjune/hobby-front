import styled from 'styled-components';
import { layoutWidth } from '../AppLayout/style';

const Wrapper = styled.div`
  display: flex;
  max-width: ${layoutWidth};
  height: 40px;
  margin: 0 auto;
  position: relative;
  font-size: 14px;
  align-items: center;
`
const Menu = styled.div`
  display: flex;
  position: absolute;
  gap: 1rem;
  padding: 0 1rem;
  right: 0;
`
const MenuItem = styled.div`
  cursor: pointer;
`

export {
  Wrapper,
  Menu,
  MenuItem,
}