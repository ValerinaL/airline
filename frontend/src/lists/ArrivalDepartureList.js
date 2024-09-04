import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrivalDepartureService from '../services/ArrivalDepartureService';

function ArrivalDepartureList() {
    const [arrivalDepartures, setArrivalDepartures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadArrivalDepartures();
    }, []);

    const loadArrivalDepartures = async () => {
        try {
            const result = await ArrivalDepartureService.getAllArrivalDepartures();
            setArrivalDepartures(result.data);
        } catch (error) {
            setError('Failed to load arrival and departure data.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2>Arrival & Departure </h2>
            <Link to="/add-arrivaldeparture" className="btn btn-primary mb-3">Add Arrival/Departure</Link>
            {arrivalDepartures.length > 0 ? (
                <ul className="list-group">
                    {arrivalDepartures.map((item) => (
                        <li key={item.id} className="list-group-item">
                            <strong>{item.flightNumber}</strong> - Scheduled: {item.scheduledTime} - Actual: {item.actualTime} - Status: {item.status}
                            <Link to={`/edit-arrivaldeparture/${item.id}`} className="btn btn-sm btn-warning ml-3">Edit</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No arrival/departure records found.</p>
            )}
        </div>
    );
}

export default ArrivalDepartureList;
