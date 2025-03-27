using Microsoft.EntityFrameworkCore;

using Npgsql.EntityFrameworkCore.PostgreSQL;  // This is crucial for UseNpgsql


public class EventSyncContext : DbContext {
    public EventSyncContext(DbContextOptions<EventSyncContext> options) : base(options) { }
    public DbSet<Event> Events { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Attendee> Attendees { get; set; }
}