import React, { useState, useEffect } from 'react';
import FlightService from '../services/FlightService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditFlight() {
    const [flight, setFlight] = useState({
        flightNumber: '',
        origin: '',
        destination: '',
        status: '',
        departureTime: '',
        arrivalTime: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadFlight();
        }
    }, [id]);

    const loadFlight = async () => {
        const result = await FlightService.getFlightById(id);
        setFlight(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await FlightService.updateFlight(id, flight);
        } else {
            await FlightService.createFlight(flight);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFlight({ ...flight, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Flight</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Flight Number:</label>
                    <input
                        type="text"
                        name="flightNumber"
                        value={flight.flightNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Origin:</label>
                    <input
                        type="text"
                        name="origin"
                        value={flight.origin}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={flight.destination}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        name="status"
                        value={flight.status}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Departure Time:</label>
                    <input
                        type="datetime-local"
                        name="departureTime"
                        value={flight.departureTime}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Arrival Time:</label>
                    <input
                        type="datetime-local"
                        name="arrivalTime"
                        value={flight.arrivalTime}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditFlight;
