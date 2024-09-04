package Airlines.AirlineTicket.Admin.Models;
import Airlines.AirlineTicket.Admin.Admin;

import java.util.List;
public interface AdminService {


        public List<Admin> getAllAdmins();


        public Admin getAdminById(Long id);


        public Admin saveAdmin(Admin admin);

        public void deleteAdmin(Long id);

}
