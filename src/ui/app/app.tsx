import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {SearchPanel} from '../search-panel/search-panel';
import {createClient} from '../../client';
import {Party} from '../party/party';
import {Container} from './app.styles';

const apolloClient = createClient();

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
