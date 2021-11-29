import React from 'react';
import Header from '../Header';
import HeaderTop from '../HeaderTop';
import {
  Grid,
  GridHeader,
  GridItem,
  GridFooter,
} from './style';

const AppLayout = ({ children, openLogInForm }) => {
  return (
    <Grid>
      <GridHeader>
        <HeaderTop openLogInForm={openLogInForm} />
        <Header />
      </GridHeader>
      <GridItem>{children}</GridItem>
      <GridFooter></GridFooter>
    </Grid>
  );
};

export default AppLayout;