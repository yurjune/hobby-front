import React from 'react';
import {
  Divide,
} from './style';
import { Flex, Box } from '../Common';
import SideCard from './SideCard';
import WritingForm from './WritingForm';

const WritingPage = ({ me, exPost }) => {
  return (
    <Divide>
      <Box flex="1">
        <SideCard exPost={exPost} />
      </Box>
      <Box flex="3.5">
        <WritingForm me={me} exPost={exPost} />
      </Box>
    </Divide>
  );
};

export default WritingPage;