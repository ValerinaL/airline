package Airlines.AirlineTicket.Flight.Models;

import Airlines.AirlineTicket.Flight.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Long> {
}
