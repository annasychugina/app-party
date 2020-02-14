import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {SearchController} from '../search-controller/search-controller';
import styled from 'styled-components';

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
    <ApolloProvider client={client}>
      <Container>
        <SearchController />
      </Container>
    </ApolloProvider>
  );
};
