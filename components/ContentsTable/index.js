import React from 'react';
import {
  Table,
} from './style'
import CategoryBarSmall from '../CategoryBarSmall';

const tableHeadItems = [
  '등수',
  '아이디',
  '공부시간',
  '상태메시지',
]
const dummyUsers = [
  {
    user: [
      '1st',
      'abc',
      '12:40:30',
      '접영 마스터 가즈아~',
    ]
  },
  {
    user: [
      '2nd',
      'efg',
      '10:40:30',
      '접영 마스터 가즈아~ 접영 마스터 가즈아~ 접영 마스터 가즈아~ 접영 마스터 가즈아~ 접영 마스터 가즈아~ ',
    ]
  },
]
const ContentsTable = () => {
  return (
    <>
      <CategoryBarSmall />
      <Table>
        <thead>
          <tr>
            {tableHeadItems.map(value => <th key={value}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map(items => (
            <tr key={items.user[0]}>
              {items.user.map(value => <td key={value[1]}>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ContentsTable;