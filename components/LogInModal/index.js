// export { default as LoginForm } from './LoginForm';

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import JoinForm from './JoinForm';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const LoginModal = ({ closeLoginForm }) => {
  const [openJoinPage, setOpenJoinPage] = useState(false);
  const onClickLogin = async () => await axios.post('./Login');
  const onClickJoin = async () => await axios.post('./join');
  return (
    <>
      { openJoinPage
      ? <JoinForm
          onClickJoin={onClickJoin}
          closeLoginForm={closeLoginForm}
        />
      : <LoginForm
          onClickLogin={onClickLogin}
          closeLoginForm={closeLoginForm}
          setOpenJoinPage={setOpenJoinPage}
        />
      }
    </>
  );
};

export default LoginModal;
