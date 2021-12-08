import React from 'react';
import {
  Wrapper,
} from './style';
import SideCard from '../SideCard';
import WritingForm from '../WritingForm';

const DividedPage = ({ me }) => {
  return (
    <Wrapper>
      <SideCard />
      <WritingForm me={me} />
    </Wrapper>
  );
};

export default DividedPage;