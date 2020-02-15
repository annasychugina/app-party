import React from 'react';
import {CharactersContainer, PartyTitle, PartyWrapper, CardWrapper} from './party.styles';
import resources from './config.json';
import {Card} from '../card/card';
import {useQuery} from '@apollo/react-hooks';
import {GET_PARTY_STATE} from '../../client/apolloQueries';
import {IPartyQuery} from '../../types/types';
interface IProps {}

export const Party: React.FC<IProps> = () => {
  const {data} = useQuery<IPartyQuery, any>(GET_PARTY_STATE);
  const rick = data?.party?.rick;
  const morty = data?.party?.morty;
  return (
    <PartyWrapper>
      <PartyTitle>{resources.title}</PartyTitle>
      <CharactersContainer>
        <CardWrapper>
          <Card key={rick?.id} imageUrl={rick?.image} type={'party'}>
            {resources.cardName.left}
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card key={morty?.id} imageUrl={morty?.image} type={'party'}>
            {resources.cardName.right}
          </Card>
        </CardWrapper>
      </CharactersContainer>
    </PartyWrapper>
  );
};
