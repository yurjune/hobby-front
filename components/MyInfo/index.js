import React from 'react';
import { Divide } from '../WritingPage/style';
import { Box } from '../Common';
import SideMenu from './SideMenu';

const MyInfo = ({ children }) => {
  return (
    <Divide>
      <Box flex="1">
        <SideMenu />
      </Box>
      <Box flex="3.5">
        {children}
      </Box>
    </Divide>
  );
};

export default MyInfo;