import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
  query CharactersQuery($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_PARTY_STATE = gql`
  query Party {
    party @client {
      rick {
        id
        name
        image
      }
      morty {
        id
        name
        image
      }
    }
  }
`;

export const UPDATE_PARTY_CHARACTER = gql`
  mutation updatePartyCharacter($character: SetPerson) {
    updatePartyCharacter(character: $character) @client
  }
`;
