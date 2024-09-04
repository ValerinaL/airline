package Airlines.AirlineTicket.CheckIn.Models;
import Airlines.AirlineTicket.CheckIn.CheckIn;
import java.util.List;

public interface CheckInService {

    public List<CheckIn> getAllCheckins();

    public CheckIn getCheckinById(Long id);

    public CheckIn saveCheckin(CheckIn checkin);

    public void deleteCheckin(Long id);
}