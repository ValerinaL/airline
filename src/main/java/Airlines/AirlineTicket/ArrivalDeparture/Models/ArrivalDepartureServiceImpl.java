package Airlines.AirlineTicket.ArrivalDeparture.Models;

import Airlines.AirlineTicket.ArrivalDeparture.ArrivalDeparture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArrivalDepartureServiceImpl implements ArrivalDepartureService {

    @Autowired
    private ArrivalDepartureRepository arrivalDepartureRepository;

    @Override
    public List<ArrivalDeparture> getAllArrivalDepartures() {
        return arrivalDepartureRepository.findAll();
    }

    @Override
    public ArrivalDeparture getArrivalDepartureById(Long id) {
        return arrivalDepartureRepository.findById(id).orElse(null);
    }

    @Override
    public ArrivalDeparture saveArrivalDeparture(ArrivalDeparture arrivalDeparture) {
        return arrivalDepartureRepository.save(arrivalDeparture);
    }

    @Override
    public void deleteArrivalDeparture(Long id) {
        arrivalDepartureRepository.deleteById(id);
    }
}
