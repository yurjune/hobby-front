import React, { useState } from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import Timer from '../components/Timer';
import LogInForm from '../components/LogInForm';

const Home = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openLogInForm = () => {
    setIsOpened(true);
    console.log(isOpened)
  };
  const closeLogInForm = () => {
    setIsOpened(false);
  };

  return (
    <>
      <AppLayout
        openLogInForm={openLogInForm}
        closeLogInForm={closeLogInForm}
      >
        <Timer />
        {isOpened ? <LogInForm closeLogInForm={closeLogInForm} /> : ""}
      </AppLayout>
    </>
  );
};

export default Home;