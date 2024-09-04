
import axios from 'axios';

const BOOKING_API_BASE_URL = "http://localhost:8080/bookings";

class BookingService {
    getAllBookings() {
        return axios.get(BOOKING_API_BASE_URL);
    }

    getBookingById(id) {
        return axios.get(`${BOOKING_API_BASE_URL}/${id}`);
    }

    createBooking(booking) {
        return axios.post(BOOKING_API_BASE_URL, booking);
    }

    updateBooking(id, booking) {
        return axios.put(`${BOOKING_API_BASE_URL}/${id}`, booking);
    }

    deleteBooking(id) {
        return axios.delete(`${BOOKING_API_BASE_URL}/${id}`);
    }
}

export default new BookingService();
