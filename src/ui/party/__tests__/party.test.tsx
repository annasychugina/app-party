import React from 'react';
import {render, cleanup, findByTestId, act} from '@testing-library/react';
import {MockedProvider} from '@apollo/react-testing';
import {Party} from '../party';
import {GET_PARTY_STATE_QUERY} from '../../../client/apolloQueries';

const mocks = [
  {
    request: {
      query: GET_PARTY_STATE_QUERY,
    },
    result: {
      data: {
        party: {
          rick: {
            id: '2',
            name: 'Rick 1234',
            image: 'image12',
          },
          morty: {
            id: '3',
            name: 'Morty 3456',
            image: 'morty78',
          },
        },
      },
    },
  },
];

describe('Party', () => {
  afterEach(cleanup);

  it('should render without error', async () => {
    const {container} = render(
      <MockedProvider mocks={mocks} resolvers={{}} addTypename={false}>
        <Party />
      </MockedProvider>,
    );

    await act(async () => {
      const rickCard = await findByTestId(container, 'party-rick');
      const mortyCard = await findByTestId(container, 'party-morty');
      const partyTitle = await findByTestId(container, 'party-title');
      expect(rickCard.textContent).toContain('Rick');
      expect(mortyCard.textContent).toContain('Morty');
      expect(partyTitle.textContent).toContain('Party');
    });
  });
});
