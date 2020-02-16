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
      <Characters
        removedCharacters={removedIds}
        onRemoveCharacter={handleRemoveCharacter}
        searchTerm={searchTerm}
        onChange={handleChange}
        debouncedSearchTerm={debouncedSearchTerm}
      />
    </Wrapper>
  );
};
