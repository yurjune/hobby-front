import React from 'react';
import { useRouter } from 'next/router';
import { Flex, FlexC, Box } from '../Common';
import {
  Card,
  CardItem,
} from './style';

const Menu = [
  { name: '개인정보 변경', url: '/'},
  { name: '비밀번호 변경', url: '/password'},
  { name: '작성한 글', url: '/posts'},
];

const SideMenu = () => {
  const router = useRouter();

  return (
    <FlexC flex="1">
      <Card>
        {Menu.map(item => (
          <CardItem
            key={item.name}
            onClick={() => router.push(`/mypage${item.url}`)}
          >
            {item.name}
          </CardItem>
        ))}
      </Card>
    </FlexC>
  );
};

export default SideMenu;