import ApolloClient, {InMemoryCache, NormalizedCacheObject} from 'apollo-boost';
import {GET_PARTY_STATE} from './apolloQueries';
import {ICharacter} from '../types/types';
import {RICK_MORTY_API} from '../constants';
export interface IState {
  party: {
    __typename: string;
    rick?: ICharacter & {__typename: string};
    morty?: ICharacter & {__typename: string};
  };
}

export function createClient(): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache({});

  const clientState = {
    data: {
      party: {
        __typename: 'Party',
        rick: {
          __typename: 'Character',
          id: 'id1',
          name: null,
          image: null,
        },
        morty: {
          __typename: 'Character',
          id: 'id2',
          name: null,
          image: null,
        },
      },
    },
  };

  cache.writeData(clientState);

  const getState = (query: any) => {
    const data = cache.readQuery<IState>({query});
    return data;
  };

  const writeState = (state: IState) => {
    return cache.writeData({data: state});
  };

  return new ApolloClient({
    uri: RICK_MORTY_API,
    cache,
    //@see https://www.apollographql.com/docs/tutorial/resolvers/
    resolvers: {
      Mutation: {
        updatePartyCharacter: (_, {character}: {character: ICharacter}, {cache}: {cache: any}) => {
          const data = getState(GET_PARTY_STATE);

          const rick = character.name.toLowerCase().indexOf('rick') !== -1;
          const morty = character.name.toLowerCase().indexOf('morty') !== -1;

          writeState({
            party: {
              rick: rick ? {...character, __typename: 'Character'} : data?.party.rick,
              morty: morty
                ? {
                    ...character,
                    __typename: 'Character',
                  }
                : data?.party.morty,
              __typename: 'Party',
            },
          });

          return character;
        },
      },
    },
  });
}
