import React, { useState, useEffect } from 'react';
import PaymentService from '../services/PaymentService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditPayment() {
    const [payment, setPayment] = useState({
        amount: '',
        paymentDate: '',
        paymentMethod: '',
        booking: { id: '' },
        customer: { id: '' }
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadPayment();
        }
    }, [id]);

    const loadPayment = async () => {
        const result = await PaymentService.getPaymentById(id);
        setPayment(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await PaymentService.updatePayment(id, payment);
        } else {
            await PaymentService.createPayment(payment);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment({ ...payment, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Payment</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={payment.amount}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Payment Date:</label>
                    <input
                        type="datetime-local"
                        name="paymentDate"
                        value={new Date(payment.paymentDate).toISOString().slice(0,16)}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Payment Method:</label>
                    <input
                        type="text"
                        name="paymentMethod"
                        value={payment.paymentMethod}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Booking ID:</label>
                    <input
                        type="number"
                        name="booking.id"
                        value={payment.booking.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Customer ID:</label>
                    <input
                        type="number"
                        name="customer.id"
                        value={payment.customer.id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditPayment;
