package Airlines.AirlineTicket.Seat.Models;

import Airlines.AirlineTicket.Seat.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeatRepository  extends JpaRepository<Seat,Long> {
}
