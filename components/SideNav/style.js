import styled from 'styled-components';
import { softgray } from '../Common/color';

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`
const ModalBody = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background-color: #fff;
`
const MenuItem = styled.div`
  padding: 20px 10px;
  :hover {
    background-color: gold;
    transition: 0.3s;
  }
`
const Hr = styled.hr`
  width: 100%;
  background-color: ${softgray};
  border: none;
  height: 1px;
  margin: 0;
  margin-bottom: ${props => props.mb};
`
const iconStyle = {
  "top": "10px",
};

export {
  Modal,
  ModalBody,
  MenuItem,
  Hr,
  iconStyle,
}