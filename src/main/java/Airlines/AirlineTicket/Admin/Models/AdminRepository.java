package Airlines.AirlineTicket.Admin.Models;

import Airlines.AirlineTicket.Admin.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}