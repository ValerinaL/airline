package Airlines.AirlineTicket.Ticket.Models;

    import Airlines.AirlineTicket.Ticket.Ticket;
    import org.springframework.data.jpa.repository.JpaRepository;

    public interface TicketRepository extends JpaRepository<Ticket, Long> {}

