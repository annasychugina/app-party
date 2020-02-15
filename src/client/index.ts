import ApolloClient, { InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    charactersOnParty: [Character]!
    party: Party!
  }
  type Party {
    rick: Character!
    morty: Character!
  }
`;

const RICK_MORTY_API = 'https://rickandmortyapi.com/graphql';
const cache = new InMemoryCache({});

export const apolloClient = new ApolloClient({
  uri: RICK_MORTY_API,
  cache,
  typeDefs
});
