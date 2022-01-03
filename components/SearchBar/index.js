import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Flex, Box } from '../Common';
import {
  Search,
  searchIconStyle,
} from './style';
import useInput from '../../hooks/useInput';

const SearchBar = () => {
  const [value, handleValue] = useInput('');
  const router = useRouter();

  const doSearch = () => {
    router.push(`/hashtag/${value}`);
  };

  return (
    <Flex>
      <Search type="text" value={value} onChange={handleValue} placeholder="해시태그 검색: #빼고 입력" />
      <FontAwesomeIcon icon={faSearch} style={searchIconStyle} onClick={doSearch} />
    </Flex>
  );
};

export default SearchBar;