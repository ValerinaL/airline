package Airlines.AirlineTicket.Attendee.Models;
import Airlines.AirlineTicket.Attendee.Attendee;

import java.util.List;


public interface AttendeeService {


    public List<Attendee> getAllAttendees();

    public Attendee getAttendeeById(Long id);

    public Attendee saveAttendee(Attendee attendee);

    public void deleteAttendee(Long id);

    }