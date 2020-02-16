import React from 'react';
import {CharactersContainer, PartyTitle, PartyWrapper, CardWrapper} from './party.styles';
import resources from './config.json';
import {Card} from '../card/card';
import {useQuery} from '@apollo/react-hooks';
import {GET_PARTY_STATE_QUERY} from '../../client/apolloQueries';
import {IPartyQuery} from '../../types/types';
interface IProps {}

export const Party: React.FC<IProps> = () => {
  const {data} = useQuery<IPartyQuery, any>(GET_PARTY_STATE_QUERY);
  const rick = data?.party?.rick;
  const morty = data?.party?.morty;
  return (
    <PartyWrapper>
      <PartyTitle>{resources.title}</PartyTitle>
      <CharactersContainer>
        <CardWrapper type="left">
          <Card key={rick?.id} imageUrl={rick?.image} type="party">
            {resources.cardName.left}
          </Card>
        </CardWrapper>
        <CardWrapper type="right">
          <Card key={morty?.id} imageUrl={morty?.image} type="party">
            {resources.cardName.right}
          </Card>
        </CardWrapper>
      </CharactersContainer>
    </PartyWrapper>
  );
};
