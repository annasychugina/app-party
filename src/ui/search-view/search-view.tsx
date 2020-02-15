import React from 'react';
import styled from 'styled-components';
import {Preloader} from '../preloader/preloader';
import mockCharacters from './mockData.json';
import {Card} from '../card/card';
import {Input} from '../input/input';
import { useQuery } from '@apollo/react-hooks';
import {GET_CHARACTERS} from '../../client/apolloQueries';
import resources from './config.json';
import {Character, Characters, FilterCharacter, QueryCharactersArgs} from '../../types/graphql';
import {ICharacter} from '../../types/types';

interface IProps {
  isLoading?: boolean;
  searchTerm: string;
  debouncedSearchTerm: string;
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

const ErrorText = styled.div`
 color: #ff0000;
 text-align: center;
`;


export interface ICharactersData {
  results: ICharacter[] | null;
}

export interface ICharactersQuery {
  characters: ICharactersData | null;
}


export const SearchView: React.FC<IProps> = ({debouncedSearchTerm, isLoading = false, onChange, searchTerm}: IProps) => {
  const { data, loading, error } = useQuery<
    ICharactersQuery,
    QueryCharactersArgs
    >(GET_CHARACTERS, {
    variables: {
      filter: {
        name: debouncedSearchTerm,
      },
    },
  });

  const handleCardClick = () => {};

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <ErrorText>{resources.errorText}</ErrorText>
  }

  const characters = data?.characters?.results;
  return (
      <Grid>
        {characters?.map(({id, image}) => (
          <Column key={id}>
            <Card imageUrl={image} onClick={handleCardClick} />
          </Column>
        ))}
      </Grid>
  );
};
