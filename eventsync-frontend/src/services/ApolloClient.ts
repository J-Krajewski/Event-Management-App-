import { ApolloClient, InMemoryCache } from '@apollo/client';

export {}; // Makes this file a module


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

export default client;