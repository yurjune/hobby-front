import React from 'react';
import {
  Divide,
} from './style';
import SideCard from '../SideCard';
import WritingForm from '../WritingForm';

const DividedPage = ({ me, exPost }) => {
  return (
    <Divide>
      <SideCard exPost={exPost} />
      <WritingForm me={me} exPost={exPost} />
    </Divide>
  );
};

export default DividedPage;