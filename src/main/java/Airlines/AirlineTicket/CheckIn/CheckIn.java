package Airlines.AirlineTicket.CheckIn;

import Airlines.AirlineTicket.Attendee.Attendee;
import Airlines.AirlineTicket.Booking.Booking;
import Airlines.AirlineTicket.Flight.Flight;
import Airlines.AirlineTicket.Ticket.Ticket;
import jakarta.persistence.*;

@Entity
public class CheckIn {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String checkinTime;
    private boolean isCheckedIn;

    @ManyToOne
    @JoinColumn(name = "booking_id") // Foreign key to Booking
    private Booking booking;

    @ManyToOne
    @JoinColumn(name = "attendee_id") // Foreign key to Attendee
    private Attendee attendee;

    @OneToOne
    @JoinColumn(name = "ticket_id") // Foreign key to Ticket
    private Ticket ticket;

    @ManyToOne
    @JoinColumn(name = "flight_id") // Foreign key to Flight
    private Flight flight;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCheckinTime() {
        return checkinTime;
    }

    public void setCheckinTime(String checkinTime) {
        this.checkinTime = checkinTime;
    }

    public boolean isCheckedIn() {
        return isCheckedIn;
    }

    public void setCheckedIn(boolean checkedIn) {
        isCheckedIn = checkedIn;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public Attendee getAttendee() {
        return attendee;
    }

    public void setAttendee(Attendee attendee) {
        this.attendee = attendee;
    }

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }
}
