package Airlines.AirlineTicket.ArrivalDeparture.Models;

import Airlines.AirlineTicket.ArrivalDeparture.ArrivalDeparture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/arrivaldeparture")
public class ArrivalDepartureController {
    @Autowired
    private ArrivalDepartureService arrivalDepartureService;

    @GetMapping
    public List<ArrivalDeparture> getAllArrivalDepartures() {
        return arrivalDepartureService.getAllArrivalDepartures();
    }

    @GetMapping("/{id}")
    public ArrivalDeparture getArrivalDepartureById(@PathVariable Long id) {
        return arrivalDepartureService.getArrivalDepartureById(id);
    }
    @PostMapping
    public ArrivalDeparture createArrivalDeparture(@RequestBody ArrivalDeparture arrivalDeparture) {
        return arrivalDepartureService.saveArrivalDeparture(arrivalDeparture);
    }

    @DeleteMapping("/{id}")
    public void deleteArrivalDeparture(@PathVariable Long id) {
        arrivalDepartureService.deleteArrivalDeparture(id);
    }
}
