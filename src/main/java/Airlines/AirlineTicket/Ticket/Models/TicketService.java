package Airlines.AirlineTicket.Ticket.Models;

import Airlines.AirlineTicket.Ticket.Ticket;

import java.util.List;

public interface TicketService {

    Ticket saveTicket(Ticket ticket);

    List<Ticket> getAllTickets();

    Ticket getTicketById(Long id);

    Ticket updateTicket(Long id, Ticket ticketDetails);

    void deleteTicket(Long id);
}

