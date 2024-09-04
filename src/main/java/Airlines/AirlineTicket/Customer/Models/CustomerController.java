package Airlines.AirlineTicket.Customer.Models;

import Airlines.AirlineTicket.Customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
    @RequestMapping("/customers")
    public class CustomerController {

        @Autowired
        private CustomerService customerService;

        @PostMapping
        public Customer createCustomer(@RequestBody Customer customer) {
            return customerService.saveCustomer(customer);
        }

        @GetMapping
        public List<Customer> getAllCustomers() {
            return customerService.getAllCustomers();
        }

        @GetMapping("/{id}")
        public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
            Customer customer = customerService.getCustomerById(id);
            return ResponseEntity.ok(customer);
        }

        @PutMapping("/{id}")
        public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customerDetails) {
            Customer updatedCustomer = customerService.updateCustomer(id, customerDetails);
            return ResponseEntity.ok(updatedCustomer);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
            customerService.deleteCustomer(id);
            return ResponseEntity.noContent().build();
        }
}