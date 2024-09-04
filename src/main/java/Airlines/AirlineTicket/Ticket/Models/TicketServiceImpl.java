package Airlines.AirlineTicket.Ticket.Models;

import Airlines.AirlineTicket.Customer.ResourceNotFoundException;
import Airlines.AirlineTicket.Ticket.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Override
    @Transactional
    public Ticket saveTicket(Ticket ticket) {
        // Optionally validate ticket details here
        return ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket getTicketById(Long id) {
        return ticketRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ticket not found with id: " + id));
    }

    @Override
    @Transactional
    public Ticket updateTicket(Long id, Ticket ticketDetails) {
        Ticket ticket = getTicketById(id);
        ticket.setTicketNumber(ticketDetails.getTicketNumber());
        ticket.setIssueDate(ticketDetails.getIssueDate());
        ticket.setBooking(ticketDetails.getBooking());
        ticket.setSeat(ticketDetails.getSeat());
        ticket.setCheckIn(ticketDetails.getCheckIn());
        return ticketRepository.save(ticket);
    }

    @Override
    @Transactional
    public void deleteTicket(Long id) {
        Ticket ticket = getTicketById(id);
        ticketRepository.delete(ticket);
    }
}


