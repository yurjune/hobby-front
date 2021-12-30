import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import HeaderTop from '../HeaderTop';
import LoginModal from '../LoginModal';
import {
  Grid,
  GridHeader,
  GridItem,
  GridItem2,
  GridFooter,
} from './style';

const SecondLayout = ({ children, me }) => {
  const [isOpened, setIsOpened] = useState(false);
    
  const openLoginForm = () => setIsOpened(true);
  const closeLoginForm = () => setIsOpened(false);

  return (
    <Grid>
      <GridHeader>
        <HeaderTop me={me} openLoginForm={openLoginForm} />
        <Header me={me} />
      </GridHeader>
      <GridItem>{children}</GridItem>
      {isOpened ? 
        <GridItem>
          <LoginModal closeLoginForm={closeLoginForm} />
        </GridItem>
      : ""}
      <GridFooter><Footer /></GridFooter>
    </Grid>
  );
};

export default SecondLayout;