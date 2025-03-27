import { gql, useQuery } from '@apollo/client';

export {}; // Makes this file a module

const GET_EVENTS = gql`
  query {
    events {
      id
      name
      location
      date
    }
  }
`;

const EventList = () => {
  const { data, loading, error } = useQuery(GET_EVENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.events.map((event: any) => (
        <li key={event.id}>{event.name} - {event.location} on {event.date}</li>
      ))}
    </ul>
  );
};

export default EventList;