package Airlines.AirlineTicket.Seat.Models;

import Airlines.AirlineTicket.Seat.Seat;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/seats")
public class SeatController {
    @Autowired
    private  SeatService seatService;

    @PostMapping
    public Seat createSeat(@RequestBody Seat seat){
        return seatService.saveSeat(seat);
    }

    @GetMapping
    public List<Seat>getAllSeats(){
        return seatService.getAllSeats();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Seat> getSeatById(@PathVariable Long id){
        Seat seat = seatService.getSeatById(id);
        return ResponseEntity.ok(seat);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Seat>updateSeat(@PathVariable Long id, @RequestBody Seat seatDetails){
        Seat updatedSeat = seatService.updateSeat(id, seatDetails);
        return ResponseEntity.ok(updatedSeat);
    }

    @DeleteMapping("/{id}")

    public ResponseEntity<Void> deleteSeat(@PathVariable Long id) {
        seatService.deleteSeat(id);
        return ResponseEntity.noContent().build();
    }
}
