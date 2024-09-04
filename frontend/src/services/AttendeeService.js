import axios from 'axios';

const ATTENDEE_API_BASE_URL = "http://localhost:8080/api/attendees";

class AttendeeService {
    getAllAttendees() {
        return axios.get(ATTENDEE_API_BASE_URL);
    }

    getAttendeeById(id) {
        return axios.get(`${ATTENDEE_API_BASE_URL}/${id}`);
    }

    createAttendee(attendee) {
        return axios.post(ATTENDEE_API_BASE_URL, attendee);
    }

    updateAttendee(id, attendee) {
        return axios.put(`${ATTENDEE_API_BASE_URL}/${id}`, attendee);
    }

    deleteAttendee(id) {
        return axios.delete(`${ATTENDEE_API_BASE_URL}/${id}`);
    }
}

export default new AttendeeService();
