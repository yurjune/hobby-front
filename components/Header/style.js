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
const Desktop = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const Mobile = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${darkgray};
  position: absolute;
  left: 10px;
`
const Menu = styled.div`
  display: flex;
`
const MenuItem = styled.div`
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
  margin-left: 20px;
`
const ProfileItem = styled.div`
  padding: 1em;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: ${darkgray};
`
const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 10px;
  div {
    width: 20px;
    height: 3px;
    background-color: black;
  }
`
const iconStyle = {
  "marginRight": "10px",
  "cursor": "pointer",
}

export {
  Wrapper,
  Desktop,
  Mobile,
  Logo,
  Menu,
  MenuItem,
  Profile,
  ProfileItem,
  Hamburger,
  iconStyle,
}