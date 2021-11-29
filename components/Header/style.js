import styled from 'styled-components';
import { layoutWidth } from '../AppLayout/style';

const Wrapper = styled.div`
  display: flex;
  max-width: ${layoutWidth};
  height: 45px;
  align-items: center;
  margin: 0 auto;
  position: relative;
  background-color: skyblue;
`
const Logo = styled.div`
  font-size: 20px;
  margin-left: 20px;
`
const Menu = styled.div`
  display: flex;
  gap: 2em;
  padding: 0 2em;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 300px;
  background-color: orange;
`
const MenuItem = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  &:visited {
    color: red;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.25rem;
    background-color: white;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
  }
  &:hover::after {
    transform: scaleX(1);
  }
`
const Profile = styled.div`
  display: flex;
  gap: 2em;
  padding: 0 2em;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: orange;
`
const ProfileItem = styled.div`
`

export {
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  Profile,
  ProfileItem,
}