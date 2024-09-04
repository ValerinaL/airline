import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlightService from '../services/FlightService';
import axios from 'axios';

function FlightList() {
    const [flights, setFlights] = useState([]);
const FLIGHT_API_BASE_URL = "http://localhost:8085/flight";
    useEffect(() => {
        loadFlights();
    }, []);

    const loadFlights = async () => {
        const result = await FlightService.getAllFlights();
        setFlights(result.data);
    };

    return (
        <div>
            <h2>Flight List</h2>
            <Link to="/add-flight">Add Flight</Link>
            <ul>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        Flight Number: {flight.flightNumber} - From: {flight.origin} - To: {flight.destination}
                        <Link to={`/edit-flight/${flight.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FlightList;
