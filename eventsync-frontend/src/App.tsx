

import { ApolloProvider } from '@apollo/client';
import client from './services/ApolloClient';
import EventList from './components/EventList';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>EventSync</h1>
        <EventList />
      </div>
    </ApolloProvider>
  );
}
export default App;
