package Airlines.AirlineTicket.Flight.Models;

import Airlines.AirlineTicket.Flight.Flight;

import java.util.List;

public interface FlightService {

    List<Flight> getAllFlights();

    Flight getFlightById(Long id);

    Flight saveFlight(Flight flight);

    void deleteFlight(Long id);
}

