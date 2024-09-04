package Airlines.AirlineTicket.Customer.Models;

import Airlines.AirlineTicket.Customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {}
