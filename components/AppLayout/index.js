import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import HeaderTop from '../HeaderTop';
import LoginBox from '../LoginBox';
import {
  Grid,
  GridHeader,
  GridItem,
  GridItem2,
  GridFooter,
} from './style';
import { Timer } from '../Timer';

const AppLayout = ({ children, me }) => {
  const [isOpened, setIsOpened] = useState(false);
    
  const openLoginForm = () => setIsOpened(true);
  const closeLoginForm = () => setIsOpened(false);

  return (
    <Grid>
      <GridHeader>
        <HeaderTop me={me} openLoginForm={openLoginForm} />
        <Header me={me} />
      </GridHeader>
      {/* <GridItem><Timer me={me} /></GridItem> */}
      <GridItem2>{children}</GridItem2>
      {isOpened ? 
        <GridItem>
          <LoginBox closeLoginForm={closeLoginForm} />
        </GridItem>
      : ""}
      <GridFooter><Footer /></GridFooter>
    </Grid>
  );
};

export default AppLayout;