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
