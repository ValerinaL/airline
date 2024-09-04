package Airlines.AirlineTicket.CheckIn.Models;



import Airlines.AirlineTicket.CheckIn.CheckIn;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckInRepository extends JpaRepository<CheckIn, Long> {
}