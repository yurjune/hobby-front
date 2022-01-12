import styled from 'styled-components';
import "@fontsource/roboto";
import "@fontsource/nanum-gothic";

// export const headerWidth = `calc(100% - 120px)`;
export const headerWidth = `1200px`;
export const layoutWidth = "1200px";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, ${layoutWidth}) 1fr;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  font-family: "Roboto", "Nanum Gothic";
`
const GridHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-family: "Malgun Gothic";
`
const GridItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`
const GridItem2 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
`
const GridFooter = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
`

export {
  Grid,
  GridHeader,
  GridItem,
  GridItem2,
  GridFooter,
}