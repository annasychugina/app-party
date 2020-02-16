import React, {useCallback, useMemo} from 'react';
import {Preloader} from '../preloader/preloader';
import {Card} from '../card/card';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {GET_CHARACTERS_QUERY, UPDATE_PARTY_CHARACTER} from '../../client/apolloQueries';
import resources from './config.json';
import {QueryCharactersArgs} from '../../types/graphql';
import {ICharacter} from '../../types/types';
import {Column, ErrorText, Grid, WarningText} from './characters.styles';

interface IProps {
  isLoading?: boolean;
  searchTerm: string;
  debouncedSearchTerm: string;
  onChange: (value: string) => void;
  onRemoveCharacter: (id: string) => void;
  removedCharacters: string[];
}

export interface ICharactersData {
  results: ICharacter[] | null;
}

export interface ICharactersQuery {
  characters: ICharactersData | null;
}

export const Characters: React.FC<IProps> = ({debouncedSearchTerm, onRemoveCharacter, removedCharacters}: IProps) => {
  const {data, loading, error} = useQuery<ICharactersQuery, QueryCharactersArgs>(GET_CHARACTERS_QUERY, {
    variables: {
      filter: {
        name: debouncedSearchTerm,
      },
    },
  });

  const [updatePartyCharacter] = useMutation(UPDATE_PARTY_CHARACTER);
  const characters = data?.characters?.results;
  const filteredCharacters = useMemo(
    () => characters && characters.filter(({id}: ICharacter) => removedCharacters.indexOf(id) === -1),
    [characters, removedCharacters],
  );

  const handleClick = useCallback(
    (character: ICharacter) => {
      updatePartyCharacter({
        variables: {
          character,
        },
      });
    },
    [updatePartyCharacter],
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
      {filteredCharacters?.map(({id, image, name}) => (
        <Column key={id}>
          <Card
            imageUrl={image}
            onRemoveCharacter={(e: React.SyntheticEvent) => {
              e.stopPropagation();
              onRemoveCharacter(id);
            }}
            onClick={() => handleClick({id, image, name})}
          />
        </Column>
      ))}
    </Grid>
  );
};
