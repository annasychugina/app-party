import React from 'react';
import styled from 'styled-components';
import {Preloader} from '../preloader/preloader';
import mockCharacters from './mockData.json';
import {Card} from '../card/card';
import {ICharacter} from '../../types/types';
import {Input} from '../input/input';

interface IProps {
  isLoading?: boolean;
  searchTerm: string;
  onChange: (value: string) => void;
}

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -10px;
  margin-right: -10px;
`;

const Column = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 220px;
  margin-bottom: 30px;
  max-width: 200px;
`;

const Wrapper = styled.div`
  margin-top: 141px;
`;

export const SearchView: React.FC<IProps> = ({isLoading = false, onChange, searchTerm}: IProps) => {
  const handleCardClick = () => {};
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Wrapper>
      <Input onChange={onChange} value={searchTerm} />
      <Grid>
        {mockCharacters.map(({id, image}: ICharacter) => (
          <Column key={id}>
            <Card imageUrl={image} onClick={handleCardClick} />
          </Column>
        ))}
      </Grid>
    </Wrapper>
  );
};
