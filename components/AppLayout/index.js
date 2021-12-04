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

const AppLayout = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { data, error, isLoading } = useFetch('/user');
    
  const openLoginForm = () => setIsOpened(true);
  const closeLoginForm = () => setIsOpened(false);

  if (error) return <div>에러 발생</div>;
  return (
    <Grid>
      <GridHeader>
        <HeaderTop openLoginForm={openLoginForm} />
        <Header me={data} />
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