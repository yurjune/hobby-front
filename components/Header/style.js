import styled from 'styled-components';
import { layoutWidth } from '../AppLayout/style';

const Wrapper = styled.div`
  display: flex;
  max-width: ${layoutWidth};
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  background-color: skyblue;
  position: relative;
`
const Logo = styled.div`
  font-size: 20px;
  position: absolute;
  left: 20px;
`
const Menu = styled.ul`
  display: flex;
  background-color: gold;
`
const MenuItem = styled.li`
  padding: 1em 1.5em;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: #555;
  transition: 0.5s;
  &:hover {
    background-color: crimson;
    color: white;
    padding: 1em 2em;
  }
`
const Profile = styled(Menu)`
`
const ProfileItem = styled.div`
  padding: 1em;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: #555;
`

export {
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  Profile,
  ProfileItem,
}