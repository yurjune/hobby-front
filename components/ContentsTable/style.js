import styled from 'styled-components';

const Box = styled.div`
`
const Title = styled.div`
  display: flex;
  gap: 15px;
  padding: 20px 10px;
  font-size: 18px;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  thead {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  th, td {
    padding: 15px 20px;
    min-width: 80px;
  }
`

export {
  Box,
  Title,
  Table,
};