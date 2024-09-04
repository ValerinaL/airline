package Airlines.AirlineTicket.CheckIn.Models;

import Airlines.AirlineTicket.CheckIn.CheckIn;
import java.util.Optional;
import Airlines.AirlineTicket.Customer.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CheckInServiceImpl implements  CheckInService{

    @Autowired
  private   CheckInRepository  checkInRepository;


    @Override
    public List<CheckIn> getAllCheckins() {
        return checkInRepository.findAll();
    }

    @Override
    public CheckIn getCheckinById(Long id) {
        Optional<CheckIn> optionalCheckIn = checkInRepository.findById(id);
        if (optionalCheckIn.isPresent()) {
            return optionalCheckIn.get();
        } else {
            throw new ResourceNotFoundException("CheckIn not found with id: " + id);
        }
    }

    @Override
    public CheckIn saveCheckin(CheckIn checkin) {
        return checkInRepository.save(checkin);
    }

    @Override
    public void deleteCheckin(Long id) {
        CheckIn checkIn = getCheckinById(id);
        checkInRepository.delete(checkIn);
    }
}
