package Airlines.AirlineTicket.Seat.Models;

import Airlines.AirlineTicket.Customer.ResourceNotFoundException;
import Airlines.AirlineTicket.Seat.Seat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class SeatServiceImpl implements  SeatService {
    @Autowired
    private SeatRepository seatRepository;

    @Override
    public Seat saveSeat(Seat seat) {
        return seatRepository.save(seat);
    }

    @Override
    public List<Seat> getAllSeats() {
        return seatRepository.findAll();
    }

    @Override
    public Seat getSeatById(Long id) {
        Optional<Seat> optionalSeat = seatRepository.findById(id);
      if(optionalSeat.isPresent()){
          return optionalSeat.get();
      }else{
          throw new ResourceNotFoundException("Seat not found with id: "+id);
      }
    }


    @Override
    public  Seat updateSeat(Long id, Seat seatDetails){
        Seat seat = getSeatById(id);
        seat.setSeatNumber(seatDetails.getSeatNumber());
        seat.setSeatClass(seatDetails.getSeatClass());
        return seatRepository.save(seat);
    }

    @Override
    public  void deleteSeat(Long id){
        Seat seat = getSeatById(id);
        seatRepository.delete(seat);
    }
}
