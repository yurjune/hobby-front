import React, { useState } from 'react';
import Header from '../Header';
import HeaderTop from '../HeaderTop';
import LogInModal from '../LogInModal';

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
    
  const openLogInForm = () => setIsOpened(true);
  const closeLogInForm = () => setIsOpened(false);

  if (error) return <div>에러 발생</div>;
  return (
    <Grid>
      <GridHeader>
        <HeaderTop openLogInForm={openLogInForm} />
        <Header me={data} />
      </GridHeader>
      <GridItem>{children}</GridItem>
      <GridItem>
        {isOpened ? <LogInModal closeLogInForm={closeLogInForm} /> : ""}
      </GridItem>
      <GridFooter></GridFooter>
    </Grid>
  );
};

export default AppLayout;