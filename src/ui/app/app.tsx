import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {SearchPanel} from '../search-panel/search-panel';
import styled from 'styled-components';
import {apolloClient} from '../../client';
import {Party} from '../party/party';

const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 810px;
`;

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Container>
        <SearchPanel />
        <Party />
      </Container>
    </ApolloProvider>
  );
};
