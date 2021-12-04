// export { default as LogInForm } from './LogInForm';

import React, { useState } from 'react';
import LogInForm from './LogInForm';
import JoinForm from './JoinForm';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const LogInModal = ({ closeLogInForm }) => {
  const [openJoinPage, setOpenJoinPage] = useState(false);
  const onClickLogIn = async () => await axios.post('./LogIn');
  const onClickJoin = async () => await axios.post('./join');
  return (
    <>
      { openJoinPage
      ? <JoinForm
          onClickJoin={onClickJoin}
          closeLogInForm={closeLogInForm}
        />
      : <LogInForm
          onClickLogIn={onClickLogIn}
          closeLogInForm={closeLogInForm}
          setOpenJoinPage={setOpenJoinPage}
        />
      }
    </>
  );
};

export default LogInModal;
