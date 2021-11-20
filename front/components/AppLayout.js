import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import MiniHeader from '../components/MiniHeader';

export const layoutWidth = "1000px";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, ${layoutWidth}) 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`
const GridHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
`
const GridItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`
const GridFooter = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
`

const AppLayout = ({ children }) => {
  return (
    <Grid>
      <GridHeader>
        <MiniHeader />
        <Header />
      </GridHeader>
      <GridItem>{children}</GridItem>
      <GridFooter></GridFooter>
    </Grid>
  );
};

export default AppLayout;