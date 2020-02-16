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
      <PartyTitle data-testid="party-title">{resources.title}</PartyTitle>
      <CharactersContainer>
        <CardWrapper data-testid="party-rick" type="left">
          <Card imageUrl={rick?.image} type="party">
            {resources.cardName.left}
          </Card>
        </CardWrapper>
        <CardWrapper data-testid="party-morty" type="right">
          <Card imageUrl={morty?.image} type="party">
            {resources.cardName.right}
          </Card>
        </CardWrapper>
      </CharactersContainer>
    </PartyWrapper>
  );
};
