import styled from 'styled-components';
import { headerWidth } from '../AppLayout/style';
import { darkgray } from '../Common/color';

const Wrapper = styled.div`
  display: flex;
  max-width: ${headerWidth};
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
  background-color: gold;
`
const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${darkgray};
  position: absolute;
  left: 10px;
`
const Menu = styled.ul`
  display: flex;
`
const MenuItem = styled.li`
  padding: 1em 1.5em;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: ${darkgray};
  transition: 0.5s;
  &:hover {
    background-color: crimson;
    color: white;
    padding: 1em 2em;
  }
`
const Profile = styled(Menu)`
`
const ProfileItem = styled.li`
  padding: 1em;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: ${darkgray};
`
const iconStyle = {
  "marginRight": "10px",
  "cursor": "pointer",
}

export {
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  Profile,
  ProfileItem,
  iconStyle,
}