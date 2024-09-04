package Airlines.AirlineTicket.ArrivalDeparture.Models;

import Airlines.AirlineTicket.ArrivalDeparture.ArrivalDeparture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArrivalDepartureRepository extends JpaRepository<ArrivalDeparture , Long> {
}
