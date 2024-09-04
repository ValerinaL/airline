package Airlines.AirlineTicket.Payment.Models;
import Airlines.AirlineTicket.Payment.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {}