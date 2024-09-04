import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookingService from '../services/BookingService';
import axios from 'axios';

function BookingList() {
    const [bookings, setBookings] = useState([]);

const BOOKING_API_BASE_URL = "http://localhost:8080/bookings";

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        const result = await BookingService.getAllBookings();
        setBookings(result.data);
    };

    return (
        <div>
            <h2>Booking</h2>
            <Link to="/add-booking">Add Booking</Link>
            <ul>
                {bookings.map((item) => (
                    <li key={item.id}>
                        Customer: {item.customer.name} - Flight: {item.flight.flightNumber} - Seat: {item.seat.seatNumber}
                        <Link to={`/edit-booking/${item.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingList;
