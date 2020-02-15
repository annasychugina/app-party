import React, {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks/useDebounce';
import {DEBOUNCE_DELAY} from '../../constants';
import {SearchView} from '../search-view/search-view';
import styled from 'styled-components';
import {Input} from '../input/input';

interface Props {}

const Wrapper = styled.div`
  margin-top: 141px;
`;

const MIN_SYMBOLS_COUNT = 2;

export const SearchController: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  return<Wrapper>
    <Input onChange={handleChange} value={searchTerm} />
    {debouncedSearchTerm && debouncedSearchTerm.length > MIN_SYMBOLS_COUNT &&
    <SearchView searchTerm={searchTerm} onChange={handleChange} debouncedSearchTerm={debouncedSearchTerm}/>}
  </Wrapper>
};
