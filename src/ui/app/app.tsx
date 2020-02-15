import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {SearchPanel} from '../search-panel/search-panel';
import styled from 'styled-components';
import {createClient} from '../../client';
import {Party} from '../party/party';

import {createGlobalStyle} from 'styled-components';
const GlobalStyles = createGlobalStyle`
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
  body {
    font-family: Roboto;
  }
`;

const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 810px;
`;

const apolloClient = createClient();

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Container>
        <SearchPanel />
        <Party />
      </Container>
    </ApolloProvider>
  );
};
