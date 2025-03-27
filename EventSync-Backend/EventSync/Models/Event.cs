using System;
using System.Collections.Generic; // For List<User>


public class Event {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Location { get; set; }
    public DateTime Date { get; set; }
    public List<Attendee> Attendees { get; set; } = new List<Attendee>();
}