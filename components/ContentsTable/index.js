import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Title,
  Table,
} from './style'

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
    <Box>
      <Title>
        <div>수영</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </Title>
      <Table>
        <thead>
          {tableHeadItems.map(value => <th key={value}>{value}</th>)}
        </thead>
        {dummyUsers.map(items => <tbody>{items.user.map(value => <td>{value}</td>)}</tbody>)}
      </Table>
    </Box>
  );
};

export default ContentsTable;