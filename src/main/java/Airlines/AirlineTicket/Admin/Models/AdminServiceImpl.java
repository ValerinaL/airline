package Airlines.AirlineTicket.Admin.Models;

import Airlines.AirlineTicket.Admin.Admin;
import Airlines.AirlineTicket.Customer.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl  implements AdminService{
@Autowired
AdminRepository adminRepository;


    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public Admin getAdminById(Long id) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if(optionalAdmin.isPresent()) {
            return adminRepository.getReferenceById(id);

        }else
            throw new ResourceNotFoundException("Admin not found with id: " + id);
        }


    @Override
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public void deleteAdmin(Long id) {
        Admin admin = getAdminById(id);
        adminRepository.delete(admin);
    }
}
