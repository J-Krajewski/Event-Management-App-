using HotChocolate;
using GreenDonut;


public class Query {
    public IQueryable<Event> GetEvents([Service] EventSyncContext context) => context.Events;
}