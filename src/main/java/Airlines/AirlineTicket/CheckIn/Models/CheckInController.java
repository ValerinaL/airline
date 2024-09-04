package Airlines.AirlineTicket.CheckIn.Models;

import Airlines.AirlineTicket.CheckIn.CheckIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/check_in")
public class CheckInController {

    @Autowired
    private CheckInService checkinService;

    @GetMapping
    public List<CheckIn> getAllCheckins() {
        return checkinService.getAllCheckins();
    }

    @GetMapping("/{id}")
    public CheckIn getCheckinById(@PathVariable Long id) {
        return checkinService.getCheckinById(id);
    }

    @PostMapping
    public CheckIn createCheckin(@RequestBody CheckIn checkin) {
        return checkinService.saveCheckin(checkin);
    }

    @PutMapping("/{id}")
    public CheckIn updateCheckin(@PathVariable Long id, @RequestBody CheckIn checkinDetails) {
        CheckIn checkin = checkinService.getCheckinById(id);
        if (checkin != null) {
            checkin.setId(checkinDetails.getId());
            checkin.setCheckinTime(checkinDetails.getCheckinTime());
            checkin.setCheckedIn(checkinDetails.isCheckedIn());
            return checkinService.saveCheckin(checkin);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCheckin(@PathVariable Long id) {
        checkinService.deleteCheckin(id);
    }
}