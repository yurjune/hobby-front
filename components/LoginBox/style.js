import styled from 'styled-components';

const Modal = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const ModalBody = styled.div`
  width: 370px;
  height: ${(props) => props.height || "500px"};
  background-color: #fff;
`
const ModalContents = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0 50px 0;
`
const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 10px;
`
const Input = styled.input`
  width: 95%;
  height: 20px;
  margin-bottom: 30px;
  padding: 5px;
`
const Forgot = styled.a`
  margin-top: 30px;
  text-decoration: none;
  color: #808080;
  font-size: 14px;
`
const iconStyle = {
  cursor: 'pointer',
  position: 'absolute',
  top: '33px',
  right: 0,
};

export {
  Modal,
  ModalBody,
  ModalContents,
  Title,
  Label,
  Input,
  Forgot,
  iconStyle,
};