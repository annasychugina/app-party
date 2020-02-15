import React, {useState} from 'react';
import {useDebounce} from '../../hooks/useDebounce';
import {DEBOUNCE_DELAY} from '../../constants';
import {Characters} from '../characters/characters';
import styled from 'styled-components';
import {Input} from '../input/input';

interface Props {}

const Wrapper = styled.div`
  margin-top: 141px;
`;

const MIN_SYMBOLS_COUNT = 2;

export const SearchPanel: React.FC<Props> = () => {
  const [removedIds, setRemoved] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const handleChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleRemoveCharacter = (id: string) => {
    setRemoved([...removedIds, id]);
  };

  return (
    <Wrapper>
      <Input onChange={handleChange} value={searchTerm} />
      {debouncedSearchTerm && debouncedSearchTerm.length > MIN_SYMBOLS_COUNT && (
        <Characters
          removedCharacters={removedIds}
          onRemoveCharacter={handleRemoveCharacter}
          searchTerm={searchTerm}
          onChange={handleChange}
          debouncedSearchTerm={debouncedSearchTerm}
        />
      )}
    </Wrapper>
  );
};
