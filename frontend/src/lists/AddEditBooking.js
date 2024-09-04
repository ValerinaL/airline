import React, { useState, useEffect } from 'react';
import BookingService from '../services/BookingService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditBooking() {
    const [booking, setBooking] = useState({
        customer: { id: '' },
        flight: { id: '' },
        seat: { id: '' },
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadBooking();
        }
    }, [id]);

    const loadBooking = async () => {
        const result = await BookingService.getBookingById(id);
        setBooking(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await BookingService.updateBooking(id, booking);
        } else {
            await BookingService.createBooking(booking);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooking({ ...booking, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Booking</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Customer ID:</label>
                    <input
                        type="text"
                        name="customer"
                        value={booking.customer.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Flight ID:</label>
                    <input
                        type="text"
                        name="flight"
                        value={booking.flight.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Seat ID:</label>
                    <input
                        type="text"
                        name="seat"
                        value={booking.seat.id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditBooking;
