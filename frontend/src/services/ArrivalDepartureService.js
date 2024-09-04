import axios from 'axios';

const ARRIVAL_DEPARTURE_API_BASE_URL = "http://localhost:8080/api/arrivaldeparture";

class ArrivalDepartureService {
    getAllArrivalDepartures() {
        return axios.get(ARRIVAL_DEPARTURE_API_BASE_URL);
    }

    getArrivalDepartureById(id) {
        return axios.get(`${ARRIVAL_DEPARTURE_API_BASE_URL}/${id}`);
    }

    createArrivalDeparture(arrivalDeparture) {
        return axios.post(ARRIVAL_DEPARTURE_API_BASE_URL, arrivalDeparture);
    }

    updateArrivalDeparture(id, arrivalDeparture) {
        return axios.put(`${ARRIVAL_DEPARTURE_API_BASE_URL}/${id}`, arrivalDeparture);
    }

    deleteArrivalDeparture(id) {
        return axios.delete(`${ARRIVAL_DEPARTURE_API_BASE_URL}/${id}`);
    }
}

export default new ArrivalDepartureService();
