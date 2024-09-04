import React, { useState, useEffect } from 'react';
import SeatService from '../services/SeatService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditSeat() {
    const [seat, setSeat] = useState({
        seatNumber: '',
        seatClass: '',
        isOccupied: false,
        flight: { id: '' }
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadSeat();
        }
    }, [id]);

    const loadSeat = async () => {
        const result = await SeatService.getSeatById(id);
        setSeat(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await SeatService.updateSeat(id, seat);
        } else {
            await SeatService.createSeat(seat);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSeat({ ...seat, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Seat</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Seat Number:</label>
                    <input
                        type="text"
                        name="seatNumber"
                        value={seat.seatNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Seat Class:</label>
                    <input
                        type="text"
                        name="seatClass"
                        value={seat.seatClass}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Occupied:</label>
                    <input
                        type="checkbox"
                        name="isOccupied"
                        checked={seat.isOccupied}
                        onChange={(e) => setSeat({ ...seat, isOccupied: e.target.checked })}
                    />
                </div>
                <div>
                    <label>Flight ID:</label>
                    <input
                        type="number"
                        name="flight.id"
                        value={seat.flight.id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditSeat;
