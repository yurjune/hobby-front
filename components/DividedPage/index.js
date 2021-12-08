import React from 'react';
import {
  Box,
} from './style';
import SideCard from '../SideCard';
import WritingForm from '../WritingForm';

const DividedPage = ({ me }) => {
  return (
    <Box>
      <SideCard />
      <WritingForm me={me} />
    </Box>
  );
};

export default DividedPage;