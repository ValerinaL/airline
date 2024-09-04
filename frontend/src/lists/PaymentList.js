import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PaymentService from '../services/PaymentService';

function PaymentList() {
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPayments();
    }, []);

    const loadPayments = async () => {
        try {
            const result = await PaymentService.getAllPayments();
            setPayments(result.data);
        } catch (error) {
            setError('Failed to load payments.');
        } finally {
            setLoading(false);
        }
    };

    const deletePayment = async (id) => {
        if (window.confirm("Are you sure you want to delete this payment?")) {
            try {
                await PaymentService.deletePayment(id);
                loadPayments(); // Refresh the list after deletion
            } catch (error) {
                setError('Failed to delete payment.');
            }
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2>Payment</h2>
            <Link to="/add-payment" className="btn btn-primary mb-3">Add Payment</Link>
            {payments.length > 0 ? (
                <ul className="list-group">
                    {payments.map((payment) => (
                        <li key={payment.id} className="list-group-item">
                            <strong>Amount:</strong> {payment.amount}
                            <br />
                            <strong>Payment Date:</strong> {new Date(payment.paymentDate).toLocaleString()}
                            <br />
                            <strong>Payment Method:</strong> {payment.paymentMethod}
                            <br />
                            <strong>Booking ID:</strong> {payment.booking.id}
                            <br />
                            <strong>Customer ID:</strong> {payment.customer.id}
                            <br />
                            <Link to={`/edit-payment/${payment.id}`} className="btn btn-sm btn-warning mt-2">Edit</Link>
                            <button onClick={() => deletePayment(payment.id)} className="btn btn-sm btn-danger mt-2 ml-2">Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No payments found.</p>
            )}
        </div>
    );
}

export default PaymentList;
