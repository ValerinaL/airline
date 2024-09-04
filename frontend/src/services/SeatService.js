import axios from 'axios';

const SEAT_API_BASE_URL = "http://localhost:8080/seats";

class SeatService {
    getAllSeats() {
        return axios.get(SEAT_API_BASE_URL);
    }

    getSeatById(id) {
        return axios.get(`${SEAT_API_BASE_URL}/${id}`);
    }

    createSeat(seat) {
        return axios.post(SEAT_API_BASE_URL, seat);
    }

    updateSeat(id, seat) {
        return axios.put(`${SEAT_API_BASE_URL}/${id}`, seat);
    }

    deleteSeat(id) {
        return axios.delete(`${SEAT_API_BASE_URL}/${id}`);
    }
}

export default new SeatService();
