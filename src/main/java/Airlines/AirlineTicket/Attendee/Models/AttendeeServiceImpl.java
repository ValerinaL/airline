package Airlines.AirlineTicket.Attendee.Models;

import Airlines.AirlineTicket.Attendee.Attendee;
import Airlines.AirlineTicket.Customer.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AttendeeServiceImpl implements AttendeeService{

    @Autowired

    AttendeeRepository attendeeRepository;


    @Override
    public List<Attendee> getAllAttendees() {
        return attendeeRepository.findAll();
    }

    @Override
    public Attendee getAttendeeById(Long id) {
        Optional<Attendee> optionalAttendee = attendeeRepository.findById(id);
        if(optionalAttendee.isPresent()){
            return  attendeeRepository.getReferenceById(id);
        }else
            throw new ResourceNotFoundException("Attendee with id " +id + "is not found");
    }

    @Override
    public Attendee saveAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    @Override
    public void deleteAttendee(Long id) {
        Attendee attendee = getAttendeeById(id);
        attendeeRepository.delete(attendee);
    }
}
