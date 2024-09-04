import axios from 'axios';


const flightServiceInstance = axios.create({
    baseURL: 'http://localhost:8080/api/flights',
});

class FlightService {
    getAllFlights() {
        return axios.get(FLIGHT_API_BASE_URL);
    }

    getFlightById(id) {
        return axios.get(`${FLIGHT_API_BASE_URL}/${id}`);
    }

    createFlight(flight) {
        return axios.post(FLIGHT_API_BASE_URL, flight);
    }

    updateFlight(id, flight) {
        return axios.put(`${FLIGHT_API_BASE_URL}/${id}`, flight);
    }

    deleteFlight(id) {
        return axios.delete(`${FLIGHT_API_BASE_URL}/${id}`);
    }
}

export default new FlightService();
