import axios from 'axios';

const PAYMENT_API_BASE_URL = "http://localhost:8080/payments";

class PaymentService {
    getAllPayments() {
        return axios.get(PAYMENT_API_BASE_URL);
    }

    getPaymentById(id) {
        return axios.get(`${PAYMENT_API_BASE_URL}/${id}`);
    }

    createPayment(payment) {
        return axios.post(PAYMENT_API_BASE_URL, payment);
    }

    updatePayment(id, payment) {
        return axios.put(`${PAYMENT_API_BASE_URL}/${id}`, payment);
    }

    deletePayment(id) {
        return axios.delete(`${PAYMENT_API_BASE_URL}/${id}`);
    }
}

export default new PaymentService();
