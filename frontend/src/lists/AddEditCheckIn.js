import React, { useState, useEffect } from 'react';
import CheckInService from '../services/CheckInService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditCheckIn() {
    const [checkin, setCheckin] = useState({
        checkinTime: '',
        checkedIn: false,
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadCheckIn();
        }
    }, [id]);

    const loadCheckIn = async () => {
        const result = await CheckInService.getCheckinById(id);
        setCheckin(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await CheckInService.updateCheckin(id, checkin);
        } else {
            await CheckInService.createCheckin(checkin);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckin({ ...checkin, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Check-in</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Check-in Time:</label>
                    <input
                        type="text"
                        name="checkinTime"
                        value={checkin.checkinTime}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Checked In:</label>
                    <input
                        type="checkbox"
                        name="checkedIn"
                        checked={checkin.checkedIn}
                        onChange={(e) => setCheckin({ ...checkin, checkedIn: e.target.checked })}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditCheckIn;
