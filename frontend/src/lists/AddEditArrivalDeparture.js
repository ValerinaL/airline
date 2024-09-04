import React, { useState, useEffect } from 'react';
import ArrivalDepartureService from '../services/ArrivalDepartureService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditArrivalDeparture() {
    const [arrivalDeparture, setArrivalDeparture] = useState({
        flightNumber: '',
        scheduledTime: '',
        actualTime: '',
        status: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadArrivalDeparture();
        }
    }, [id]);

    const loadArrivalDeparture = async () => {
        const result = await ArrivalDepartureService.getArrivalDepartureById(id);
        setArrivalDeparture(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await ArrivalDepartureService.updateArrivalDeparture(id, arrivalDeparture);
        } else {
            await ArrivalDepartureService.createArrivalDeparture(arrivalDeparture);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArrivalDeparture({ ...arrivalDeparture, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Arrival/Departure</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Flight Number:</label>
                    <input
                        type="text"
                        name="flightNumber"
                        value={arrivalDeparture.flightNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Scheduled Time:</label>
                    <input
                        type="datetime-local"
                        name="scheduledTime"
                        value={arrivalDeparture.scheduledTime}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Actual Time:</label>
                    <input
                        type="datetime-local"
                        name="actualTime"
                        value={arrivalDeparture.actualTime}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        name="status"
                        value={arrivalDeparture.status}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditArrivalDeparture;
