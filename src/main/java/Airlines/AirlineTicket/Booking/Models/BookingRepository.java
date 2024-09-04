package Airlines.AirlineTicket.Booking.Models;
import Airlines.AirlineTicket.Booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {}
