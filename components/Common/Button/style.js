import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`
const LoginButton = styled.button`
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
const Button = styled(LoginButton)`
  width: 60px;
  align-self: ${(props) => props.align};
`

export {
  ButtonWrapper,
  LoginButton,
  Button,
}