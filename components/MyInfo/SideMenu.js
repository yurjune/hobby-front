import React from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  CardItem,
} from './style';

const Menu = [
  { name: '개인정보 변경', url: '/'},
  { name: '비밀번호 변경', url: '/changepassword'},
];

const SideMenu = () => {
  const router = useRouter();

  return (
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
  );
};

export default SideMenu;