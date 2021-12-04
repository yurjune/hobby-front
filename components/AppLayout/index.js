import React, { useState } from 'react';
import Header from '../Header';
import HeaderTop from '../HeaderTop';
import LoginModal from '../LoginModal';
import useFetch from '../../hooks/useFetch';
import {
  Grid,
  GridHeader,
  GridItem,
  GridFooter,
} from './style';

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
      <GridItem>{children}</GridItem>
      <GridItem>
        {isOpened ? <LoginModal closeLoginForm={closeLoginForm} /> : ""}
      </GridItem>
      <GridFooter></GridFooter>
    </Grid>
  );
};

export default AppLayout;