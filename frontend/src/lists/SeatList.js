import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SeatService from '../services/SeatService';

function SeatList() {
    const [seats, setSeats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadSeats();
    }, []);

    const loadSeats = async () => {
        try {
            const result = await SeatService.getAllSeats();
            setSeats(result.data);
        } catch (error) {
            setError('Failed to load seats.');
        } finally {
            setLoading(false);
        }
    };

    const deleteSeat = async (id) => {
        if (window.confirm("Are you sure you want to delete this seat?")) {
            try {
                await SeatService.deleteSeat(id);
                loadSeats(); // Refresh the list after deletion
            } catch (error) {
                setError('Failed to delete seat.');
            }
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2>Seat</h2>
            <Link to="/add-seat" className="btn btn-primary mb-3">Add Seat</Link>
            {seats.length > 0 ? (
                <ul className="list-group">
                    {seats.map((seat) => (
                        <li key={seat.id} className="list-group-item">
                            <strong>Seat Number:</strong> {seat.seatNumber}
                            <br />
                            <strong>Seat Class:</strong> {seat.seatClass}
                            <br />
                            <strong>Occupied:</strong> {seat.isOccupied ? 'Yes' : 'No'}
                            <br />
                            <strong>Flight ID:</strong> {seat.flight.id}
                            <br />
                            <Link to={`/edit-seat/${seat.id}`} className="btn btn-sm btn-warning mt-2">Edit</Link>
                            <button
                                onClick={() => deleteSeat(seat.id)}
                                className="btn btn-sm btn-danger mt-2 ml-2"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No seats found.</p>
            )}
        </div>
    );
}

export default SeatList;
