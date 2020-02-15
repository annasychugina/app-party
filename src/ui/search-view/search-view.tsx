import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Preloader} from '../preloader/preloader';
import {Card} from '../card/card';
import {useQuery} from '@apollo/react-hooks';
import {GET_CHARACTERS} from '../../client/apolloQueries';
import resources from './config.json';
import {QueryCharactersArgs} from '../../types/graphql';
import {ICharacter} from '../../types/types';

interface IProps {
  isLoading?: boolean;
  searchTerm: string;
  debouncedSearchTerm: string;
  onChange: (value: string) => void;
  onRemoveCharacter: (id: string) => void;
  removedCharacters: string[];
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

const ErrorText = styled.div`
  color: #ff0000;
  text-align: center;
`;

const WarningText = styled.div`
  color: #dadada;
  text-align: center;
`;

export interface ICharactersData {
  results: ICharacter[] | null;
}

export interface ICharactersQuery {
  characters: ICharactersData | null;
}

export const SearchView: React.FC<IProps> = ({debouncedSearchTerm, onRemoveCharacter, removedCharacters}: IProps) => {
  const {data, loading, error} = useQuery<ICharactersQuery, QueryCharactersArgs>(GET_CHARACTERS, {
    variables: {
      filter: {
        name: debouncedSearchTerm,
      },
    },
  });

  const characters = data?.characters?.results;
  const filteredCharacters = useMemo(
    () => characters && characters.filter(({id}: ICharacter) => removedCharacters.indexOf(id) === -1),
    [characters, removedCharacters],
  );

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <ErrorText>{resources.errorText}</ErrorText>;
  }

  if (!filteredCharacters || filteredCharacters.length === 0) {
    return <WarningText>{resources.warningText}</WarningText>;
  }

  return (
    <Grid>
      {filteredCharacters?.map(({id, image}) => (
        <Column key={id}>
          <Card imageUrl={image} onRemoveCharacter={() => onRemoveCharacter(id)} />
        </Column>
      ))}
    </Grid>
  );
};
