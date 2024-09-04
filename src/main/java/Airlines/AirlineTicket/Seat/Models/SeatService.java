package Airlines.AirlineTicket.Seat.Models;

import Airlines.AirlineTicket.Seat.Seat;


import java.util.List;


public interface SeatService {

    Seat saveSeat(Seat seat);

    List<Seat>getAllSeats();

    Seat getSeatById(Long id);

    Seat updateSeat (Long id , Seat seatDetails);

    void deleteSeat(Long id);




}
