package Airlines.AirlineTicket.Booking.Models;

import Airlines.AirlineTicket.Booking.Booking;

import java.util.List;

public interface BookingService {

    Booking saveBooking(Booking booking);

List<Booking> getAllBookings();

    Booking getBookingById(Long id);

    Booking updateBooking(Long id, Booking bookingDetails);

    void deleteBooking(Long id);
}
