package Airlines.AirlineTicket.ArrivalDeparture.Models;

import Airlines.AirlineTicket.ArrivalDeparture.ArrivalDeparture;

import java.util.List;

public interface ArrivalDepartureService {

    List<ArrivalDeparture> getAllArrivalDepartures();

    ArrivalDeparture getArrivalDepartureById(Long id);

    ArrivalDeparture saveArrivalDeparture(ArrivalDeparture arrivalDeparture);

    void deleteArrivalDeparture(Long id);
}
