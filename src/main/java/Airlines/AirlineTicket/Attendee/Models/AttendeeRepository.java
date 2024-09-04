package Airlines.AirlineTicket.Attendee.Models;


import Airlines.AirlineTicket.Attendee.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {
}