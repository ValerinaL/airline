import axios from 'axios';

const MESSAGE_API_BASE_URL = "http://localhost:8080/api/messages";

class MessageService {
    getAllMessages() {
        return axios.get(MESSAGE_API_BASE_URL);
    }

    getMessageById(id) {
        return axios.get(`${MESSAGE_API_BASE_URL}/${id}`);
    }

    createMessage(message) {
        return axios.post(MESSAGE_API_BASE_URL, message);
    }

    updateMessage(id, message) {
        return axios.put(`${MESSAGE_API_BASE_URL}/${id}`, message);
    }

    deleteMessage(id) {
        return axios.delete(`${MESSAGE_API_BASE_URL}/${id}`);
    }
}

export default new MessageService();
