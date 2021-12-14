import React from 'react';
import { FlexC, Flex, Box } from '../Common';
import { headerWidth } from '../AppLayout/style';
import { Hr } from '../SideCard/style';

const Footer = () => {
  return (
    <FlexC
      h="150px"
      maxW={headerWidth}
      m="0 auto"
      flex="1"
    >
      <Hr />
      <Box>회사소개 채용방침 인재모집</Box>
    </FlexC>
  );
};

export default Footer;