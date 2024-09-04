import axios from 'axios';

const API_URL = 'http://localhost:8080/api/admin';

class AdminService {
    getAllAdmins() {
        return axios.get(API_URL);
    }

    getAdminById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createAdmin(admin) {
        return axios.post(API_URL, admin);
    }

    updateAdmin(id, admin) {
        return axios.put(`${API_URL}/${id}`, admin);
    }

    deleteAdmin(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new AdminService();
