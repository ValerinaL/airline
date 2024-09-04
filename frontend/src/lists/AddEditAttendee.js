import React, { useState, useEffect } from 'react';
import AttendeeService from '../services/AttendeeService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditAttendee() {
    const [attendee, setAttendee] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadAttendee();
        }
    }, [id]);

    const loadAttendee = async () => {
        const result = await AttendeeService.getAttendeeById(id);
        setAttendee(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await AttendeeService.updateAttendee(id, attendee);
        } else {
            await AttendeeService.createAttendee(attendee);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAttendee({ ...attendee, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Attendee</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={attendee.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={attendee.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={attendee.phone}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditAttendee;
