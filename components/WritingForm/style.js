import styled from 'styled-components';

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
  Grid,
  GridItem,
  Picture,
  ImageInput,
  TextArea,
}