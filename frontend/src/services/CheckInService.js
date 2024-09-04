import axios from 'axios';

const API_URL = 'http://localhost:8080/api/check_in';

class CheckInService {
    getAllCheckins() {
        return axios.get(API_URL);
    }

    getCheckinById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createCheckin(checkin) {
        return axios.post(API_URL, checkin);
    }

    updateCheckin(id, checkin) {
        return axios.put(`${API_URL}/${id}`, checkin);
    }

    deleteCheckin(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new CheckInService();
