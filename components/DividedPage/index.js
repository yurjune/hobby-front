import React from 'react';
import {
  Wrapper,
} from './style';
import SideCard from '../SideCard';
import WritingForm from '../WritingForm';

const DividedPage = ({ me, exPost }) => {
  return (
    <Wrapper>
      <SideCard exPost={exPost} />
      <WritingForm me={me} exPost={exPost} />
    </Wrapper>
  );
};

export default DividedPage;