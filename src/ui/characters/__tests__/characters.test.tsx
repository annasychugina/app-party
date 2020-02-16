import React from 'react';
import {MockedProvider, wait} from '@apollo/react-testing';
import {GET_CHARACTERS_QUERY, UPDATE_PARTY_CHARACTER} from '../../../client/apolloQueries';
import {Characters} from '../characters';
import {fireEvent, render, waitForDomChange, act, cleanup} from '@testing-library/react';

const deleteCharacter = {id: '1', name: 'rick 123', image: 'image rick'};
const mocks = [
  {
    request: {
      query: GET_CHARACTERS_QUERY,
      variables: {filter: {name: 'rick'}},
    },
    result: {
      data: {
        __typename: 'Characters',
        characters: {
          __typename: 'Character',
          results: [
            {
              id: '1',
              name: 'rick 123',
              image: 'image rick',
              __typename: 'Character',
            },
            {
              id: '2',
              name: 'rick 1234',
              image: 'image rick45',
              __typename: 'Character',
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: UPDATE_PARTY_CHARACTER,
      variables: {character: {id: '1', name: 'rick 123', image: 'image rick'}},
    },
    result: {
      data: {deleteCharacter},
    },
  },
];

const mocks2 = [
  {
    request: {
      query: GET_CHARACTERS_QUERY,
      variables: {filter: {name: 'rick'}},
    },
    error: new Error('Error'),
  },
  {
    request: {
      query: UPDATE_PARTY_CHARACTER,
      variables: {data: {id: '1', name: 'rick 123', image: 'image rick'}},
    },
    result: {
      data: {deleteCharacter},
    },
  },
];

const mock3 = [
  {
    request: {
      query: GET_CHARACTERS_QUERY,
      variables: {filter: {name: 'test'}},
    },
    result: {
      data: {
        __typename: 'Characters',
        characters: {
          __typename: 'Character',
          results: [],
        },
      },
    },
  },
  {
    request: {
      query: UPDATE_PARTY_CHARACTER,
      variables: {data: {id: '1', name: 'rick 123', image: 'image rick'}},
    },
    result: {
      data: {deleteCharacter},
    },
  },
];

describe('Characters', () => {
  afterEach(cleanup);
  it('should render error', async () => {
    await act(async () => {
      const {findByTestId} = render(
        <MockedProvider resolvers={{}} mocks={mocks2}>
          <Characters
            searchTerm={'rick'}
            removedCharacters={[]}
            debouncedSearchTerm={'rick'}
            onRemoveCharacter={() => {}}
            onChange={() => {}}
          />
        </MockedProvider>,
      );

      await wait(500); // wait for response
      const error = await findByTestId('error-text');
      expect(error).toBeTruthy();
    });
  });

  it('should render warning if no results', async () => {
    await act(async () => {
      const {findByTestId} = render(
        <MockedProvider resolvers={{}} mocks={mock3}>
          <Characters
            searchTerm={'test'}
            removedCharacters={[]}
            debouncedSearchTerm={'test'}
            onRemoveCharacter={() => {}}
            onChange={() => {}}
          />
        </MockedProvider>,
      );

      await wait(500);
      const warningText = await findByTestId('warning-text');
      expect(warningText).toBeTruthy();
    });
  });

  it('remove card on click correctly', async () => {
    await act(async () => {
      const removeCharacterMock = jest.fn();
      const component = render(
        <MockedProvider resolvers={{}} mocks={mocks}>
          <Characters
            searchTerm={'rick'}
            removedCharacters={[]}
            debouncedSearchTerm={'rick'}
            onRemoveCharacter={removeCharacterMock}
            onChange={() => {}}
          />
        </MockedProvider>,
      );
      await wait(500);
      const nodes = await component.getAllByTestId('remove');
      expect(nodes.length).toBe(2);
      fireEvent(
        nodes[0],
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(removeCharacterMock).toHaveBeenNthCalledWith(1, '1');
    });
  });

  it('mutation should be called when click the button', async () => {
    await act(async () => {
      const component = render(
        <MockedProvider resolvers={{}} mocks={mocks}>
          <Characters
            searchTerm={'rick'}
            removedCharacters={[]}
            debouncedSearchTerm={'rick'}
            onRemoveCharacter={() => {}}
            onChange={() => {}}
          />
        </MockedProvider>,
      );
      await waitForDomChange();
      const nodes = await component.getAllByTestId('character-card');
      expect(nodes.length).toBe(2);
      fireEvent(
        nodes[0],
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      await wait(500);
      const updateCharacterResult = mocks[1].result;
      expect(updateCharacterResult).toMatchSnapshot();
    });
  });
});
