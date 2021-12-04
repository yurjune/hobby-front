import styled from 'styled-components';

const Modal = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100vw; 
  height: 100vh; 
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
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
const Title = styled.h1`
  margin: 30px 0 50px 0;
  font-size: 20px;
  font-weight: bold;
`
const Label = styled.label`
  align-self: flex-start;
  font-weight: bold;
  margin-bottom: 10px;
`
const Input = styled.input`
  width: 95%;
  height: 20px;
  margin-bottom: 30px;
  padding: 5px;
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`
const LoginButton = styled.button`
  margin-top: 20px;
  padding: 8px 10px;
  background-color: #ffaa55;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(255, 170, 85, 0.25); /* x축 y축 blur color*/
  cursor: pointer;
  transition: 0.3s;
  &:focus {
    outline: solid;
  }
  &:hover {
    background-color: rgba(255, 170, 85, 0.9);
    box-shadow: 0 2px 4px rgba(255, 170, 85, 0.5);
  }
`
const Forgot = styled.a`
  margin-top: 30px;
  text-decoration: none;
  color: #808080;
  font-size: 14px;
`
const iconStyle = {
  position: 'absolute',
  top: '30px',
  right: 0,
};

export {
  Modal,
  ModalBody,
  ModalContents,
  Title,
  Label,
  Input,
  ButtonWrapper,
  LoginButton,
  Forgot,
  iconStyle,
};