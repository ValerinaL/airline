import axios from 'axios';


// Create an instance of axios with the base URL
const flightServiceInstance = axios.create({
    baseURL: FLIGHT_API_BASE_URL,
});

class FlightService {
    getAllFlights() {
        return flightServiceInstance.get('/');
    }

    getFlightById(id) {
        return flightServiceInstance.get(`/${id}`);
    }

    createFlight(flight) {
        return flightServiceInstance.post('/', flight);
    }

    updateFlight(id, flight) {
        return flightServiceInstance.put(`/${id}`, flight);
    }

    deleteFlight(id) {
        return flightServiceInstance.delete(`/${id}`);
    }
}

export default new FlightService();
