import styled from 'styled-components';

const Divide = styled.div`
  @media screen and (max-width: 686px) {
    display: flex;
    padding: 15px;
    flex-direction: column;
    gap: 30px;
  }
  display: flex;
  padding: 15px;
  gap: 30px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
  height: 100%;
  padding: 30px 25px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 6%); /* x축 y축 blur color*/
`
const Hr = styled.hr`
  width: 100%;
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-bottom: 20px;
`
const Grid = styled.div`
  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(51%, 1fr));
    gap: 15px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    gap: 15px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 968px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    gap: 15px;
    margin-bottom: 30px;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
  gap: 15px;
  margin-bottom: 30px;
`
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Picture = styled.div`
  border-radius: 15px;
  height: 0px;
  padding-bottom: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  background-color: ${props => props.color};
`
const ImageInput = styled.input`
  margin-bottom: 20px;
`
const TextArea = styled.textarea`
  min-height: 250px;
  font-size: 16px;
  margin-bottom: 15px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`

export {
  Divide,
  Card,
  Hr,
  Grid,
  GridItem,
  Picture,
  ImageInput,
  TextArea,
}