package Airlines.AirlineTicket.Message.Models;


import Airlines.AirlineTicket.Message.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
