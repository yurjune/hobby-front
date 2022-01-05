// export { default as LoginForm } from './LoginForm';

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import JoinForm from './JoinForm';

const LoginModal = ({ closeLoginForm }) => {
  const [openJoinPage, setOpenJoinPage] = useState(false);

  return (
    <>
      { openJoinPage ?
        <JoinForm closeLoginForm={closeLoginForm} />
      : <LoginForm
        closeLoginForm={closeLoginForm}
        setOpenJoinPage={setOpenJoinPage}
      />}
    </>
  );
};

export default LoginModal;
