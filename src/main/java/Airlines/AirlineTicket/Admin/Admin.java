package Airlines.AirlineTicket.Admin;

import Airlines.AirlineTicket.Attendee.Attendee;
import Airlines.AirlineTicket.Flight.Flight;
import Airlines.AirlineTicket.Message.Message;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Admin {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String username;
        private String password;
        private String role;

        @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL, orphanRemoval = true)
        private List<Flight> flights;




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Flight> getFlights() {
        return flights;
    }

    public void setFlights(List<Flight> flights) {
        this.flights = flights;
    }


}