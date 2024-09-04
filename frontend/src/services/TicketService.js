import axios from 'axios';

const TICKET_API_BASE_URL = "http://localhost:8080/tickets";

class TicketService {
    getAllTickets() {
        return axios.get(TICKET_API_BASE_URL);
    }

    getTicketById(id) {
        return axios.get(`${TICKET_API_BASE_URL}/${id}`);
    }

    createTicket(ticket) {
        return axios.post(TICKET_API_BASE_URL, ticket);
    }

    updateTicket(id, ticket) {
        return axios.put(`${TICKET_API_BASE_URL}/${id}`, ticket);
    }

    deleteTicket(id) {
        return axios.delete(`${TICKET_API_BASE_URL}/${id}`);
    }
}

export default new TicketService();
